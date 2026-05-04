import { f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$CRMLayout } from '../../chunks/CRMLayout_1MXVuW2v.mjs';
import { d as getProjects, g as getEnquiries } from '../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const [projects, enquiries] = await Promise.all([getProjects(), getEnquiries()]);
  const newCount = enquiries.filter((e) => e.status === "new").length;
  return renderTemplate`${renderComponent($$result, "CRMLayout", $$CRMLayout, { "title": "Projects", "newEnquiries": newCount }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-between mb-6"> <p class="text-sm text-slate-500"> ${projects.length} project${projects.length !== 1 ? "s" : ""} </p> <a href="/crm/projects/new" class="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-light px-4 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm"> <svg class="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 1v10M1 6h10"></path></svg>
Add Project
</a> </div> ${projects.length === 0 ? renderTemplate`<div class="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 py-20 text-center"> <svg class="h-10 w-10 mx-auto text-slate-200 mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19.906 9c.382 1.5.594 3.07.594 4.5.008 2.007-.494 3.912-1.428 5.57A2.25 2.25 0 0117.38 21h-10.5a2.25 2.25 0 01-1.84-.935A11.93 11.93 0 013.5 13.5c0-5.907 4.14-10.837 9.668-11.85A2.25 2.25 0 0115.398 3h.477c.519 0 .98.31 1.168.785A7.544 7.544 0 0117.25 6h1.5a.75.75 0 01.75.75v2.25z"></path></svg> <p class="text-sm font-medium text-slate-400">No projects yet</p> <a href="/crm/projects/new" class="mt-3 inline-block text-sm text-primary hover:text-orange transition-colors">Add your first project →</a> </div>` : renderTemplate`<div class="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden"> <table class="min-w-full divide-y divide-slate-100 text-sm"> <thead> <tr class="bg-slate-50"> <th class="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">#</th> <th class="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">Title</th> <th class="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide hidden md:table-cell">Location</th> <th class="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide hidden lg:table-cell">Category</th> <th class="px-5 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wide">Actions</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> ${projects.map((p) => renderTemplate`<tr class="hover:bg-orange/5 transition-colors"> <td class="px-5 py-3.5"> <span class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-500"> ${p.order} </span> </td> <td class="px-5 py-3.5 font-medium text-slate-800">${p.title}</td> <td class="px-5 py-3.5 text-slate-500 hidden md:table-cell">${p.location}</td> <td class="px-5 py-3.5 hidden lg:table-cell"> ${p.category && renderTemplate`<span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700"> ${p.category} </span>`} </td> <td class="px-5 py-3.5"> <div class="flex items-center justify-end gap-2"> <a${addAttribute(`/crm/projects/${p.id}`, "href")} class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors"> <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8.5 1.5L10.5 3.5L4 10H2V8L8.5 1.5z"></path></svg>
Edit
</a> <button type="button"${addAttribute(p.id, "data-delete-id")} class="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors"> <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h8M5 3V2h2v1M10 3l-.5 7a1 1 0 01-1 .9H3.5a1 1 0 01-1-.9L2 3"></path></svg>
Delete
</button> </div> </td> </tr>`)} </tbody> </table> </div>`}` })} ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/projects/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/projects/index.astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/projects/index.astro";
const $$url = "/crm/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
