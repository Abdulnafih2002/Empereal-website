import { g as getEnquiries, a as putEnquiries } from '../../../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const PATCH = async ({ request, params }) => {
  const { id } = params;
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const all = await getEnquiries();
  const idx = all.findIndex((e) => e.id === id);
  if (idx === -1) return json({ error: "Not found." }, 404);
  const { status, notes } = body;
  if (status !== void 0) all[idx].status = status;
  if (notes !== void 0) all[idx].notes = notes;
  await putEnquiries(all);
  return json(all[idx], 200);
};
const DELETE = async ({ params }) => {
  const { id } = params;
  const all = await getEnquiries();
  const filtered = all.filter((e) => e.id !== id);
  if (filtered.length === all.length) return json({ error: "Not found." }, 404);
  await putEnquiries(filtered);
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
  DELETE,
  PATCH,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
