import { put, list, del } from "@vercel/blob";
import type { Enquiry, Solution, Project, SiteSettings, CrmBlogPost } from "./types.js";

// Local dev in-memory fallback when BLOB_READ_WRITE_TOKEN is not set
const memStore = new Map<string, string>();

// Vercel Blob charges `list()` as an advanced operation. Keep a short-lived
// index and JSON cache in each warm function instance so page renders do not
// issue a list request for every record type on every navigation.
const CACHE_TTL_MS = 30_000;
type BlobItem = Awaited<ReturnType<typeof list>>["blobs"][number];
let blobIndex: { expiresAt: number; items: BlobItem[] } | undefined;
let blobIndexRequest: Promise<BlobItem[]> | undefined;
const latestBlobUrls = new Map<string, { url: string; expiresAt: number }>();
const jsonCache = new Map<string, { expiresAt: number; value: unknown }>();

function blobToken(): string {
  return (process.env.BLOB_READ_WRITE_TOKEN ?? import.meta.env.BLOB_READ_WRITE_TOKEN ?? "").trim();
}

function hasBlob(): boolean {
  return !!blobToken();
}

function requireEnquiryStorage(): void {
  if (!import.meta.env.DEV && !hasBlob()) {
    throw new Error("Enquiry storage requires BLOB_READ_WRITE_TOKEN in the deployment environment.");
  }
}

