import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$CRMLayout } from '../../chunks/CRMLayout_1MXVuW2v.mjs';
import { $ as $$StatusBadge } from '../../chunks/StatusBadge_CewrjZWs.mjs';
import { g as getEnquiries } from '../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://empereal.energy");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const all = await getEnquiries();
  const newCount = all.filter((e) => e.status === "new").length;
  const statusFilter = Astro2.url.searchParams.get("status") ?? "";
  const filtered = statusFilter ? all.filter((e) => e.status === statusFilter) : all;
  const statuses = ["", "new", "read", "replied", "archived"];
  const labels = { "": "All", new: "New", read: "Read", replied: "Replied", archived: "Archived" };
  const counts = {
    "": all.length,
    new: all.filter((e) => e.status === "new").length,
    read: all.filter((e) => e.status === "read").length,
    replied: all.filter((e) => e.status === "replied").length,
    archived: all.filter((e) => e.status === "archived").length
  };
  return renderTemplate`${renderComponent($$result, "CRMLayout", $$CRMLayout, { "title": "Enquiries", "newEnquiries": newCount }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mb-6 flex flex-wrap gap-2"> ${statuses.map((s) => renderTemplate`<a${addAttribute(s ? `/crm/enquiries?status=${s}` : "/crm/enquiries", "href")}${addAttribute([
    "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all",
    statusFilter === s ? "bg-primary text-white shadow-sm" : "bg-white ring-1 ring-slate-200 text-slate-600 hover:bg-slate-50"
  ], "class:list")}> ${labels[s]} <span${addAttribute([
    "inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-xs font-bold",
    statusFilter === s ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
  ], "class:list")}> ${counts[s]} </span> </a>`)} </div> ${filtered.length === 0 ? renderTemplate`<div class="rounded-xl bg-white ring-1 ring-slate-200 shadow-sm py-20 text-center"> <svg class="mx-auto mb-3 h-10 w-10 text-slate-200" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path></svg> <p class="text-sm font-medium text-slate-400">No enquiries match this filter</p> </div>` : renderTemplate`<div class="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 shadow-sm"> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-slate-100 text-sm"> <thead class="bg-slate-50"> <tr> <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Contact</th> <th class="hidden px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 sm:table-cell">Email</th> <th class="hidden px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 lg:table-cell">Interest</th> <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Status</th> <th class="hidden px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 md:table-cell">Date</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> ${filtered.map((e) => renderTemplate`<tr class="hover:bg-slate-50 transition-colors"> <td class="px-5 py-3.5"> <a${addAttribute(`/crm/enquiries/${e.id}`, "href")} class="font-medium text-slate-800 hover:text-primary transition-colors"> ${e.name} </a> ${e.company && renderTemplate`<span class="mt-0.5 block text-xs text-slate-400">${e.company}</span>`} </td> <td class="hidden px-5 py-3.5 text-slate-500 sm:table-cell">${e.email}</td> <td class="hidden px-5 py-3.5 text-slate-500 lg:table-cell">${e.interest ?? "\u2014"}</td> <td class="px-5 py-3.5">${renderComponent($$result2, "StatusBadge", $$StatusBadge, { "status": e.status })}</td> <td class="hidden px-5 py-3.5 text-xs text-slate-400 md:table-cell"> ${new Date(e.createdAt).toLocaleDateString()} </td> </tr>`)} </tbody> </table> </div> </div>`}` })}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/enquiries/index.astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/enquiries/index.astro";
const $$url = "/crm/enquiries";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
