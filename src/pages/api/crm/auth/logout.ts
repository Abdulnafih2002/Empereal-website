export const prerender = false;
import type { APIRoute } from "astro";
import { clearAuthCookie } from "../../../../lib/auth.js";

// GET: browser navigation — no CSRF check, works on any deployment URL
export const GET: APIRoute = async () => {
  const headers = new Headers();
  clearAuthCookie(headers);
  headers.set("Location", "/");
  return new Response(null, { status: 302, headers });
};

// POST: kept for backwards compatibility
export const POST: APIRoute = async () => {
  const headers = new Headers();
  clearAuthCookie(headers);
  headers.set("Location", "/");
  return new Response(null, { status: 302, headers });
};
