import { getFeatures, putFeatures } from '../../../../chunks/storage_Dt7dQkXR.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  const { cards } = await getFeatures();
  return new Response(JSON.stringify(cards), {
    headers: { "Content-Type": "application/json" }
  });
};
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  if (!body.title?.trim() || !body.description?.trim()) {
    return json({ error: "Title and description are required." }, 400);
  }
  const current = await getFeatures();
  const maxOrder = current.cards.reduce((m, c) => Math.max(m, c.order), 0);
  const card = {
    id: crypto.randomUUID(),
    title: body.title.trim(),
    description: body.description.trim(),
    icon: body.icon?.trim() || void 0,
    imageUrl: body.imageUrl?.trim() || void 0,
    href: body.href?.trim() || void 0,
    order: body.order ?? maxOrder + 1
  };
  await putFeatures({ ...current, cards: [...current.cards, card] });
  return json(card, 201);
};
function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
