export const prerender = false;
import type { APIRoute } from "astro";
import { getFeatures, putFeatures } from "../../../../../lib/storage.js";
import type { FeatureCard } from "../../../../../lib/types.js";

export const PATCH: APIRoute = async ({ request, params }) => {
  const { id } = params;
  let body: Partial<FeatureCard>;
  try {
    body = await request.json() as Partial<FeatureCard>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const current = await getFeatures();
  const idx = current.cards.findIndex((c) => c.id === id);
  if (idx === -1) return json({ error: "Not found." }, 404);

  current.cards[idx] = { ...current.cards[idx], ...body, id: current.cards[idx].id };
  await putFeatures(current);
  return json(current.cards[idx], 200);
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const current = await getFeatures();
  const filtered = current.cards.filter((c) => c.id !== id);
  if (filtered.length === current.cards.length) return json({ error: "Not found." }, 404);
  await putFeatures({ ...current, cards: filtered });
  return json({ ok: true }, 200);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
