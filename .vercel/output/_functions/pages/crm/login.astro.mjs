import { e as createAstro, f as createComponent, n as renderHead, r as renderTemplate, o as renderSlot, k as renderComponent, l as renderScript, m as maybeRenderHead } from '../../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                    */
/* empty css                                    */
import { g as getTokenFromRequest, v as verifyToken } from '../../chunks/auth_0-FqN9zB.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://empereal.energy");
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full" data-astro-cid-3qlrnpww> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>${title} — Empereal CRM</title><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="h-full flex flex-col lg:flex-row" data-astro-cid-3qlrnpww> <!-- Left brand panel --> <div class="hidden lg:flex lg:w-5/12 xl:w-1/2 flex-col justify-between p-10 relative overflow-hidden bg-primary" data-astro-cid-3qlrnpww> <!-- Background glow --> <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" data-astro-cid-3qlrnpww> <div class="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-orange/10 blur-3xl" data-astro-cid-3qlrnpww></div> <div class="absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" data-astro-cid-3qlrnpww></div> </div> <div class="relative z-10" data-astro-cid-3qlrnpww> <img src="/logo.svg" alt="Empereal" class="h-9 w-auto" style="filter: brightness(10) saturate(0);" data-astro-cid-3qlrnpww> </div> <div class="relative z-10" data-astro-cid-3qlrnpww> <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-orange/20 px-3 py-1" data-astro-cid-3qlrnpww> <span class="h-1.5 w-1.5 rounded-full bg-orange" data-astro-cid-3qlrnpww></span> <span class="text-xs font-semibold uppercase tracking-wider text-orange" data-astro-cid-3qlrnpww>Secure Admin Access</span> </div> <h2 class="text-3xl font-bold leading-snug text-white" data-astro-cid-3qlrnpww>
Manage your energy<br data-astro-cid-3qlrnpww>solutions from one place.
</h2> <p class="mt-4 max-w-xs text-sm leading-relaxed text-white/60" data-astro-cid-3qlrnpww>
The Empereal CRM gives you full control over enquiries, solutions, projects and site content.
</p> <div class="mt-10 grid grid-cols-2 gap-3" data-astro-cid-3qlrnpww> ${[
    { label: "Enquiry Inbox", desc: "Track & respond" },
    { label: "Content Editor", desc: "Solutions & projects" },
    { label: "Site Settings", desc: "Contact & links" },
    { label: "Real-time Storage", desc: "Vercel Blob" }
  ].map((f) => renderTemplate`<div class="rounded-xl border border-white/10 bg-white/5 p-3" data-astro-cid-3qlrnpww> <p class="text-xs font-semibold text-white" data-astro-cid-3qlrnpww>${f.label}</p> <p class="mt-0.5 text-xs text-white/40" data-astro-cid-3qlrnpww>${f.desc}</p> </div>`)} </div> </div> <p class="relative z-10 text-xs text-white/25" data-astro-cid-3qlrnpww>© ${(/* @__PURE__ */ new Date()).getFullYear()} Empereal Energy</p> </div> <!-- Right auth panel --> <div class="flex flex-1 flex-col items-center justify-center bg-slate-50 px-6 py-12 min-h-screen lg:min-h-0" data-astro-cid-3qlrnpww> <!-- Mobile logo --> <div class="mb-8 lg:hidden" data-astro-cid-3qlrnpww> <img src="/logo.svg" alt="Empereal" class="mx-auto h-10 w-auto" data-astro-cid-3qlrnpww> </div> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/layouts/AuthLayout.astro", void 0);

const $$Astro = createAstro("https://empereal.energy");
const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const token = getTokenFromRequest(Astro2.request);
  if (token && verifyToken(token)) return Astro2.redirect("/crm");
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Login" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-sm"> <div class="mb-8"> <h1 class="text-2xl font-bold text-slate-900">Welcome back</h1> <p class="mt-1.5 text-sm text-slate-500">Sign in to the Empereal admin panel</p> </div> <form id="login-form" class="space-y-5 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200" novalidate> <div> <label for="password" class="mb-1.5 block text-sm font-medium text-slate-700">Password</label> <div class="relative"> <input id="password" type="password" name="password" required autocomplete="current-password" placeholder="Enter your password" class="block w-full min-h-[48px] rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"> <button type="button" id="toggle-pw" aria-label="Toggle password" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"> <svg id="eye-open" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg> <svg id="eye-closed" class="h-4 w-4 hidden" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clip-rule="evenodd"></path><path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z"></path></svg> </button> </div> </div> <div id="login-error" class="hidden rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600" role="alert" aria-live="polite"></div> <button type="submit" id="login-submit" class="flex w-full min-h-[48px] items-center justify-center rounded-lg bg-orange px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-dark disabled:opacity-60 disabled:cursor-not-allowed">
Sign In
</button> </form> <p class="mt-6 text-center text-xs text-slate-400"> <a href="/" class="transition hover:text-slate-600">← Back to site</a> </p> </div> ` })} ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/login.astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/crm/login.astro";
const $$url = "/crm/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
