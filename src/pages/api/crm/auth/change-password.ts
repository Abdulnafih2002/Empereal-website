export const prerender = false;
import type { APIRoute } from "astro";
import { verifyPassword, hashPassword } from "../../../../lib/auth.js";
import { putPasswordHash } from "../../../../lib/storage.js";

export const POST: APIRoute = async ({ request }) => {
  let body: { currentPassword?: string; newPassword?: string };
  try {
    body = await request.json() as typeof body;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const { currentPassword, newPassword } = body;
  if (!currentPassword || !newPassword) {
    return json({ error: "Both fields are required." }, 400);
  }
  if (newPassword.length < 8) {
    return json({ error: "New password must be at least 8 characters." }, 400);
  }

  const ok = await verifyPassword(currentPassword);
  if (!ok) {
    return json({ error: "Current password is incorrect." }, 401);
  }

  const hash = await hashPassword(newPassword);
  await putPasswordHash(hash);

  return json({ ok: true }, 200);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
