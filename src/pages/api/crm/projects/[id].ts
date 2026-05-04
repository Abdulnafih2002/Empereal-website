export const prerender = false;
import type { APIRoute } from "astro";
import { getProjects, putProjects } from "../../../../lib/storage.js";
import type { Project } from "../../../../lib/types.js";

export const PATCH: APIRoute = async ({ request, params }) => {
  const { id } = params;
  let body: Partial<Project>;
  try {
    body = await request.json() as Partial<Project>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const all = await getProjects();
  const idx = all.findIndex((p) => p.id === id);
  if (idx === -1) return json({ error: "Not found." }, 404);

  all[idx] = { ...all[idx], ...body, id: all[idx].id };
  await putProjects(all);
  return json(all[idx], 200);
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const all = await getProjects();
  const filtered = all.filter((p) => p.id !== id);
  if (filtered.length === all.length) return json({ error: "Not found." }, 404);
  await putProjects(filtered);
  return json({ ok: true }, 200);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
