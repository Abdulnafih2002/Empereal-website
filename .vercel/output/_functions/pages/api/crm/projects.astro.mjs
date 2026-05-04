import { d as getProjects, e as putProjects } from '../../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  const projects = await getProjects();
  return new Response(JSON.stringify(projects), {
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
  if (!body.title?.trim() || !body.location?.trim()) {
    return json({ error: "Title and location are required." }, 400);
  }
  const all = await getProjects();
  const maxOrder = all.reduce((m, p) => Math.max(m, p.order), 0);
  const project = {
    id: crypto.randomUUID(),
    title: body.title.trim(),
    location: body.location.trim(),
    capacity: body.capacity?.trim() || void 0,
    category: body.category?.trim() || "solar-pv",
    imageUrl: body.imageUrl?.trim() || "/images/project-uae.jpg",
    description: body.description?.trim() || void 0,
    year: body.year || void 0,
    order: body.order ?? maxOrder + 1
  };
  await putProjects([...all, project]);
  return json(project, 201);
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