async function getBlobJson<T>(pathname: string, fallback: T, strict = false): Promise<T> {
  if (!hasBlob()) {
    const raw = memStore.get(pathname);
    return raw ? (JSON.parse(raw) as T) : fallback;
  }
  try {
    const cached = jsonCache.get(pathname);
    if (cached && cached.expiresAt > Date.now()) return cached.value as T;

    const cachedUrl = latestBlobUrls.get(pathname);
    let url = cachedUrl && cachedUrl.expiresAt > Date.now() ? cachedUrl.url : undefined;
    if (!url) {
      const blobs = await getBlobIndex();
      // Pick the newest matching blob in case old versions remain after a
      // deployment or a write made by another warm function instance.
      const matches = blobs
        .filter((blob) => blob.pathname === pathname || blob.pathname.startsWith(`${pathname}-`))
        .sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());
      url = matches[0]?.url;
      if (url) latestBlobUrls.set(pathname, { url, expiresAt: Date.now() + CACHE_TTL_MS });
    }
    if (!url) {
      jsonCache.set(pathname, { expiresAt: Date.now() + CACHE_TTL_MS, value: fallback });
      return fallback;
    }
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Blob read failed (${res.status}) for ${pathname}`);
    const value = (await res.json()) as T;
    jsonCache.set(pathname, { expiresAt: Date.now() + CACHE_TTL_MS, value });
    return value;
  } catch (error) {
    if (strict) throw error;
    return fallback;
  }
}

async function putBlobJson(pathname: string, data: unknown): Promise<void> {
  if (!hasBlob()) {
    memStore.set(pathname, JSON.stringify(data));
    return;
  }
  const token = blobToken();
  // Reuse an already cached index to clean previous versions without an extra
  // `list()` call. If no index is warm, leave cleanup to the Storage page's
  // explicit orphan cleanup action.
  const old = blobIndex?.expiresAt && blobIndex.expiresAt > Date.now()
    ? blobIndex.items.filter((blob) => blob.pathname === pathname || blob.pathname.startsWith(`${pathname}-`))
    : [];
  // Keep unique URLs so the CDN cannot serve stale JSON after an overwrite.
  const body = JSON.stringify(data);
  const blob = await put(pathname, body, {
    access: "public",
    addRandomSuffix: true,
    token,
  });
  latestBlobUrls.set(pathname, { url: blob.url, expiresAt: Date.now() + CACHE_TTL_MS });
  jsonCache.set(pathname, { expiresAt: Date.now() + CACHE_TTL_MS, value: data });
  if (old.length > 0) {
    await del(old.map((item) => item.url), { token }).catch(() => {});
  }
  if (blobIndex && blobIndex.expiresAt > Date.now()) {
    const oldUrls = new Set(old.map((item) => item.url));
    blobIndex.items = [
      ...blobIndex.items.filter((item) => !oldUrls.has(item.url)),
      {
        url: blob.url,
        downloadUrl: blob.downloadUrl,
        pathname: blob.pathname,
        size: new TextEncoder().encode(body).length,
        uploadedAt: new Date(),
        etag: blob.etag,
      },
    ];
  }
}

async function getBlobIndex(): Promise<BlobItem[]> {
  if (blobIndex && blobIndex.expiresAt > Date.now()) return blobIndex.items;
  if (blobIndexRequest) return blobIndexRequest;
  blobIndexRequest = list({ prefix: "empereal/", token: blobToken() })
    .then(({ blobs }) => {
      blobIndex = { expiresAt: Date.now() + CACHE_TTL_MS, items: blobs };
      return blobs;
    })
    .finally(() => {
      blobIndexRequest = undefined;
    });
  return blobIndexRequest;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

const AUTH_KEY = "empereal/auth";

export async function getPasswordHash(): Promise<string | null> {
  const data = await getBlobJson<{ hash?: string }>(AUTH_KEY, {});
  return data.hash ?? null;
}

export async function putPasswordHash(hash: string): Promise<void> {
  return putBlobJson(AUTH_KEY, { hash });
}

// ─── Enquiries ────────────────────────────────────────────────────────────────

const ENQUIRIES_KEY = "empereal/enquiries";

export async function getEnquiries(): Promise<Enquiry[]> {
  requireEnquiryStorage();
  return getBlobJson<Enquiry[]>(ENQUIRIES_KEY, [], true);
}

export async function putEnquiries(enquiries: Enquiry[]): Promise<void> {
  requireEnquiryStorage();
  return putBlobJson(ENQUIRIES_KEY, enquiries);
}

// ─── Solutions ────────────────────────────────────────────────────────────────

const SOLUTIONS_KEY = "empereal/solutions";

const DEFAULT_SOLUTIONS: Solution[] = [
  {
    id: "bipv",
    title: "Architectural BIPV & Solar Facade",
    description:
      "Custom-designed solar façades, railings, canopies, and architectural BIPV systems. IEC-certified modules engineered for landmark architecture and Dubai SHAMS/D33 compliant.",
    icon: "bipv",
    href: "/solutions/integrated-infrastructure",
    order: 1,
  },
  {
    id: "solar-power-systems",
    title: "Solar PV Systems",
    description:
      "Utility-scale PV farms, commercial and industrial rooftops, carports, ground-mounted installations, single-axis trackers, and architectural BIPV. Full design, EPC, and O&M.",
    icon: "solar",
    href: "/solutions/solar-power-systems",
    order: 2,
  },
  {
    id: "energy-storage",
    title: "Energy Storage",
    description:
      "Battery energy storage paired with solar PV, patented thermal storage using phase-change materials, molten salt CSP storage, and intelligent energy management systems.",
    icon: "battery",
    href: "/solutions/energy-storage",
    order: 3,
  },
  {
    id: "green-hydrogen",
    title: "Green Hydrogen",
    description:
      "Alkaline electrolyser-based green hydrogen production paired with solar PV and desalination, including sea-water-to-hydrogen projects and DEWA hydrogen plant.",
    icon: "h2",
    href: "/solutions/green-hydrogen",
    order: 4,
  },
  {
    id: "water-desalination",
    title: "Water Desalination",
    description:
      "Solar thermal desalination using LFR technology, PV-RO systems, forward osmosis, and standalone off-grid fresh water systems.",
    icon: "drop",
    href: "/solutions/water-desalination",
    order: 5,
  },
];

export async function getSolutions(): Promise<Solution[]> {
  // Solution areas are site-defined navigation content. An older production
  // Blob contains a sixth, now-merged infrastructure solution.
  // record, so reading that blob makes deployments diverge from this source.
  return DEFAULT_SOLUTIONS.map((solution) => ({ ...solution }));
}

export async function putSolutions(solutions: Solution[]): Promise<void> {
  return putBlobJson(SOLUTIONS_KEY, solutions);
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const PROJECTS_KEY = "empereal/projects";

// Loaded at build time from src/data/projects.json
import rawProjects from "../data/projects.json";

const DEFAULT_PROJECTS: Project[] = (
  rawProjects as Array<{
    slug: string;
    title: string;
    location: string;
    scale?: string;
    categories?: string[];
    image?: string;
    summary?: string;
  }>
).map((p, i) => ({
  id: p.slug,
  title: p.title,
  location: p.location,
  capacity: p.scale,
  category: p.categories?.[0] ?? "solar-pv",
  imageUrl: p.image ?? "/images/project-uae.jpg",
  description: p.summary,
  order: i + 1,
}));

export async function getProjects(): Promise<Project[]> {
  const projects = await getBlobJson<Project[]>(PROJECTS_KEY, DEFAULT_PROJECTS);
  return [...projects].sort((a, b) => a.order - b.order);
}

export async function putProjects(projects: Project[]): Promise<void> {
  return putBlobJson(PROJECTS_KEY, projects);
}

// ─── Settings ─────────────────────────────────────────────────────────────────

const SETTINGS_KEY = "empereal/settings";

const DEFAULT_SETTINGS: SiteSettings = {
  address: "Dubai, United Arab Emirates",
  email: "info@empereal.com",
  phone: "+971 XX XXX XXXX",
  whatsappNumber: "971563762386",
  linkedinUrl: "",
  twitterUrl: "",
};

export async function getSettings(): Promise<SiteSettings> {
  const settings = await getBlobJson<SiteSettings>(SETTINGS_KEY, DEFAULT_SETTINGS);
  return { ...settings, whatsappNumber: DEFAULT_SETTINGS.whatsappNumber };
}

export async function putSettings(settings: SiteSettings): Promise<void> {
  return putBlobJson(SETTINGS_KEY, settings);
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────

const BLOG_KEY = "empereal/blog";
const HIDDEN_BLOG_SLUGS = new Set(["empereal-partners-adnoc-solar-projects"]);
const REQUIRED_BLOG_SLUGS = new Set(["manoj-divakaran-empereal-founder-story-edb"]);

// Loaded at build time from src/data/blog.ts
import { posts as staticBlogPosts } from "../data/blog.js";

const DEFAULT_BLOG_POSTS: CrmBlogPost[] = staticBlogPosts.map((p, i) => ({
  id: p.slug,
  slug: p.slug,
  tag: p.tag,
  date: p.date,
  isoDate: p.isoDate,
  readTime: p.readTime,
  title: p.title,
  excerpt: p.excerpt,
  image: p.image,
  youtubeId: p.youtubeId,
  sections: p.sections,
  order: i + 1,
}));

export async function getBlogPosts(): Promise<CrmBlogPost[]> {
  const posts = await getBlobJson<CrmBlogPost[]>(BLOG_KEY, DEFAULT_BLOG_POSTS);
  const storedSlugs = new Set(posts.map((post) => post.slug));
  const requiredPosts = DEFAULT_BLOG_POSTS
    .filter((post) => REQUIRED_BLOG_SLUGS.has(post.slug) && !storedSlugs.has(post.slug))
    .map((post) => ({ ...post, order: 0 }));

  return [...requiredPosts, ...posts]
    .filter((post) => !HIDDEN_BLOG_SLUGS.has(post.slug))
    .sort((a, b) => a.order - b.order);
}

export async function putBlogPosts(posts: CrmBlogPost[]): Promise<void> {
  return putBlobJson(BLOG_KEY, posts);
}

// ─── Blob Storage Management ──────────────────────────────────────────────────

const DATA_KEYS = [
  "empereal/auth",
  "empereal/enquiries",
  "empereal/blog",
  "empereal/projects",
  "empereal/settings",
];

export function blobEnabled(): boolean {
  return hasBlob();
}

export async function listAllBlobs() {
  if (!hasBlob()) return [];
  return getBlobIndex();
}

export async function deleteBlobUrl(url: string): Promise<void> {
  await del([url], { token: blobToken() });
}

export async function cleanupOrphanBlobs(): Promise<number> {
  if (!hasBlob()) return 0;
  const blobs = await getBlobIndex();
  const toDelete: string[] = [];
  for (const key of DATA_KEYS) {
    const group = blobs
      .filter((b) => b.pathname.startsWith(key))
      .sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());
    if (group.length > 1) toDelete.push(...group.slice(1).map((b) => b.url));
  }
  if (toDelete.length > 0) {
    await del(toDelete, { token: blobToken() });
    blobIndex = undefined;
  }
  return toDelete.length;
}
