export const prerender = false;
import type { APIRoute } from "astro";
import { getSolutions, putSolutions } from "../../../../lib/storage.js";
import type { Solution } from "../../../../lib/types.js";

export const PATCH: APIRoute = async ({ request, params }) => {
  const { id } = params;
  let body: Partial<Solution>;
  try {
    body = await request.json() as Partial<Solution>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const all = await getSolutions();
  const idx = all.findIndex((s) => s.id === id);
  if (idx === -1) return json({ error: "Not found." }, 404);

  all[idx] = { ...all[idx], ...body, id: all[idx].id };
  await putSolutions(all);
  return json(all[idx], 200);
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const all = await getSolutions();
  const filtered = all.filter((s) => s.id !== id);
  if (filtered.length === all.length) return json({ error: "Not found." }, 404);
  await putSolutions(filtered);
  return json({ ok: true }, 200);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
