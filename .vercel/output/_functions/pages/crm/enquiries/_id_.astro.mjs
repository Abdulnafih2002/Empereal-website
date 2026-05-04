import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$CRMLayout } from '../../../chunks/CRMLayout_1MXVuW2v.mjs';
import { $ as $$StatusBadge } from '../../../chunks/StatusBadge_CewrjZWs.mjs';
import { getEnquiries, putEnquiries } from '../../../chunks/storage_Dt7dQkXR.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://empereal.energy");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const all = await getEnquiries();
  const newCount = all.filter((e) => e.status === "new").length;
  const enquiry = all.find((e) => e.id === id);
  if (!enquiry) return Astro2.redirect("/crm/enquiries");
  if (enquiry.status === "new") {
    enquiry.status = "read";
    await putEnquiries(all);
  }
  return renderTemplate`${renderComponent($$result, "CRMLayout", $$CRMLayout, { "title": `Enquiry \u2014 ${enquiry.name}`, "newEnquiries": newCount }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-2xl"> <div class="mb-5 flex items-center justify-between"> <a href="/crm/enquiries" class="inline-flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-slate-800"> <svg class="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 6H2M6 2L2 6l4 4"></path></svg>
Back to enquiries
</a> ${renderComponent($$result2, "StatusBadge", $$StatusBadge, { "status": enquiry.status })} </div> <!-- Enquiry detail card --> <div class="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 shadow-sm"> <div class="border-b border-slate-100 bg-slate-50 px-6 py-4"> <p class="font-semibold text-slate-900">${enquiry.name}</p> ${enquiry.company && renderTemplate`<p class="mt-0.5 text-sm text-slate-500">${enquiry.company}</p>`} </div> <div class="grid gap-5 p-6 text-sm sm:grid-cols-2"> <div> <p class="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">Email</p> <a${addAttribute(`mailto:${enquiry.email}`, "href")} class="font-medium text-primary transition hover:text-orange">${enquiry.email}</a> </div> ${enquiry.phone && renderTemplate`<div> <p class="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">Phone</p> <a${addAttribute(`tel:${enquiry.phone}`, "href")} class="font-medium text-slate-700">${enquiry.phone}</a> </div>`} ${enquiry.interest && renderTemplate`<div class="col-span-2"> <p class="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">Area of Interest</p> <span class="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">${enquiry.interest}</span> </div>`} <div class="col-span-2"> <p class="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">Received</p> <p class="text-slate-500">${new Date(enquiry.createdAt).toLocaleString()}</p> </div> <div class="col-span-2"> <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Message</p> <div class="rounded-xl bg-slate-50 px-4 py-4 text-slate-700 leading-relaxed whitespace-pre-wrap ring-1 ring-slate-100">${enquiry.message}</div> </div> </div> </div> <!-- Update form --> <div class="mt-5 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 shadow-sm"> <div class="border-b border-slate-100 px-6 py-4"> <p class="text-sm font-semibold text-slate-900">Update Enquiry</p> </div> <form id="enquiry-form" class="space-y-4 p-6"> <div> <label for="eq-status" class="mb-1.5 block text-sm font-medium text-slate-700">Status</label> <select id="eq-status" name="status" class="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"> ${["new", "read", "replied", "archived"].map((s) => renderTemplate`<option${addAttribute(s, "value")}${addAttribute(enquiry.status === s, "selected")}>${s.charAt(0).toUpperCase() + s.slice(1)}</option>`)} </select> </div> <div> <label for="eq-notes" class="mb-1.5 block text-sm font-medium text-slate-700">Internal Notes</label> <textarea id="eq-notes" name="notes" rows="4" placeholder="Add notes…" class="block w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20">${enquiry.notes ?? ""}</textarea> </div> <div class="flex items-center gap-3 border-t border-slate-100 pt-4"> <button type="submit" class="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-light">
Save Changes
</button> <button type="button" id="delete-btn" class="rounded-lg border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100">
Delete
</button> <p id="eq-status-msg" class="ml-auto hidden text-sm" aria-live="polite"></p> </div> </form> </div> </div> ` })} ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/enquiries/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/enquiries/[id].astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/enquiries/[id].astro";
const $$url = "/crm/enquiries/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
