export const prerender = false;
import type { APIRoute } from "astro";
import { getFeatures, putFeatures } from "../../../../../lib/storage.js";
import type { FeatureCard } from "../../../../../lib/types.js";

export const GET: APIRoute = async () => {
  const { cards } = await getFeatures();
  return new Response(JSON.stringify(cards), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  let body: Omit<FeatureCard, "id">;
  try {
    body = await request.json() as Omit<FeatureCard, "id">;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (!body.title?.trim() || !body.description?.trim()) {
    return json({ error: "Title and description are required." }, 400);
  }

  const current = await getFeatures();
  const maxOrder = current.cards.reduce((m, c) => Math.max(m, c.order), 0);
  const card: FeatureCard = {
    id: crypto.randomUUID(),
    title: body.title.trim(),
    description: body.description.trim(),
    icon: body.icon?.trim() || undefined,
    imageUrl: body.imageUrl?.trim() || undefined,
    href: body.href?.trim() || undefined,
    order: body.order ?? maxOrder + 1,
  };

  await putFeatures({ ...current, cards: [...current.cards, card] });
  return json(card, 201);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
