export const prerender = false;
import type { APIRoute } from "astro";
import { verifyPassword, signToken, setAuthCookie } from "../../../../lib/auth.js";

export const POST: APIRoute = async ({ request }) => {
  let body: { password?: string };
  try {
    body = await request.json() as { password?: string };
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const ok = await verifyPassword(body.password ?? "");
  if (!ok) {
    return json({ error: "Invalid password." }, 401);
  }

  let token: string;
  try {
    token = signToken();
  } catch {
    return json({ error: "Server configuration error. Contact the administrator." }, 500);
  }
  const headers = new Headers({ "Content-Type": "application/json" });
  setAuthCookie(headers, token);
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
