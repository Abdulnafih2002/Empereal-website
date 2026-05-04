import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, o as renderSlot, m as maybeRenderHead, h as addAttribute, l as renderScript, n as renderHead, u as unescapeHTML } from './astro/server_Bkw53cAP.mjs';
import 'piccolore';
/* empty css                         */
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro("https://empereal.energy");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Container;
  const { as: Tag = "div", class: className = "" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": `mx-auto w-full max-w-container px-5 sm:px-8 lg:px-12 ${className}` }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/primitives/Container.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const nav = [
    {
      label: "About Empereal",
      href: "/about",
      children: [
        { label: "Who We Are", href: "/about", desc: "A global smart energy & EPC leader." },
        { label: "Leadership", href: "/leadership", desc: "Founder-led, experience-driven." },
        { label: "Our Values", href: "/about#our-purpose-title", desc: "Credibility, clarity, delivery." }
      ]
    },
    {
      label: "Solutions",
      href: "/solutions",
      children: [
        { label: "Solutions Overview", href: "/solutions", desc: "Six disciplines, one partner." },
        { label: "Solar Power Systems", href: "/solutions/solar-power-systems", desc: "Utility, C&I, BIPV, O&M." },
        { label: "Water & Desalination", href: "/solutions/water-desalination", desc: "Solar thermal & PV-RO systems." },
        { label: "Energy Storage", href: "/solutions/energy-storage", desc: "BESS & patented thermal storage." },
        { label: "Integrated Infrastructure", href: "/solutions/integrated-infrastructure", desc: "Power + water, end to end." },
        { label: "Green Hydrogen", href: "/solutions", desc: "Fuel-switching at scale." }
      ]
    },
    {
      label: "Projects",
      href: "/projects",
      children: [
        { label: "All Projects", href: "/projects", desc: "200+ commissioned installations." },
        { label: "Utility Scale", href: "/projects?filter=utility", desc: "GW-class installations." },
        { label: "Architectural BIPV", href: "/projects?filter=bipv", desc: "Net-zero landmark buildings." },
        { label: "Desalination", href: "/projects?filter=desalination", desc: "Solar-powered fresh water." }
      ]
    },
    {
      label: "News & Insights",
      href: "#news",
      children: [
        { label: "Press Releases", href: "#news" },
        { label: "Event Highlights", href: "#news" },
        { label: "Articles", href: "#news" }
      ]
    },
    { label: "Contact", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-primary/5 relative" data-header data-astro-cid-r7uuxm25> ${renderComponent($$result, "Container", $$Container, { "class": "flex items-center justify-between gap-4 h-16 lg:h-20", "data-astro-cid-r7uuxm25": true }, { "default": ($$result2) => renderTemplate` <a href="/" class="flex items-center" aria-label="Empereal home" data-astro-cid-r7uuxm25> <img src="/logo.svg" alt="Empereal — Energizing Communities" class="logo-dark h-9 lg:h-10 w-auto" data-astro-cid-r7uuxm25> <img src="/logo-light.svg" alt="" aria-hidden="true" class="logo-light h-9 lg:h-10 w-auto" data-astro-cid-r7uuxm25> </a> <nav aria-label="Primary" class="hidden lg:flex items-center gap-1 self-stretch" data-astro-cid-r7uuxm25> ${nav.map((item) => renderTemplate`<div class="self-stretch flex items-center group" data-nav-item data-astro-cid-r7uuxm25> ${item.children ? renderTemplate`<button type="button" aria-haspopup="true" class="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-ink hover:text-primary transition-colors bg-transparent border-0 cursor-default" data-astro-cid-r7uuxm25> ${item.label} <svg viewBox="0 0 12 12" class="h-3 w-3 text-muted transition-transform group-hover:rotate-180" fill="none" aria-hidden="true" data-astro-cid-r7uuxm25> <path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r7uuxm25></path> </svg> </button>` : renderTemplate`<a${addAttribute(item.href, "href")} class="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-ink hover:text-primary transition-colors" data-astro-cid-r7uuxm25> ${item.label} </a>`} ${item.children && renderTemplate`<div class="invisible opacity-0 translate-y-1 pointer-events-none absolute left-0 right-0 top-full transition-all duration-150 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto" role="menu" data-astro-cid-r7uuxm25> <div class="w-full bg-white shadow-card-lg ring-1 ring-primary/5 border-t border-primary/5" data-astro-cid-r7uuxm25> ${renderComponent($$result2, "Container", $$Container, { "class": "py-8", "data-astro-cid-r7uuxm25": true }, { "default": ($$result3) => renderTemplate` <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]" data-astro-cid-r7uuxm25> ${item.children.map((c) => renderTemplate`<a${addAttribute(c.href, "href")} class="block rounded-lg px-4 py-3 hover:bg-primary-50 transition-colors" role="menuitem" data-astro-cid-r7uuxm25> <div class="text-base font-semibold text-primary-dark" data-astro-cid-r7uuxm25>${c.label}</div> ${c.desc && renderTemplate`<div class="text-sm text-muted mt-1" data-astro-cid-r7uuxm25>${c.desc}</div>`} </a>`)} </div> ` })} </div> </div>`} </div>`)} </nav> <div class="hidden lg:flex items-center" data-astro-cid-r7uuxm25> <a href="/contact" class="inline-flex items-center gap-2 rounded-md bg-cta hover:bg-cta-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors min-h-[44px] shadow-sm" data-astro-cid-r7uuxm25>
Get Started
</a> </div> <button type="button" class="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg text-ink hover:bg-primary-50 transition-colors" aria-label="Open menu" aria-controls="mobile-drawer" aria-expanded="false" data-drawer-toggle data-astro-cid-r7uuxm25> <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" aria-hidden="true" data-astro-cid-r7uuxm25> <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-r7uuxm25></path> </svg> </button> ` })} <div class="lg:hidden fixed inset-0 z-50 pointer-events-none opacity-0 transition-opacity duration-200" data-drawer-backdrop aria-hidden="true" data-astro-cid-r7uuxm25> <div class="absolute inset-0 bg-primary-dark/50" data-astro-cid-r7uuxm25></div> </div> <aside id="mobile-drawer" class="lg:hidden fixed top-0 right-0 z-[60] h-[100dvh] w-[88vw] max-w-sm bg-white text-ink translate-x-full transition-transform duration-250 ease-out shadow-2xl flex flex-col" data-drawer aria-hidden="true" data-astro-cid-r7uuxm25> <div class="flex items-center justify-between p-5 border-b border-primary/10" data-astro-cid-r7uuxm25> <img src="/logo.svg" alt="" class="h-8 w-auto" data-astro-cid-r7uuxm25> <button type="button" class="inline-flex items-center justify-center h-11 w-11 rounded-lg text-ink hover:bg-primary-50" aria-label="Close menu" data-drawer-close data-astro-cid-r7uuxm25> <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" aria-hidden="true" data-astro-cid-r7uuxm25> <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-r7uuxm25></path> </svg> </button> </div> <nav class="flex-1 overflow-y-auto p-3" aria-label="Mobile primary" data-astro-cid-r7uuxm25> ${nav.map((item) => renderTemplate`<details class="group border-b border-primary/5 last:border-b-0" data-astro-cid-r7uuxm25> <summary class="flex items-center justify-between px-3 py-3.5 rounded-lg text-base font-semibold text-ink cursor-pointer list-none" data-astro-cid-r7uuxm25> <a${addAttribute(item.href, "href")} data-drawer-link data-astro-cid-r7uuxm25>${item.label}</a> ${item.children && renderTemplate`<svg viewBox="0 0 12 12" class="h-3 w-3 text-muted transition-transform group-open:rotate-180" fill="none" aria-hidden="true" data-astro-cid-r7uuxm25> <path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r7uuxm25></path> </svg>`} </summary> ${item.children && renderTemplate`<div class="pb-2 pl-3" data-astro-cid-r7uuxm25> ${item.children.map((c) => renderTemplate`<a${addAttribute(c.href, "href")} class="block rounded-md px-3 py-2 text-sm text-muted hover:text-primary hover:bg-primary-50" data-drawer-link data-astro-cid-r7uuxm25>${c.label}</a>`)} </div>`} </details>`)} </nav> <div class="p-4 border-t border-primary/10" data-astro-cid-r7uuxm25> <a href="/contact" class="flex items-center justify-center rounded-md bg-cta hover:bg-cta-dark px-5 py-3 text-sm font-semibold text-white min-h-[48px]" data-drawer-link data-astro-cid-r7uuxm25>Get Started</a> </div> </aside> </header> ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/site/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/site/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const cols = [
    {
      title: "Quick Links",
      links: [
        { label: "About Empereal", href: "/about" },
        { label: "Solutions", href: "/solutions" },
        { label: "Projects", href: "/projects" },
        { label: "News & Insights", href: "#news" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Get a Quote", href: "#" },
        { label: "Talk to an Expert", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Cookie Policy", href: "#" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer id="footer" class="relative isolate overflow-hidden bg-primary-dark text-white/80"> <div class="relative"> <!-- TOP: image-backed row with logo/desc LEFT + newsletter RIGHT --> <div class="relative isolate"> <div class="absolute inset-0 -z-10"> <img src="/images/footer-bg.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" decoding="async" onerror="this.remove()"> <!-- Gradient: slightly darker at top for text legibility, blends into the solid bottom half --> <div class="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/50 to-primary-dark" aria-hidden="true"></div> </div> <div class="relative px-6 sm:px-10 lg:px-14 py-10 lg:py-14"> <div class="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center"> <!-- Logo + company description --> <div> <img src="/logo-light.svg" alt="Empereal — Energizing Communities" class="h-10 w-auto"> <p class="mt-5 text-sm sm:text-base leading-relaxed text-white/85 max-w-md">
Empereal is a global solar energy solutions provider delivering high-performance, future-ready EPC projects across commercial, industrial, and utility sectors.
</p> </div> <!-- Newsletter --> <div> <h3 class="font-display text-xl sm:text-2xl font-semibold text-white">
Subscribe to Our Newsletter
</h3> <p class="mt-2 text-sm text-white/75">
Get the latest updates and insights delivered to your inbox.
</p> <form class="mt-5 flex flex-col sm:flex-row items-stretch gap-0 sm:gap-0 rounded-md sm:bg-white/95 sm:p-1 max-w-md" data-newsletter novalidate> <label class="sr-only" for="footer-email">Email address</label> <input id="footer-email" type="email" name="email" required autocomplete="email" placeholder="Enter your email" class="w-full rounded-md bg-white px-4 py-3 text-base text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-success min-h-[48px] sm:rounded-r-none sm:focus:ring-0"> <button type="submit" class="mt-2 sm:mt-0 inline-flex items-center justify-center gap-2 rounded-md bg-success hover:bg-success-dark px-6 py-3 text-sm font-semibold text-white transition-colors min-h-[48px] shadow-sm sm:rounded-l-none">
Subscribe
</button> </form> <p class="mt-2 text-xs text-white/70" data-newsletter-status aria-live="polite"></p> </div> </div> </div> </div> <!-- DIVIDER between image-top and solid-bottom --> <div class="border-t border-white/10"></div> <!-- BOTTOM: solid dark, 4-column link grid --> <div class="relative bg-primary-dark"> <div class="px-6 sm:px-10 lg:px-14 py-12 lg:py-16"> <div class="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-10 lg:grid-cols-4"> <!-- Quick Links --> <div> <h4 class="text-white text-base font-semibold">${cols[0].title}</h4> <ul class="mt-5 space-y-2.5 text-sm"> ${cols[0].links.map((l) => renderTemplate`<li> <a${addAttribute(l.href, "href")} class="text-white/70 hover:text-white transition-colors">${l.label}</a> </li>`)} </ul> </div> <!-- Support --> <div> <h4 class="text-white text-base font-semibold">${cols[1].title}</h4> <ul class="mt-5 space-y-2.5 text-sm"> ${cols[1].links.map((l) => renderTemplate`<li> <a${addAttribute(l.href, "href")} class="text-white/70 hover:text-white transition-colors">${l.label}</a> </li>`)} </ul> </div> <!-- Legal --> <div> <h4 class="text-white text-base font-semibold">${cols[2].title}</h4> <ul class="mt-5 space-y-2.5 text-sm"> ${cols[2].links.map((l) => renderTemplate`<li> <a${addAttribute(l.href, "href")} class="text-white/70 hover:text-white transition-colors">${l.label}</a> </li>`)} </ul> </div> <!-- Contact + WhatsApp card --> <div class="col-span-2 lg:col-span-1"> <h4 class="text-white text-base font-semibold">Contact</h4> <ul class="mt-5 space-y-2.5 text-sm text-white/75"> <li class="flex items-start gap-2"> <svg viewBox="0 0 20 20" class="h-4 w-4 mt-0.5 text-accent shrink-0" fill="none" aria-hidden="true"> <path d="M10 2c3.3 0 6 2.7 6 6 0 4.5-6 10-6 10S4 12.5 4 8c0-3.3 2.7-6 6-6z" stroke="currentColor" stroke-width="1.5"></path> <circle cx="10" cy="8" r="2" stroke="currentColor" stroke-width="1.5" fill="none"></circle> </svg>
Dubai, United Arab Emirates
</li> <li class="flex items-start gap-2"> <svg viewBox="0 0 20 20" class="h-4 w-4 mt-0.5 text-accent shrink-0" fill="none" aria-hidden="true"> <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"></rect> <path d="M2 6l8 6 8-6" stroke="currentColor" stroke-width="1.5"></path> </svg> <a href="mailto:info@empereal.com" class="hover:text-white">info@empereal.com</a> </li> <li class="flex items-start gap-2"> <svg viewBox="0 0 20 20" class="h-4 w-4 mt-0.5 text-accent shrink-0" fill="none" aria-hidden="true"> <path d="M4 5c0-.5.4-1 1-1h2l1.5 3.5L7 9c.8 1.5 2 2.7 3.5 3.5L12 11l3.5 1.5V15c0 .5-.4 1-1 1C9 16 4 11 4 5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path> </svg>
+971 XX XXX XXXX
</li> </ul> <!-- WhatsApp mini card (now nested inside Contact column per reference) --> <div class="mt-6 rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-4 flex items-start gap-3"> <div class="flex-1 min-w-0"> <p class="text-sm font-semibold text-white">Need Instant Assistance?</p> <p class="mt-1 text-xs text-white/70 leading-relaxed">
Chat with our energy experts on WhatsApp or live chat.
</p> </div> <a href="https://wa.me/971501234567" target="_blank" rel="noopener" class="shrink-0 inline-flex items-center gap-1.5 rounded-md bg-success hover:bg-success-dark px-3 py-2 text-xs font-semibold text-white transition-colors shadow-sm" aria-label="Chat with us on WhatsApp"> <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true"> <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2s-.8.9-1 1.1c-.2.2-.4.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"></path> </svg>
WhatsApp
</a> </div> </div> </div> <!-- Copyright strip --> <div class="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between"> <p>© ${year} <span class="font-semibold text-white/85">Empereal Energy Solutions</span>. All rights reserved. <a href="/crm/login" class="ml-2 text-white/30 hover:text-white/60 transition-colors text-xs">Admin</a></p> <div class="flex items-center gap-3"> <a href="#" class="hover:text-white">Privacy</a> <span class="text-white/20" aria-hidden="true">|</span> <a href="#" class="hover:text-white">Terms</a> <span class="text-white/20" aria-hidden="true">|</span> <a href="#" class="hover:text-white">Cookies</a> </div> </div> </div> </div> </div> </footer> ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/site/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/site/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://empereal.energy");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Empereal \u2014 Smart Solar & EPC Solutions",
    description = "A global smart solar & EPC leader delivering high-performance energy solutions across Asia and the Middle East.",
    image = "/images/hero-solar.jpg"
  } = Astro2.props;
  const canonical = new URL(Astro2.url.pathname, Astro2.site).toString();
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Empereal Energy Solutions",
    url: "https://empereal.energy",
    logo: "https://empereal.energy/logo.svg",
    slogan: "Energizing Communities",
    description,
    industry: "Solar EPC \xB7 Smart Energy \xB7 Sustainability",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE"
    }
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="theme-color" content="#1F3C5C"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', "><title>", '</title><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta name="twitter:card" content="summary_large_image"><link rel="preconnect" href="https://api.fontshare.com" crossorigin><link rel="preload" as="image" href="/images/hero-solar.jpg"><script type="application/ld+json">', "<\/script>", '</head> <body> <a href="#main" class="skip-link">Skip to content</a> ', ' <main id="main"> ', " </main> ", " ", " </body> </html>"])), addAttribute(canonical, "href"), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(canonical, "content"), unescapeHTML(JSON.stringify(org)), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/layouts/BaseLayout.astro", void 0);

export { $$Container as $, $$BaseLayout as a };
