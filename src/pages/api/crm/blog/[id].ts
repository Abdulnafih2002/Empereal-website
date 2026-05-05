export const prerender = false;
import type { APIRoute } from "astro";
import { getBlogPosts, putBlogPosts } from "../../../../lib/storage.js";
import type { CrmBlogPost } from "../../../../lib/types.js";

export const PATCH: APIRoute = async ({ request, params }) => {
  const { id } = params;
  let body: Partial<CrmBlogPost>;
  try {
    body = await request.json() as Partial<CrmBlogPost>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const all = await getBlogPosts();
  const idx = all.findIndex((p) => p.id === id);
  if (idx === -1) return json({ error: "Not found." }, 404);

  if (body.isoDate) {
    body.date = formatDate(body.isoDate);
  }

  if (body.slug && body.slug !== all[idx].slug) {
    if (all.some((p, i) => i !== idx && p.slug === body.slug)) {
      return json({ error: "A post with this slug already exists." }, 400);
    }
  }

  all[idx] = { ...all[idx], ...body, id: all[idx].id };
  await putBlogPosts(all);
  return json(all[idx], 200);
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const all = await getBlogPosts();
  const filtered = all.filter((p) => p.id !== id);
  if (filtered.length === all.length) return json({ error: "Not found." }, 404);
  await putBlogPosts(filtered);
  return json({ ok: true }, 200);
};

function formatDate(isoDate: string): string {
  try {
    return new Date(isoDate + "T12:00:00").toLocaleDateString("en-US", {
      month: "long", day: "numeric", year: "numeric",
    });
  } catch {
    return isoDate;
  }
}

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
