import { getFeatures, putFeatures } from '../../../../chunks/storage_Dt7dQkXR.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const PATCH = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const current = await getFeatures();
  await putFeatures({ ...current, highlight: { ...current.highlight, ...body } });
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
  PATCH,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
