import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderScript, n as renderHead, k as renderComponent, o as renderSlot } from './astro/server_Bkw53cAP.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
/* empty css                                   */

const $$Astro$1 = createAstro("https://empereal.energy");
const $$CRMSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CRMSidebar;
  const { newEnquiries = 0 } = Astro2.props;
  const path = Astro2.url.pathname;
  const nav = [
    { label: "Dashboard", href: "/crm", icon: "grid" },
    { label: "Enquiries", href: "/crm/enquiries", icon: "inbox", badge: newEnquiries },
    { label: "Solutions", href: "/crm/solutions", icon: "layers" },
    { label: "Features Section", href: "/crm/features", icon: "star" },
    { label: "Projects", href: "/crm/projects", icon: "folder" }
  ];
  const secondary = [
    { label: "Settings", href: "/crm/settings", icon: "settings" },
    { label: "Change Password", href: "/crm/change-password", icon: "key" }
  ];
  const isActive = (href) => href === "/crm" ? path === "/crm" : path.startsWith(href);
  return renderTemplate`<!-- Mobile overlay -->${maybeRenderHead()}<div id="sidebar-overlay" class="fixed inset-0 z-20 bg-black opacity-0 pointer-events-none transition-opacity duration-300 lg:hidden" aria-hidden="true"></div> <!-- Sidebar --> <aside id="crm-sidebar" class="fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-primary -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0"> <!-- Logo --> <div class="flex h-16 shrink-0 items-center gap-3 border-b border-primary-light px-5"> <img src="/logo.svg" alt="Empereal" class="h-7 w-auto" style="filter: brightness(10) saturate(0);"> <span class="text-xs font-bold uppercase tracking-widest" style="color: #F27400; letter-spacing: 0.18em;">CRM</span> </div> <!-- Nav --> <nav class="flex flex-1 flex-col gap-0.5 overflow-y-auto p-3"> <p class="px-3 pb-1.5 pt-3 text-xs font-semibold uppercase tracking-widest" style="color: rgba(255,255,255,0.35);">Main</p> ${nav.map((item) => {
    const active = isActive(item.href);
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(
      active ? "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all border-l-2 border-orange bg-primary-light text-white" : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all border-l-2 border-transparent text-white/60 hover:bg-primary-light hover:text-white",
      "class"
    )}> <span class="h-4 w-4 shrink-0" aria-hidden="true"> ${item.icon === "grid" && renderTemplate`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="1" width="6" height="6" rx="1"></rect><rect x="9" y="1" width="6" height="6" rx="1"></rect><rect x="1" y="9" width="6" height="6" rx="1"></rect><rect x="9" y="9" width="6" height="6" rx="1"></rect></svg>`} ${item.icon === "inbox" && renderTemplate`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="1" width="14" height="14" rx="1.5"></rect><path d="M1 9h4l1.5 2.5h3L11 9h4"></path></svg>`} ${item.icon === "layers" && renderTemplate`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1l7 4-7 4-7-4 7-4z"></path><path d="M1 10l7 4 7-4"></path><path d="M1 7l7 4 7-4"></path></svg>`} ${item.icon === "star" && renderTemplate`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z"></path></svg>`} ${item.icon === "folder" && renderTemplate`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 4a1 1 0 011-1h4l1.5 2H14a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"></path></svg>`} </span> <span class="flex-1">${item.label}</span> ${item.badge != null && item.badge > 0 && renderTemplate`<span class="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-orange px-1.5 text-xs font-bold text-white"> ${item.badge} </span>`} </a>`;
  })} <p class="px-3 pb-1.5 pt-5 text-xs font-semibold uppercase tracking-widest" style="color: rgba(255,255,255,0.35);">Account</p> ${secondary.map((item) => {
    const active = isActive(item.href);
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(
      active ? "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all border-l-2 border-orange bg-primary-light text-white" : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all border-l-2 border-transparent text-white/60 hover:bg-primary-light hover:text-white",
      "class"
    )}> <span class="h-4 w-4 shrink-0" aria-hidden="true"> ${item.icon === "settings" && renderTemplate`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="2.5"></circle><path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.93 2.93l1.41 1.41M11.66 11.66l1.41 1.41M2.93 13.07l1.41-1.41M11.66 4.34l1.41-1.41"></path></svg>`} ${item.icon === "key" && renderTemplate`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="5.5" cy="8" r="3.5"></circle><path d="M9 8h6M13 8v2.5"></path></svg>`} </span> <span class="flex-1">${item.label}</span> </a>`;
  })} </nav> <!-- Logout --> <div class="shrink-0 border-t border-primary-light p-3"> <form method="POST" action="/api/crm/auth/logout"> <button type="submit" class="flex w-full items-center gap-3 rounded-lg border-l-2 border-transparent px-3 py-2.5 text-sm font-medium text-white/50 transition-all hover:bg-red-900/30 hover:text-red-300"> <svg viewBox="0 0 16 16" class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M6 2H2a1 1 0 00-1 1v10a1 1 0 001 1h4M11 11l4-3-4-3M15 8H6"></path> </svg>
Sign Out
</button> </form> </div> </aside> ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/crm/CRMSidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/crm/CRMSidebar.astro", void 0);

const $$Astro = createAstro("https://empereal.energy");
const $$CRMLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CRMLayout;
  const { title, newEnquiries = 0 } = Astro2.props;
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  return renderTemplate`<html lang="en" class="h-full bg-slate-50" data-astro-cid-revdk7n5> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>${title} — Empereal CRM</title><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="h-full flex bg-slate-50" data-astro-cid-revdk7n5> ${renderComponent($$result, "CRMSidebar", $$CRMSidebar, { "newEnquiries": newEnquiries, "data-astro-cid-revdk7n5": true })} <!-- Main content --> <div class="flex min-w-0 flex-1 flex-col lg:pl-64" data-astro-cid-revdk7n5> <!-- Top header --> <header class="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-4 border-b border-slate-200 bg-white px-4 shadow-sm sm:px-6" data-astro-cid-revdk7n5> <!-- Hamburger (mobile only) --> <button id="sidebar-open" type="button" class="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors lg:hidden" aria-label="Open sidebar" data-astro-cid-revdk7n5> <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-revdk7n5> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-revdk7n5></path> </svg> </button> <!-- Page title --> <div class="flex flex-1 items-center gap-2 min-w-0" data-astro-cid-revdk7n5> <span class="hidden text-xs text-slate-400 sm:block shrink-0" data-astro-cid-revdk7n5>Empereal CRM</span> <span class="hidden text-slate-300 sm:block" data-astro-cid-revdk7n5>/</span> <h1 class="truncate text-sm font-semibold text-slate-800" data-astro-cid-revdk7n5>${title}</h1> </div> <!-- Right actions --> <div class="flex items-center gap-3 shrink-0" data-astro-cid-revdk7n5> <span class="hidden text-xs text-slate-400 sm:block" data-astro-cid-revdk7n5>${today}</span> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white select-none" data-astro-cid-revdk7n5>
A
</div> </div> </header> <!-- Page content --> <main class="flex-1 overflow-y-auto p-4 sm:p-6" data-astro-cid-revdk7n5> ${renderSlot($$result, $$slots["default"])} </main> </div> <!-- Mobile close button inside sidebar (injected by JS via sidebar-close id) --> <button id="sidebar-close" type="button" class="fixed top-4 right-4 z-40 hidden items-center justify-center rounded-md bg-white p-2 text-slate-500 shadow-md hover:bg-slate-50 lg:hidden" aria-label="Close sidebar" style="display:none" data-astro-cid-revdk7n5> <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-revdk7n5> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-astro-cid-revdk7n5></path> </svg> </button> ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/layouts/CRMLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/layouts/CRMLayout.astro", void 0);

export { $$CRMLayout as $ };
