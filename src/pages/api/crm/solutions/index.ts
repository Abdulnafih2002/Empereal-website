export const prerender = false;
import type { APIRoute } from "astro";
import { getSolutions, putSolutions } from "../../../../lib/storage.js";
import type { Solution } from "../../../../lib/types.js";

export const GET: APIRoute = async () => {
  const solutions = await getSolutions();
  return new Response(JSON.stringify(solutions), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  let body: Omit<Solution, "id">;
  try {
    body = await request.json() as Omit<Solution, "id">;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (!body.title?.trim() || !body.description?.trim()) {
    return json({ error: "Title and description are required." }, 400);
  }

  const all = await getSolutions();
  const maxOrder = all.reduce((m, s) => Math.max(m, s.order), 0);
  const solution: Solution = {
    id: crypto.randomUUID(),
    title: body.title.trim(),
    subtitle: body.subtitle?.trim() || undefined,
    description: body.description.trim(),
    icon: body.icon || undefined,
    imageUrl: body.imageUrl?.trim() || undefined,
    href: body.href?.trim() || undefined,
    order: body.order ?? maxOrder + 1,
  };

  await putSolutions([...all, solution]);
  return json(solution, 201);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
