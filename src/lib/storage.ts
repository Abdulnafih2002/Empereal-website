import { put, list } from "@vercel/blob";
import type { Enquiry, Solution, Project, SiteSettings, FeaturesSection, FeatureCard } from "./types.js";

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
    const blob = blobs.find((b) => b.pathname === pathname);
    if (!blob) return fallback;
    const res = await fetch(`${blob.url}?_=${Date.now()}`, { cache: "no-store" });
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
  await put(pathname, JSON.stringify(data), {
    access: "public",
    addRandomSuffix: false,
  });
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

const AUTH_KEY = "empereal/auth.json";

export async function getPasswordHash(): Promise<string | null> {
  const data = await getBlobJson<{ hash?: string }>(AUTH_KEY, {});
  return data.hash ?? null;
}

export async function putPasswordHash(hash: string): Promise<void> {
  return putBlobJson(AUTH_KEY, { hash });
}

// ─── Enquiries ────────────────────────────────────────────────────────────────

const ENQUIRIES_KEY = "empereal/enquiries.json";

export async function getEnquiries(): Promise<Enquiry[]> {
  return getBlobJson<Enquiry[]>(ENQUIRIES_KEY, []);
}

export async function putEnquiries(enquiries: Enquiry[]): Promise<void> {
  return putBlobJson(ENQUIRIES_KEY, enquiries);
}

// ─── Solutions ────────────────────────────────────────────────────────────────

const SOLUTIONS_KEY = "empereal/solutions.json";

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
      "Battery energy storage integrated with solar PV, patented thermal storage using phase-change materials, molten salt CSP storage, and intelligent energy management systems.",
    icon: "battery",
    href: "/solutions/energy-storage",
    order: 3,
  },
  {
    id: "integrated-infrastructure",
    title: "Integrated Energy Infrastructure",
    description:
      "Hybrid systems combining solar PV, thermal, storage, and backup for 24/7 availability — off-grid resorts, industrial co-generation, net-zero buildings, and rural electrification.",
    icon: "hub",
    href: "/solutions/integrated-infrastructure",
    order: 4,
  },
  {
    id: "bipv",
    title: "Architectural BIPV",
    description:
      "Custom-designed solar facades, railings, canopies, and building-integrated systems. IEC-certified modules engineered for landmark architecture — Dubai SHAMS/D33 compliant.",
    icon: "bipv",
    href: "#",
    order: 5,
  },
  {
    id: "green-hydrogen",
    title: "Green Hydrogen Systems",
    description:
      "Alkaline electrolyser-based green hydrogen production integrated with solar PV and desalination — including India's first sea-water-to-hydrogen project and DEWA hydrogen plant.",
    icon: "h2",
    href: "#",
    order: 6,
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

const PROJECTS_KEY = "empereal/projects.json";

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

const SETTINGS_KEY = "empereal/settings.json";

const DEFAULT_SETTINGS: SiteSettings = {
  address: "Dubai, United Arab Emirates",
  email: "info@empereal.com",
  phone: "+971 XX XXX XXXX",
  whatsappNumber: "971501234567",
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

const FEATURES_KEY = "empereal/features.json";

const DEFAULT_FEATURES: FeaturesSection = {
  highlight: {
    eyebrow: "End-to-End Solar EPC",
    title: "From Design to Commissioning",
    description:
      "A single accountable partner for solar development, engineering, procurement, construction, and long-horizon asset performance.",
    badgeLabel: "Savings:",
    badgeValue: "Up to 60–70%",
    badgeSuffix: "Energy Cost Reduction",
    gaugePercent: 65,
    imageUrl: "/images/feature-epc.jpg",
  },
  cards: [
    {
      id: "high-efficiency",
      title: "High-Efficiency Power Systems",
      description: "Advanced solar technology for maximum energy output and optimized performance.",
      icon: `<rect x="3" y="6" width="18" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 10h18M3 14h18M9 6v12M15 6v12" stroke="currentColor" stroke-width="1.25"/>`,
      imageUrl: "/images/hero-solar.jpg",
      href: "#",
      order: 1,
    },
    {
      id: "commercial-industrial",
      title: "Commercial & Industrial Solar Solutions",
      description: "Scalable solar solutions for businesses, factories, and commercial facilities.",
      icon: `<path d="M3 21V9l7-4 7 4v12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 21V13h5v8" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 14h4M6 17h4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>`,
      imageUrl: "/images/project-uae.jpg",
      href: "#",
      order: 2,
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
