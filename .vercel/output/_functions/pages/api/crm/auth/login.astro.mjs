import { a as verifyPassword, s as signToken, b as setAuthCookie } from '../../../../chunks/auth_0-FqN9zB.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const ok = await verifyPassword(body.password ?? "");
  if (!ok) {
    return json({ error: "Invalid password." }, 401);
  }
  const token = signToken();
  const headers = new Headers({ "Content-Type": "application/json" });
  setAuthCookie(headers, token);
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
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
