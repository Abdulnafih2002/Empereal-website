export const prerender = false;
import type { APIRoute } from "astro";
import { getSettings, putSettings } from "../../../lib/storage.js";
import type { SiteSettings } from "../../../lib/types.js";

export const GET: APIRoute = async () => {
  const settings = await getSettings();
  return new Response(JSON.stringify(settings), {
    headers: { "Content-Type": "application/json" },
  });
};

export const PATCH: APIRoute = async ({ request }) => {
  let body: Partial<SiteSettings>;
  try {
    body = await request.json() as Partial<SiteSettings>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const current = await getSettings();
  const updated: SiteSettings = { ...current, ...body };
  await putSettings(updated);
  return json(updated, 200);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
