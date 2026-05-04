import { f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$CRMLayout } from '../../../chunks/CRMLayout_1MXVuW2v.mjs';
import { $ as $$ImageUpload } from '../../../chunks/ImageUpload_YutxUq5w.mjs';
import { g as getEnquiries, d as getProjects } from '../../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const [enquiries, projects] = await Promise.all([getEnquiries(), getProjects()]);
  const newCount = enquiries.filter((e) => e.status === "new").length;
  const nextOrder = projects.reduce((m, p) => Math.max(m, p.order), 0) + 1;
  const CATEGORIES = ["solar-pv", "bipv", "desalination", "storage", "hydrogen", "integrated"];
  return renderTemplate`${renderComponent($$result, "CRMLayout", $$CRMLayout, { "title": "Add Project", "newEnquiries": newCount }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-lg"> <a href="/crm/projects" class="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-6"> <svg class="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 6H2M6 2L2 6l4 4"></path></svg>
Back to projects
</a> <div class="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden"> <div class="border-b border-slate-100 px-6 py-4"> <h2 class="text-sm font-semibold text-slate-900">New Project</h2> <p class="text-xs text-slate-400 mt-0.5">Add a new project to your portfolio</p> </div> <form id="project-form" class="p-6 space-y-5"> <div> <label for="p-title" class="block text-sm font-medium text-slate-700 mb-1.5">
Title <span class="text-orange">*</span> </label> <input id="p-title" name="title" type="text" required placeholder="Project name" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label for="p-location" class="block text-sm font-medium text-slate-700 mb-1.5">
Location <span class="text-orange">*</span> </label> <input id="p-location" name="location" type="text" required placeholder="UAE, Qatar…" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div> <label for="p-capacity" class="block text-sm font-medium text-slate-700 mb-1.5">Capacity / Scale</label> <input id="p-capacity" name="capacity" type="text" placeholder="e.g. 5,012 kWp" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> </div> <div class="grid grid-cols-2 gap-4"> <div> <label for="p-category" class="block text-sm font-medium text-slate-700 mb-1.5">Category</label> <select id="p-category" name="category" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"> ${CATEGORIES.map((c) => renderTemplate`<option${addAttribute(c, "value")}>${c}</option>`)} </select> </div> <div> <label for="p-year" class="block text-sm font-medium text-slate-700 mb-1.5">Year</label> <input id="p-year" name="year" type="number" min="2000" max="2035" placeholder="2024" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> </div> ${renderComponent($$result2, "ImageUpload", $$ImageUpload, { "name": "imageUrl", "label": "Project Image" })} <div> <label for="p-desc" class="block text-sm font-medium text-slate-700 mb-1.5">Description / Summary</label> <textarea id="p-desc" name="description" rows="3" placeholder="Brief project summary…" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 resize-none"></textarea> </div> <div> <label for="p-order" class="block text-sm font-medium text-slate-700 mb-1.5">Display order</label> <input id="p-order" name="order" type="number" min="1"${addAttribute(nextOrder, "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <p id="form-error" class="hidden rounded-lg bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-600" aria-live="polite"></p> <div class="flex gap-3 pt-1 border-t border-slate-100"> <button type="submit" class="rounded-lg bg-primary hover:bg-primary-light px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm">
Save Project
</button> <a href="/crm/projects" class="rounded-lg bg-slate-100 hover:bg-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors">
Cancel
</a> </div> </form> </div> </div> ` })} ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/projects/new.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/projects/new.astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/projects/new.astro";
const $$url = "/crm/projects/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
