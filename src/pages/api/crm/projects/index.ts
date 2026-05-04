export const prerender = false;
import type { APIRoute } from "astro";
import { getProjects, putProjects } from "../../../../lib/storage.js";
import type { Project } from "../../../../lib/types.js";

export const GET: APIRoute = async () => {
  const projects = await getProjects();
  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  let body: Omit<Project, "id">;
  try {
    body = await request.json() as Omit<Project, "id">;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (!body.title?.trim() || !body.location?.trim()) {
    return json({ error: "Title and location are required." }, 400);
  }

  const all = await getProjects();
  const maxOrder = all.reduce((m, p) => Math.max(m, p.order), 0);
  const project: Project = {
    id: crypto.randomUUID(),
    title: body.title.trim(),
    location: body.location.trim(),
    capacity: body.capacity?.trim() || undefined,
    category: body.category?.trim() || "solar-pv",
    imageUrl: body.imageUrl?.trim() || "/images/project-uae.jpg",
    description: body.description?.trim() || undefined,
    year: body.year || undefined,
    order: body.order ?? maxOrder + 1,
  };

  await putProjects([...all, project]);
  return json(project, 201);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
