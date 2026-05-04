import { c as clearAuthCookie } from '../../../../chunks/auth_0-FqN9zB.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const POST = async () => {
  const headers = new Headers({ "Content-Type": "application/json" });
  clearAuthCookie(headers);
  headers.set("Location", "/crm/login");
  return new Response(null, { status: 302, headers });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
