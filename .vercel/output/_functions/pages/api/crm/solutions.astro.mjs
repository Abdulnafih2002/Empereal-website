import { getSolutions, putSolutions } from '../../../chunks/storage_Dt7dQkXR.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  const solutions = await getSolutions();
  return new Response(JSON.stringify(solutions), {
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
  const all = await getSolutions();
  const maxOrder = all.reduce((m, s) => Math.max(m, s.order), 0);
  const solution = {
    id: crypto.randomUUID(),
    title: body.title.trim(),
    subtitle: body.subtitle?.trim() || void 0,
    description: body.description.trim(),
    icon: body.icon || void 0,
    imageUrl: body.imageUrl?.trim() || void 0,
    href: body.href?.trim() || void 0,
    order: body.order ?? maxOrder + 1
  };
  await putSolutions([...all, solution]);
  return json(solution, 201);
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
