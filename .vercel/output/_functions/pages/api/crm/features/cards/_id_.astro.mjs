import { getFeatures, putFeatures } from '../../../../../chunks/storage_Dt7dQkXR.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const PATCH = async ({ request, params }) => {
  const { id } = params;
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const current = await getFeatures();
  const idx = current.cards.findIndex((c) => c.id === id);
  if (idx === -1) return json({ error: "Not found." }, 404);
  current.cards[idx] = { ...current.cards[idx], ...body, id: current.cards[idx].id };
  await putFeatures(current);
  return json(current.cards[idx], 200);
};
const DELETE = async ({ params }) => {
  const { id } = params;
  const current = await getFeatures();
  const filtered = current.cards.filter((c) => c.id !== id);
  if (filtered.length === current.cards.length) return json({ error: "Not found." }, 404);
  await putFeatures({ ...current, cards: filtered });
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
