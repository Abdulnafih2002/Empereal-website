export const prerender = false;
import type { APIRoute } from "astro";
import { listAllBlobs, deleteBlobUrl, cleanupOrphanBlobs } from "../../../../lib/storage.js";

// GET — list all blobs
export const GET: APIRoute = async () => {
  const blobs = await listAllBlobs();
  return json(blobs, 200);
};

// DELETE — delete a single blob by URL
export const DELETE: APIRoute = async ({ request }) => {
  let body: { url?: string };
  try {
    body = await request.json() as { url?: string };
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  if (!body.url) return json({ error: "url is required." }, 400);
  try {
    await deleteBlobUrl(body.url);
    return json({ ok: true }, 200);
  } catch {
    return json({ error: "Failed to delete blob." }, 500);
  }
};

// POST — cleanup orphaned blobs (keep newest per data key, delete older)
export const POST: APIRoute = async () => {
  try {
    const deleted = await cleanupOrphanBlobs();
    return json({ deleted }, 200);
  } catch {
    return json({ error: "Cleanup failed." }, 500);
  }
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
