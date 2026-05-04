import { f as getSettings, h as putSettings } from '../../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  const settings = await getSettings();
  return new Response(JSON.stringify(settings), {
    headers: { "Content-Type": "application/json" }
  });
};
const PATCH = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const current = await getSettings();
  const updated = { ...current, ...body };
  await putSettings(updated);
  return json(updated, 200);
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
  PATCH,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
