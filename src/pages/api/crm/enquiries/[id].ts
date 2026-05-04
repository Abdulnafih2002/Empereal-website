export const prerender = false;
import type { APIRoute } from "astro";
import { getEnquiries, putEnquiries } from "../../../../lib/storage.js";

export const PATCH: APIRoute = async ({ request, params }) => {
  const { id } = params;
  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const all = await getEnquiries();
  const idx = all.findIndex((e) => e.id === id);
  if (idx === -1) return json({ error: "Not found." }, 404);

  const { status, notes } = body;
  if (status !== undefined) all[idx].status = status as typeof all[number]["status"];
  if (notes !== undefined) all[idx].notes = notes as string;
  await putEnquiries(all);
  return json(all[idx], 200);
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const all = await getEnquiries();
  const filtered = all.filter((e) => e.id !== id);
  if (filtered.length === all.length) return json({ error: "Not found." }, 404);
  await putEnquiries(filtered);
  return json({ ok: true }, 200);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
