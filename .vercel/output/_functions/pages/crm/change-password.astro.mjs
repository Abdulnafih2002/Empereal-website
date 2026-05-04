import { f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$CRMLayout } from '../../chunks/CRMLayout_1MXVuW2v.mjs';
import { g as getEnquiries } from '../../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$ChangePassword = createComponent(async ($$result, $$props, $$slots) => {
  const enquiries = await getEnquiries();
  const newCount = enquiries.filter((e) => e.status === "new").length;
  return renderTemplate`${renderComponent($$result, "CRMLayout", $$CRMLayout, { "title": "Change Password", "newEnquiries": newCount }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-md"> <!-- Form card --> <div class="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden"> <div class="border-b border-slate-100 px-6 py-4"> <h2 class="text-sm font-semibold text-slate-900">Change Password</h2> <p class="text-xs text-slate-400 mt-0.5">Your new password takes effect immediately</p> </div> <form id="pw-form" class="p-6 space-y-5"> <div> <label for="pw-current" class="block text-sm font-medium text-slate-700 mb-1.5">Current Password</label> <input id="pw-current" name="currentPassword" type="password" required autocomplete="current-password" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div> <label for="pw-new" class="block text-sm font-medium text-slate-700 mb-1.5">
New Password
<span class="ml-1 text-xs font-normal text-slate-400">(min. 8 characters)</span> </label> <input id="pw-new" name="newPassword" type="password" required autocomplete="new-password" minlength="8" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <div> <label for="pw-confirm" class="block text-sm font-medium text-slate-700 mb-1.5">Confirm New Password</label> <input id="pw-confirm" name="confirmPassword" type="password" required autocomplete="new-password" minlength="8" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 min-h-[44px]"> </div> <p id="pw-error" class="hidden rounded-lg bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-600" aria-live="polite"></p> <div class="pt-1 border-t border-slate-100"> <button id="pw-submit" type="submit" class="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-light px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm">
Update Password
</button> </div> </form> </div> <!-- Success state (hidden until submit) --> <div id="pw-success" class="hidden mt-5 flex items-start gap-4 rounded-xl bg-green-50 ring-1 ring-green-200 p-5"> <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100"> <svg class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> </div> <div> <p class="text-sm font-semibold text-green-800">Password updated successfully</p> <p class="mt-0.5 text-sm text-green-700">Your new password is active. Use it next time you log in.</p> </div> </div> </div> ` })} ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/change-password.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/change-password.astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/change-password.astro";
const $$url = "/crm/change-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ChangePassword,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
