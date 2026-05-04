import { f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$CRMLayout } from '../../chunks/CRMLayout_1MXVuW2v.mjs';
import { f as getSettings, g as getEnquiries } from '../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  const [settings, enquiries] = await Promise.all([getSettings(), getEnquiries()]);
  const newCount = enquiries.filter((e) => e.status === "new").length;
  return renderTemplate`${renderComponent($$result, "CRMLayout", $$CRMLayout, { "title": "Site Settings", "newEnquiries": newCount }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-lg space-y-6"> <!-- Contact Information --> <div class="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden"> <div class="border-b border-slate-100 px-6 py-4"> <h2 class="text-sm font-semibold text-slate-900">Contact Information</h2> <p class="text-xs text-slate-400 mt-0.5">Displayed on the contact page and footer</p> </div> <form id="settings-form" class="p-6 space-y-5"> <div> <label for="set-address" class="block text-sm font-medium text-slate-700 mb-1.5">Office Address</label> <input id="set-address" name="address" type="text"${addAttribute(settings.address, "value")} placeholder="Full office address" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div> <label for="set-email" class="block text-sm font-medium text-slate-700 mb-1.5">Contact Email</label> <input id="set-email" name="email" type="email"${addAttribute(settings.email, "value")} placeholder="info@empereal.energy" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div> <label for="set-phone" class="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label> <input id="set-phone" name="phone" type="tel"${addAttribute(settings.phone, "value")} placeholder="+971 4 000 0000" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div> <label for="set-wa" class="block text-sm font-medium text-slate-700 mb-1.5">
WhatsApp Number
<span class="ml-1 text-xs font-normal text-slate-400">(digits only, e.g. 971501234567)</span> </label> <input id="set-wa" name="whatsappNumber" type="text"${addAttribute(settings.whatsappNumber, "value")} placeholder="971501234567" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div class="border-t border-slate-100 pt-5"> <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Online Presence</h3> <div> <label for="set-li" class="block text-sm font-medium text-slate-700 mb-1.5">LinkedIn URL</label> <input id="set-li" name="linkedinUrl" type="url"${addAttribute(settings.linkedinUrl ?? "", "value")} placeholder="https://linkedin.com/company/empereal" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> </div> <p id="settings-status" class="hidden text-sm" aria-live="polite"></p> <div class="pt-1 border-t border-slate-100"> <button type="submit" class="rounded-lg bg-primary hover:bg-primary-light px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm">
Save Settings
</button> </div> </form> </div> </div> ` })} ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/settings.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/settings.astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/settings.astro";
const $$url = "/crm/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
