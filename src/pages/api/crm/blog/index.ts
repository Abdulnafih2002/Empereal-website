export const prerender = false;
import type { APIRoute } from "astro";
import { getBlogPosts, putBlogPosts } from "../../../../lib/storage.js";
import type { CrmBlogPost } from "../../../../lib/types.js";

export const GET: APIRoute = async () => {
  const posts = await getBlogPosts();
  return json(posts, 200);
};

export const POST: APIRoute = async ({ request }) => {
  let body: Omit<CrmBlogPost, "id">;
  try {
    body = await request.json() as Omit<CrmBlogPost, "id">;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (!body.title?.trim()) return json({ error: "Title is required." }, 400);
  if (!body.slug?.trim())  return json({ error: "Slug is required." }, 400);
  if (!body.excerpt?.trim()) return json({ error: "Excerpt is required." }, 400);

  const all = await getBlogPosts();

  if (all.some((p) => p.slug === body.slug.trim())) {
    return json({ error: "A post with this slug already exists." }, 400);
  }

  const maxOrder = all.reduce((m, p) => Math.max(m, p.order), 0);
  const post: CrmBlogPost = {
    id: crypto.randomUUID(),
    slug: body.slug.trim(),
    tag: body.tag?.trim() || "General",
    date: formatDate(body.isoDate),
    isoDate: body.isoDate?.trim() || new Date().toISOString().slice(0, 10),
    readTime: body.readTime?.trim() || "3 min read",
    title: body.title.trim(),
    excerpt: body.excerpt.trim(),
    image: body.image?.trim() || "/images/hero-solar.jpg",
    sections: Array.isArray(body.sections) ? body.sections.filter((s) => s.heading?.trim()) : [],
    order: body.order ?? maxOrder + 1,
  };

  await putBlogPosts([...all, post]);
  return json(post, 201);
};

function formatDate(isoDate: string): string {
  if (!isoDate) return "";
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
