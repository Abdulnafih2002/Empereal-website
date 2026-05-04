import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$CRMLayout } from '../../../chunks/CRMLayout_1MXVuW2v.mjs';
import { $ as $$ImageUpload } from '../../../chunks/ImageUpload_YutxUq5w.mjs';
import { i as getSolutions, g as getEnquiries } from '../../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://empereal.energy");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const [solutions, enquiries] = await Promise.all([getSolutions(), getEnquiries()]);
  const newCount = enquiries.filter((e) => e.status === "new").length;
  const solution = solutions.find((s) => s.id === id);
  if (!solution) return Astro2.redirect("/crm/solutions");
  const ICONS = ["solar", "drop", "battery", "hub", "bipv", "h2", "star", "globe", "bolt", "shield"];
  return renderTemplate`${renderComponent($$result, "CRMLayout", $$CRMLayout, { "title": `Edit \u2014 ${solution.title}`, "newEnquiries": newCount }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-lg"> <a href="/crm/solutions" class="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-6"> <svg class="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 6H2M6 2L2 6l4 4"></path></svg>
Back to solutions
</a> <div class="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden"> <div class="border-b border-slate-100 px-6 py-4"> <h2 class="text-sm font-semibold text-slate-900">Edit Solution</h2> <p class="text-xs text-slate-400 mt-0.5 truncate">${solution.title}</p> </div> <form id="solution-form" class="p-6 space-y-5"> <div> <label for="s-title" class="block text-sm font-medium text-slate-700 mb-1.5">
Title <span class="text-orange">*</span> </label> <input id="s-title" name="title" type="text" required${addAttribute(solution.title, "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div> <label for="s-subtitle" class="block text-sm font-medium text-slate-700 mb-1.5">Subtitle</label> <input id="s-subtitle" name="subtitle" type="text"${addAttribute(solution.subtitle ?? "", "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div> <label for="s-desc" class="block text-sm font-medium text-slate-700 mb-1.5">
Description <span class="text-orange">*</span> </label> <textarea id="s-desc" name="description" required rows="4" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 resize-none">${solution.description}</textarea> </div> <div class="grid grid-cols-2 gap-4"> <div> <label for="s-icon" class="block text-sm font-medium text-slate-700 mb-1.5">Icon key</label> <select id="s-icon" name="icon" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"> <option value="">— none —</option> ${ICONS.map((ic) => renderTemplate`<option${addAttribute(ic, "value")}${addAttribute(solution.icon === ic, "selected")}>${ic}</option>`)} </select> </div> <div> <label for="s-order" class="block text-sm font-medium text-slate-700 mb-1.5">Display order</label> <input id="s-order" name="order" type="number" min="1"${addAttribute(solution.order, "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> </div> <div> <label for="s-href" class="block text-sm font-medium text-slate-700 mb-1.5">Link URL</label> <input id="s-href" name="href" type="text"${addAttribute(solution.href ?? "", "value")} class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> ${renderComponent($$result2, "ImageUpload", $$ImageUpload, { "name": "imageUrl", "value": solution.imageUrl, "label": "Card Image (optional)" })} <p id="form-status" class="hidden text-sm" aria-live="polite"></p> <div class="flex gap-3 pt-1 border-t border-slate-100"> <button type="submit" class="rounded-lg bg-primary hover:bg-primary-light px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm">
Save Changes
</button> <a href="/crm/solutions" class="rounded-lg bg-slate-100 hover:bg-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors">
Cancel
</a> </div> </form> </div> </div> ` })} ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/solutions/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/solutions/[id].astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/solutions/[id].astro";
const $$url = "/crm/solutions/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
