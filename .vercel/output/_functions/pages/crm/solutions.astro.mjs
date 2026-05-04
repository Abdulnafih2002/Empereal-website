import { f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$CRMLayout } from '../../chunks/CRMLayout_1MXVuW2v.mjs';
import { i as getSolutions, g as getEnquiries } from '../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const [solutions, enquiries] = await Promise.all([getSolutions(), getEnquiries()]);
  const newCount = enquiries.filter((e) => e.status === "new").length;
  return renderTemplate`${renderComponent($$result, "CRMLayout", $$CRMLayout, { "title": "Solutions", "newEnquiries": newCount }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-between mb-6"> <p class="text-sm text-slate-500"> ${solutions.length} solution${solutions.length !== 1 ? "s" : ""} </p> <a href="/crm/solutions/new" class="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-light px-4 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm"> <svg class="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 1v10M1 6h10"></path></svg>
Add Solution
</a> </div> ${solutions.length === 0 ? renderTemplate`<div class="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 py-20 text-center"> <svg class="h-10 w-10 mx-auto text-slate-200 mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z"></path><path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z"></path><path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z"></path></svg> <p class="text-sm font-medium text-slate-400">No solutions yet</p> <a href="/crm/solutions/new" class="mt-3 inline-block text-sm text-primary hover:text-orange transition-colors">Add your first solution →</a> </div>` : renderTemplate`<div class="space-y-2"> ${solutions.map((s) => renderTemplate`<div class="flex items-center gap-4 bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 px-5 py-4 hover:shadow-md transition-shadow"> <div class="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center"> <span class="text-xs font-bold text-primary">#${s.order}</span> </div> <div class="flex-1 min-w-0"> <p class="font-semibold text-slate-800 truncate">${s.title}</p> ${s.subtitle && renderTemplate`<p class="text-xs text-orange font-medium mt-0.5">${s.subtitle}</p>`} <p class="mt-0.5 text-sm text-slate-400 line-clamp-1">${s.description}</p> </div> <div class="flex items-center gap-2 shrink-0"> <a${addAttribute(`/crm/solutions/${s.id}`, "href")} class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors"> <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8.5 1.5L10.5 3.5L4 10H2V8L8.5 1.5z"></path></svg>
Edit
</a> <button type="button" class="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors"${addAttribute(s.id, "data-delete-id")}> <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h8M5 3V2h2v1M10 3l-.5 7a1 1 0 01-1 .9H3.5a1 1 0 01-1-.9L2 3"></path></svg>
Delete
</button> </div> </div>`)} </div>`}` })} ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/solutions/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/solutions/index.astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/solutions/index.astro";
const $$url = "/crm/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
