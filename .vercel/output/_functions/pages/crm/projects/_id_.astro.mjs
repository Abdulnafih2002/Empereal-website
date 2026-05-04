import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$CRMLayout } from '../../../chunks/CRMLayout_1MXVuW2v.mjs';
import { $ as $$ImageUpload } from '../../../chunks/ImageUpload_YutxUq5w.mjs';
import { d as getProjects, g as getEnquiries } from '../../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://empereal.energy");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const [projects, enquiries] = await Promise.all([getProjects(), getEnquiries()]);
  const newCount = enquiries.filter((e) => e.status === "new").length;
  const project = projects.find((p) => p.id === id);
  if (!project) return Astro2.redirect("/crm/projects");
  const CATEGORIES = ["solar-pv", "bipv", "desalination", "storage", "hydrogen", "integrated"];
  return renderTemplate`${renderComponent($$result, "CRMLayout", $$CRMLayout, { "title": `Edit \u2014 ${project.title}`, "newEnquiries": newCount }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-lg"> <a href="/crm/projects" class="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-6"> <svg class="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 6H2M6 2L2 6l4 4"></path></svg>
Back to projects
</a> <div class="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden"> <div class="border-b border-slate-100 px-6 py-4"> <h2 class="text-sm font-semibold text-slate-900">Edit Project</h2> <p class="text-xs text-slate-400 mt-0.5 truncate">${project.title}</p> </div> <form id="project-form" class="p-6 space-y-5"> <div> <label for="p-title" class="block text-sm font-medium text-slate-700 mb-1.5">
Title <span class="text-orange">*</span> </label> <input id="p-title" name="title" type="text" required${addAttribute(project.title, "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label for="p-location" class="block text-sm font-medium text-slate-700 mb-1.5">
Location <span class="text-orange">*</span> </label> <input id="p-location" name="location" type="text" required${addAttribute(project.location, "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div> <label for="p-capacity" class="block text-sm font-medium text-slate-700 mb-1.5">Capacity / Scale</label> <input id="p-capacity" name="capacity" type="text"${addAttribute(project.capacity ?? "", "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> </div> <div class="grid grid-cols-2 gap-4"> <div> <label for="p-category" class="block text-sm font-medium text-slate-700 mb-1.5">Category</label> <select id="p-category" name="category" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"> ${CATEGORIES.map((c) => renderTemplate`<option${addAttribute(c, "value")}${addAttribute(project.category === c, "selected")}>${c}</option>`)} </select> </div> <div> <label for="p-year" class="block text-sm font-medium text-slate-700 mb-1.5">Year</label> <input id="p-year" name="year" type="number" min="2000" max="2035"${addAttribute(project.year ?? "", "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> </div> ${renderComponent($$result2, "ImageUpload", $$ImageUpload, { "name": "imageUrl", "value": project.imageUrl, "label": "Project Image" })} <div> <label for="p-desc" class="block text-sm font-medium text-slate-700 mb-1.5">Description / Summary</label> <textarea id="p-desc" name="description" rows="3" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 resize-none">${project.description ?? ""}</textarea> </div> <div> <label for="p-order" class="block text-sm font-medium text-slate-700 mb-1.5">Display order</label> <input id="p-order" name="order" type="number" min="1"${addAttribute(project.order, "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <p id="form-status" class="hidden text-sm" aria-live="polite"></p> <div class="flex gap-3 pt-1 border-t border-slate-100"> <button type="submit" class="rounded-lg bg-primary hover:bg-primary-light px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm">
Save Changes
</button> <a href="/crm/projects" class="rounded-lg bg-slate-100 hover:bg-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors">
Cancel
</a> </div> </form> </div> </div> ` })} ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/projects/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/projects/[id].astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/projects/[id].astro";
const $$url = "/crm/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
