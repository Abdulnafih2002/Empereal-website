import { getSolutions, putSolutions } from '../../../../chunks/storage_Dt7dQkXR.mjs';
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
  const all = await getSolutions();
  const idx = all.findIndex((s) => s.id === id);
  if (idx === -1) return json({ error: "Not found." }, 404);
  all[idx] = { ...all[idx], ...body, id: all[idx].id };
  await putSolutions(all);
  return json(all[idx], 200);
};
const DELETE = async ({ params }) => {
  const { id } = params;
  const all = await getSolutions();
  const filtered = all.filter((s) => s.id !== id);
  if (filtered.length === all.length) return json({ error: "Not found." }, 404);
  await putSolutions(filtered);
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
