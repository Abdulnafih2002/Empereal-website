import { a as verifyPassword, h as hashPassword } from '../../../../chunks/auth_CIeqbsfA.mjs';
import { putPasswordHash } from '../../../../chunks/storage_Dt7dQkXR.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
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
function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
