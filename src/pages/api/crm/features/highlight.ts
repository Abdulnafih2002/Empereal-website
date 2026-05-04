export const prerender = false;
import type { APIRoute } from "astro";
import { getFeatures, putFeatures } from "../../../../lib/storage.js";
import type { FeaturedHighlight } from "../../../../lib/types.js";

export const PATCH: APIRoute = async ({ request }) => {
  let body: Partial<FeaturedHighlight>;
  try {
    body = await request.json() as Partial<FeaturedHighlight>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const current = await getFeatures();
  await putFeatures({ ...current, highlight: { ...current.highlight, ...body } });
  return json({ ok: true }, 200);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
