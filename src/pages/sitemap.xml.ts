import type { APIRoute } from "astro";
import { getBlogPosts } from "../lib/storage.js";

export const prerender = false;

const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/leadership",
  "/solutions",
  "/solutions/design-consultancy",
  "/solutions/implementation",
  "/solutions/full-epc",
  "/solutions/solar-power-systems",
  "/solutions/water-desalination",
  "/solutions/energy-storage",
  "/solutions/integrated-infrastructure",
  "/solutions/green-hydrogen",
  "/projects",
  "/blog",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
] as const;

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toLastModified(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? undefined : new Date(timestamp).toISOString();
}

function renderUrl(location: URL, lastModified?: string): string {
  const lastmod = lastModified
    ? `\n    <lastmod>${escapeXml(lastModified)}</lastmod>`
    : "";

  return `  <url>\n    <loc>${escapeXml(location.href)}</loc>${lastmod}\n  </url>`;
}

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL("https://empereal.energy");
  const posts = await getBlogPosts();

  const staticEntries = PUBLIC_ROUTES.map((route) =>
    renderUrl(new URL(route, origin)),
  );

  const blogEntries = posts
    .filter((post) => typeof post.slug === "string" && post.slug.trim().length > 0)
    .map((post) =>
      renderUrl(
        new URL(`/blog/${encodeURIComponent(post.slug.trim())}`, origin),
        toLastModified(post.isoDate),
      ),
    );

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticEntries,
    ...blogEntries,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
