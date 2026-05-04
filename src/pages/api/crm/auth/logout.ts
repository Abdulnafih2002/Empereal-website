export const prerender = false;
import type { APIRoute } from "astro";
import { clearAuthCookie } from "../../../../lib/auth.js";

export const POST: APIRoute = async () => {
  const headers = new Headers({ "Content-Type": "application/json" });
  clearAuthCookie(headers);
  headers.set("Location", "/crm/login");
  return new Response(null, { status: 302, headers });
};
