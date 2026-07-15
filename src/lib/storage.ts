import { put, list, del } from "@vercel/blob";
import type { Enquiry, Solution, Project, SiteSettings, FeaturesSection, FeatureCard, CrmBlogPost } from "./types.js";

// Local dev in-memory fallback when BLOB_READ_WRITE_TOKEN is not set
const memStore = new Map<string, string>();

function hasBlob(): boolean {
  return !!(
    (import.meta.env as Record<string, string>).BLOB_READ_WRITE_TOKEN ??
    process.env.BLOB_READ_WRITE_TOKEN
  );
}

async function getBlobJson<T>(pathname: string, fallback: T): Promise<T> {
  if (!hasBlob()) {
    const raw = memStore.get(pathname);
    return raw ? (JSON.parse(raw) as T) : fallback;
  }
  try {
    const { blobs } = await list({ prefix: pathname });
    if (blobs.length === 0) return fallback;
    // Pick the newest blob — there should only ever be one, but sort defensively
    const blob = blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime())[0];
    const res = await fetch(blob.url, { cache: "no-store" });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

async function putBlobJson(pathname: string, data: unknown): Promise<void> {
  if (!hasBlob()) {
    memStore.set(pathname, JSON.stringify(data));
    return;
  }
  // List old blobs BEFORE writing so we know which ones to delete
  const { blobs: old } = await list({ prefix: pathname });
  // addRandomSuffix: true gives each write a unique CDN URL.
  // With addRandomSuffix: false, Vercel Blob CDN can cache the fixed URL
  // for up to one year even after the content is overwritten.
  await put(pathname, JSON.stringify(data), { access: "public", addRandomSuffix: true });
  // Clean up superseded blobs (fire-and-forget — non-critical)
  if (old.length > 0) del(old.map((b) => b.url)).catch(() => {});
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
  return getBlobJson<Enquiry[]>(ENQUIRIES_KEY, []);
}

export async function putEnquiries(enquiries: Enquiry[]): Promise<void> {
  return putBlobJson(ENQUIRIES_KEY, enquiries);
}

// ─── Solutions ────────────────────────────────────────────────────────────────

const SOLUTIONS_KEY = "empereal/solutions";

const DEFAULT_SOLUTIONS: Solution[] = [
  {
    id: "solar-power-systems",
    title: "Solar Power Systems",
    description:
      "Utility-scale PV farms, commercial and industrial rooftops, carports, ground-mounted installations, single-axis trackers, and architectural BIPV — full design, EPC, and O&M.",
    icon: "solar",
    href: "/solutions/solar-power-systems",
    order: 1,
  },
  {
    id: "water-desalination",
    title: "Water & Desalination",
    description:
      "Solar thermal desalination using LFR technology, PV-RO systems, forward osmosis, solar-biomass hybrid, industrial effluent recovery, and standalone off-grid fresh water systems.",
    icon: "drop",
    href: "/solutions/water-desalination",
    order: 2,
  },
  {
    id: "energy-storage",
    title: "Energy Storage Systems",
    description:
      "Battery energy storage integrated with solar PV, proprietary thermal storage using phase-change materials, molten salt CSP storage, and intelligent energy management systems.",
    icon: "battery",
    href: "/solutions/energy-storage",
    order: 3,
  },
  {
    id: "bipv",
    title: "Architectural BIPV & Integrated Solar Solutions",
    description:
      "Architectural BIPV facades, solar-integrated building systems, microgrids, and smart energy solutions — designed as unified, high-performance infrastructure.",
    icon: "bipv",
    href: "/solutions/integrated-infrastructure",
    order: 4,
  },
  {
    id: "green-hydrogen",
    title: "Green Hydrogen Systems",
    description:
      "Alkaline electrolyser-based green hydrogen production integrated with solar PV and desalination — including India's first sea-water-to-hydrogen project and DEWA hydrogen plant.",
    icon: "h2",
    href: "/solutions/green-hydrogen",
    order: 5,
  },
];

export async function getSolutions(): Promise<Solution[]> {
  const solutions = await getBlobJson<Solution[]>(SOLUTIONS_KEY, DEFAULT_SOLUTIONS);
  return [...solutions].sort((a, b) => a.order - b.order);
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
  whatsappNumber: "971504592854",
  linkedinUrl: "",
  twitterUrl: "",
};

export async function getSettings(): Promise<SiteSettings> {
  return getBlobJson<SiteSettings>(SETTINGS_KEY, DEFAULT_SETTINGS);
}

export async function putSettings(settings: SiteSettings): Promise<void> {
  return putBlobJson(SETTINGS_KEY, settings);
}

// ─── Features Section ─────────────────────────────────────────────────────────

const FEATURES_KEY = "empereal/features";

const DEFAULT_FEATURES: FeaturesSection = {
  highlight: {
    eyebrow: "End-to-End EPC Expertise",
    title: "From Design to Commissioning",
    description:
      "Single accountability from feasibility to long-term O&M — proven across 350+ projects in 15+ countries.",
    badgeLabel: "Accountability:",
    badgeValue: "100%",
    badgeSuffix: "Single-Source EPC Partner",
    gaugePercent: 100,
    imageUrl: "/images/dewa-hq-main.jpg",
  },
  cards: [
    {
      id: "proven-track-record",
      title: "Proven Global Track Record",
      description: "350+ projects across 15+ countries, delivered on time and on budget.",
      icon: `<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" fill="none" stroke="currentColor" stroke-width="1.25"/>`,
      imageUrl: "/images/solar-park.jpg",
      href: "/projects",
      order: 1,
    },
    {
      id: "innovation-core",
      title: "Innovation at Core",
      description: "Pioneering BIPV, agri-PV, floating solar and smart energy systems.",
      icon: `<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
      imageUrl: "/images/mercedes-binghatti.jpg",
      href: "/solutions",
      order: 2,
    },
    {
      id: "sustainability-first",
      title: "Sustainability First",
      description: "Every project delivers measurable carbon reduction and long-term value.",
      icon: `<path d="M5 21c0-9 6-15 15-15 0 9-6 15-15 15Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 21c3-3 6-6 10-10" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>`,
      imageUrl: "/images/sustainability-city.jpg",
      href: "/about",
      order: 3,
    },
  ],
};

export async function getFeatures(): Promise<FeaturesSection> {
  const data = await getBlobJson<FeaturesSection>(FEATURES_KEY, DEFAULT_FEATURES);
  return {
    highlight: data.highlight ?? DEFAULT_FEATURES.highlight,
    cards: [...(data.cards ?? [])].sort((a, b) => a.order - b.order),
  };
}

export async function putFeatures(features: FeaturesSection): Promise<void> {
  return putBlobJson(FEATURES_KEY, features);
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────

const BLOG_KEY = "empereal/blog";

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
  sections: p.sections,
  order: i + 1,
}));

export async function getBlogPosts(): Promise<CrmBlogPost[]> {
  const posts = await getBlobJson<CrmBlogPost[]>(BLOG_KEY, DEFAULT_BLOG_POSTS);
  return [...posts].sort((a, b) => a.order - b.order);
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
  "empereal/features",
];

export function blobEnabled(): boolean {
  return hasBlob();
}

export async function listAllBlobs() {
  if (!hasBlob()) return [];
  const { blobs } = await list({ prefix: "empereal/" });
  return blobs;
}

export async function deleteBlobUrl(url: string): Promise<void> {
  await del([url]);
}

export async function cleanupOrphanBlobs(): Promise<number> {
  if (!hasBlob()) return 0;
  const { blobs } = await list({ prefix: "empereal/" });
  const toDelete: string[] = [];
  for (const key of DATA_KEYS) {
    const group = blobs
      .filter((b) => b.pathname.startsWith(key))
      .sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());
    if (group.length > 1) toDelete.push(...group.slice(1).map((b) => b.url));
  }
  if (toDelete.length > 0) await del(toDelete);
  return toDelete.length;
}
