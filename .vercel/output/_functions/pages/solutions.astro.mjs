import { f as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, e as createAstro, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$Container, a as $$BaseLayout } from '../chunks/BaseLayout_CiFmNO2a.mjs';
/* empty css                                     */
import { $ as $$CertificationsBar, a as $$SolutionsCTA } from '../chunks/SolutionsCTA_CZ1RsRPK.mjs';
import { i as getSolutions } from '../chunks/storage_CiLTPqcL.mjs';
export { renderers } from '../renderers.mjs';

const $$SolutionsHero = createComponent(($$result, $$props, $$slots) => {
  const pills = [
    "Solar Power Systems",
    "Water & Desalination",
    "Energy Storage",
    "Integrated Infrastructure",
    "Architectural BIPV",
    "Green Hydrogen"
  ];
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="bg-primary-dark/95 border-b border-white/5" data-astro-cid-7ju5h7xg> ${renderComponent($$result, "Container", $$Container, { "class": "flex items-center gap-2 py-2.5 text-xs", "data-astro-cid-7ju5h7xg": true }, { "default": ($$result2) => renderTemplate` <a href="/" class="text-white/55 hover:text-white/90 transition-colors" data-astro-cid-7ju5h7xg>Home</a> <span class="text-white/30" aria-hidden="true" data-astro-cid-7ju5h7xg>›</span> <span class="text-white/85" aria-current="page" data-astro-cid-7ju5h7xg>Solutions</span> ` })} </nav> <section class="page-hero relative isolate overflow-hidden bg-primary-dark text-white flex flex-col" aria-labelledby="solutions-hero-title" data-astro-cid-7ju5h7xg> <div class="absolute inset-0 -z-10" aria-hidden="true" data-astro-cid-7ju5h7xg> <img src="/images/hero-solar.jpg" alt="" class="h-full w-full object-cover" loading="eager" decoding="async" onerror="this.remove()" data-astro-cid-7ju5h7xg> <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/55 to-primary-dark/20" data-astro-cid-7ju5h7xg></div> <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" data-astro-cid-7ju5h7xg></div> <div class="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-accent/15 blur-[140px] animate-pulse-glow" data-astro-cid-7ju5h7xg></div> <div class="hidden lg:block absolute -right-10 -top-10 w-[520px] h-[420px] opacity-[0.08]" data-astro-cid-7ju5h7xg> <svg width="100%" height="100%" viewBox="0 0 280 220" fill="none" preserveAspectRatio="xMidYMid meet" data-astro-cid-7ju5h7xg> <line x1="0" y1="0" x2="280" y2="220" stroke="#F5B82E" stroke-width=".5" data-astro-cid-7ju5h7xg></line> <line x1="70" y1="0" x2="280" y2="165" stroke="#F5B82E" stroke-width=".5" data-astro-cid-7ju5h7xg></line> <line x1="140" y1="0" x2="280" y2="110" stroke="#F5B82E" stroke-width=".5" data-astro-cid-7ju5h7xg></line> <line x1="210" y1="0" x2="280" y2="55" stroke="#F5B82E" stroke-width=".5" data-astro-cid-7ju5h7xg></line> <line x1="0" y1="55" x2="225" y2="220" stroke="#F5B82E" stroke-width=".5" data-astro-cid-7ju5h7xg></line> <line x1="0" y1="110" x2="170" y2="220" stroke="#F5B82E" stroke-width=".5" data-astro-cid-7ju5h7xg></line> </svg> </div> </div> ${renderComponent($$result, "Container", $$Container, { "class": "relative flex-1 flex items-center", "data-astro-cid-7ju5h7xg": true }, { "default": ($$result2) => renderTemplate` <div class="py-16 sm:py-20 lg:py-24 max-w-3xl" data-astro-cid-7ju5h7xg> <p class="eyebrow !text-white hero-enter hero-enter-1" data-astro-cid-7ju5h7xg>360° Clean Energy Engineering</p> <h1 id="solutions-hero-title" class="fluid-display mt-4 text-white hero-enter hero-enter-2" data-astro-cid-7ju5h7xg>
Integrated solutions for <span class="text-accent" data-astro-cid-7ju5h7xg>clean energy and pure water</span> </h1> <p class="fluid-lead mt-6 text-white/85 max-w-2xl hero-enter hero-enter-3" data-astro-cid-7ju5h7xg>
Six engineering disciplines. One delivery partner. From feasibility to commissioning and long-term O&M — engineered for infrastructure, industry, and communities.
</p> <div class="mt-8 hero-enter hero-enter-4" data-astro-cid-7ju5h7xg> <a href="/contact" class="hero-cta press group inline-flex items-center gap-2 rounded-md bg-accent hover:bg-accent-dark px-6 py-3.5 text-sm sm:text-base font-semibold text-primary-dark transition-colors min-h-[48px] shadow-lg shadow-accent/20" data-astro-cid-7ju5h7xg>
Request a Consultation
<svg viewBox="0 0 20 20" class="h-4 w-4 arrow-slide" fill="none" aria-hidden="true" data-astro-cid-7ju5h7xg> <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7ju5h7xg></path> </svg> </a> </div> <ul class="mt-8 flex flex-wrap gap-2 hero-enter hero-enter-4" data-astro-cid-7ju5h7xg> ${pills.map((p) => renderTemplate`<li class="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/75" data-astro-cid-7ju5h7xg> ${p} </li>`)} </ul> </div> ` })} </section> `;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/solutions/SolutionsHero.astro", void 0);

const $$SolutionsIntro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-pad bg-white" aria-labelledby="solutions-intro-title"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="grid gap-10 lg:grid-cols-2 lg:items-center"> <div class="reveal-left"> <p class="eyebrow">Full-Lifecycle Engineering Services</p> <h2 id="solutions-intro-title" class="fluid-h2 mt-3">One partner. Every discipline.</h2> <p class="fluid-lead mt-6 text-muted max-w-xl">
Empereal provides a 360-degree service spanning architectural and engineering design, EPC, and long-term O&M. Our solutions are designed to be innovative and reliable, enabling clients to meet growing requirements in a sustainable and cost-efficient manner.
</p> <p class="mt-4 text-muted max-w-xl">
Six engineering disciplines operate under a single accountability structure — from feasibility studies through to 25-year performance optimisation. No vendor handoffs, no delivery gaps.
</p> </div> <figure class="group relative reveal-right"> <div class="hover-zoom relative overflow-hidden rounded-2xl aspect-[4/3] shadow-card-lg ring-1 ring-primary/5 bg-gradient-to-br from-primary via-primary-light to-accent/30 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary-dark/20"> <img src="/images/feature-epc.jpg" alt="Empereal engineering team on a solar EPC project site" class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" onerror="this.remove()"> <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-dark/70 to-transparent" aria-hidden="true"></div> <figcaption class="absolute left-4 bottom-3 inline-flex items-center rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-primary-dark shadow">
Engineering-led EPC delivery
</figcaption> </div> </figure> </div> ` })} </section>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/solutions/SolutionsIntro.astro", void 0);

const $$Astro = createAstro("https://empereal.energy");
const $$SolutionAreas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SolutionAreas;
  const { solutions } = Astro2.props;
  const icons = {
    solar: `<rect x="2" y="8" width="16" height="3" rx="1" fill="currentColor"/><rect x="2" y="13" width="16" height="3" rx="1" fill="currentColor" opacity=".6"/><rect x="2" y="3" width="16" height="3" rx="1" fill="currentColor" opacity=".4"/><line x1="6" y1="2" x2="6" y2="19" stroke="currentColor" stroke-width=".8"/><line x1="14" y1="2" x2="14" y2="19" stroke="currentColor" stroke-width=".8"/>`,
    drop: `<path d="M10 2 Q14.5 7 14.5 11 A4.5 4.5 0 0 1 5.5 11 Q5.5 7 10 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>`,
    battery: `<rect x="3" y="6" width="13" height="10" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="16" y="9" width="2" height="4" rx=".5" fill="currentColor"/><path d="M10 9v5m-2.5-2.5h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
    hub: `<circle cx="10" cy="10" r="6.5" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="10" r="2" fill="currentColor" opacity=".5"/><line x1="10" y1="3" x2="10" y2="6" stroke="currentColor" stroke-width="1.3"/><line x1="10" y1="14" x2="10" y2="17" stroke="currentColor" stroke-width="1.3"/><line x1="3" y1="10" x2="6" y2="10" stroke="currentColor" stroke-width="1.3"/><line x1="14" y1="10" x2="17" y2="10" stroke="currentColor" stroke-width="1.3"/>`,
    bipv: `<rect x="2.5" y="7" width="15" height="10" rx="1" stroke="currentColor" stroke-width="1.4"/><path d="M5 7 L10 3 L15 7" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><line x1="6.5" y1="7" x2="6.5" y2="17" stroke="currentColor" stroke-width=".7" opacity=".5"/><line x1="10" y1="7" x2="10" y2="17" stroke="currentColor" stroke-width=".7" opacity=".5"/><line x1="13.5" y1="7" x2="13.5" y2="17" stroke="currentColor" stroke-width=".7" opacity=".5"/><line x1="2.5" y1="12" x2="17.5" y2="12" stroke="currentColor" stroke-width=".7" opacity=".5"/>`,
    h2: `<circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="1.4"/><text x="10" y="13" text-anchor="middle" font-size="7" fill="currentColor" font-weight="600">H\u2082</text>`,
    star: `<path d="M10 2l2.4 4.9H18l-4.2 3 1.6 5.1L10 12l-5.4 3 1.6-5.1L2 7l5.6-.1z" stroke="currentColor" stroke-width="1.4" fill="none"/>`,
    globe: `<circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.4"/><ellipse cx="10" cy="10" rx="3.5" ry="7.5" stroke="currentColor" stroke-width="1.2"/><line x1="2.5" y1="10" x2="17.5" y2="10" stroke="currentColor" stroke-width="1.2"/>`,
    bolt: `<path d="M13 2L5 11h7l-1 7 8-9h-7z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>`,
    shield: `<path d="M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5z" stroke="currentColor" stroke-width="1.4" fill="none"/>`
  };
  return renderTemplate`${maybeRenderHead()}<section class="section-pad bg-white" aria-labelledby="solution-areas-title"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="max-w-2xl reveal"> <p class="eyebrow">What We Deliver</p> <h2 id="solution-areas-title" class="fluid-h2 mt-3">Our solution areas</h2> <p class="fluid-lead mt-5 text-muted">
Government entities, developers, industrial operators, and infrastructure stakeholders who require bankable, engineered systems — not vendor products.
</p> </div> <div class="mt-10 grid gap-4 md:grid-cols-2 reveal-stagger"> ${solutions.map((a) => renderTemplate`<a${addAttribute(a.href ?? "#", "href")} class="group flex gap-4 rounded-xl bg-white ring-1 ring-primary/10 p-5 sm:p-6 hover:ring-accent hover:shadow-card-lg transition-all"> <div class="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent-dark" aria-hidden="true"> ${a.icon && icons[a.icon] ? renderTemplate`<svg viewBox="0 0 20 20" class="h-5 w-5" fill="none">${unescapeHTML(icons[a.icon])}</svg>` : renderTemplate`<svg viewBox="0 0 20 20" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.4"> <circle cx="10" cy="10" r="7"></circle> </svg>`} </div> <div class="flex-1 min-w-0"> <h3 class="flex items-center justify-between gap-3 text-base font-semibold text-primary-dark"> <span>${a.title}</span> <span class="text-muted group-hover:text-accent transition-colors shrink-0" aria-hidden="true"> <svg viewBox="0 0 20 20" class="h-4 w-4 arrow-slide" fill="none"> <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span> </h3> <p class="mt-2 text-sm text-muted leading-relaxed">${a.description}</p> </div> </a>`)} </div> ` })} </section>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/solutions/SolutionAreas.astro", void 0);

const $$ApplicationSectors = createComponent(($$result, $$props, $$slots) => {
  const sectors = [
    {
      title: "Government & municipal",
      desc: "Net-zero public buildings, solar parks, and sustainable water infrastructure for government entities and municipalities.",
      icon: "gov"
    },
    {
      title: "Commercial & industrial",
      desc: "Rooftop solar, energy cost reduction, green building certification, and demand management for factories, warehouses, and offices.",
      icon: "ci"
    },
    {
      title: "Residential & hospitality",
      desc: "Solar carports, BIPV facades, off-grid resort solutions, and fully renewable power and water systems for tourism developments.",
      icon: "resort"
    },
    {
      title: "Utility-scale power",
      desc: "Multi-MW solar farms, grid-connected generation assets, and large-scale solar parks for national utilities and independent power producers.",
      icon: "util"
    },
    {
      title: "Industrial water",
      desc: "Effluent recovery, demineralized water production, cooling tower blowdown treatment, and boiler feedwater for industrial facilities.",
      icon: "water"
    },
    {
      title: "Transportation infrastructure",
      desc: "Solar-powered bus depots, metro facilities, airport energy systems, EV charging infrastructure, and tram operations.",
      icon: "transport"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section-pad bg-surface" aria-labelledby="sectors-title"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="max-w-2xl reveal"> <p class="eyebrow">Who We Serve</p> <h2 id="sectors-title" class="fluid-h2 mt-3">Applications & sectors</h2> <p class="fluid-lead mt-5 text-muted">
Empereal delivers engineered systems across government, commercial, industrial, and infrastructure sectors — from feasibility through lifetime O&M.
</p> </div> <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger"> ${sectors.map((s) => renderTemplate`<article class="group rounded-xl bg-white ring-1 ring-primary/10 p-5 sm:p-6 hover:ring-accent/40 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"> <div class="icon-lift inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent-dark" aria-hidden="true"> ${s.icon === "gov" && renderTemplate`<svg viewBox="0 0 20 20" class="h-5 w-5" fill="none"> <rect x="2" y="8" width="16" height="10" rx="1" stroke="currentColor" stroke-width="1.4"></rect> <path d="M6 8V5a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.4"></path> </svg>`} ${s.icon === "ci" && renderTemplate`<svg viewBox="0 0 20 20" class="h-5 w-5" fill="none"> <rect x="3" y="5" width="14" height="13" rx="1" stroke="currentColor" stroke-width="1.4"></rect> <line x1="7" y1="5" x2="7" y2="2" stroke="currentColor" stroke-width="1.4"></line> <line x1="13" y1="5" x2="13" y2="2" stroke="currentColor" stroke-width="1.4"></line> <line x1="3" y1="11" x2="17" y2="11" stroke="currentColor" stroke-width=".8" opacity=".5"></line> </svg>`} ${s.icon === "resort" && renderTemplate`<svg viewBox="0 0 20 20" class="h-5 w-5" fill="none"> <circle cx="10" cy="7" r="4" stroke="currentColor" stroke-width="1.4"></circle> <path d="M3 18 Q10 12 17 18" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path> </svg>`} ${s.icon === "util" && renderTemplate`<svg viewBox="0 0 20 20" class="h-5 w-5" fill="none"> <path d="M3 14 L7 6 L10 10 L13 4 L17 14Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"></path> <line x1="2" y1="17" x2="18" y2="17" stroke="currentColor" stroke-width="1" opacity=".5"></line> </svg>`} ${s.icon === "water" && renderTemplate`<svg viewBox="0 0 20 20" class="h-5 w-5" fill="none"> <path d="M10 2 Q14.5 7 14.5 11 A4.5 4.5 0 0 1 5.5 11 Q5.5 7 10 2Z" stroke="currentColor" stroke-width="1.4" fill="none"></path> </svg>`} ${s.icon === "transport" && renderTemplate`<svg viewBox="0 0 20 20" class="h-5 w-5" fill="none"> <rect x="2" y="11" width="16" height="7" rx="1.5" stroke="currentColor" stroke-width="1.4"></rect> <path d="M6 11 L6 7 Q6 3 10 3 Q14 3 14 7 L14 11" stroke="currentColor" stroke-width="1.4"></path> </svg>`} </div> <h3 class="mt-4 text-base font-semibold text-primary-dark">${s.title}</h3> <p class="mt-2 text-sm text-muted leading-relaxed">${s.desc}</p> </article>`)} </div> ` })} </section>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/solutions/ApplicationSectors.astro", void 0);

const $$DeliveryApproach = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      num: "1",
      title: "Feasibility & design",
      desc: "Resource assessment, generation studies, shading analysis, and architectural integration planning."
    },
    {
      num: "2",
      title: "Engineering & procurement",
      desc: "Detailed engineering, equipment selection, authority submissions, and supply chain management."
    },
    {
      num: "3",
      title: "Construction & commissioning",
      desc: "Field installation, testing, grid connection, authority approvals, and handover documentation."
    },
    {
      num: "4",
      title: "Operations & maintenance",
      desc: "Performance monitoring, preventive maintenance, fault resolution, and long-term asset optimisation."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section-pad bg-[#0F2238] text-white" aria-labelledby="delivery-approach-title"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="max-w-2xl mx-auto text-center reveal"> <p class="eyebrow !text-accent">How We Deliver</p> <h2 id="delivery-approach-title" class="fluid-h2 mt-3 text-white">Our delivery approach</h2> <p class="fluid-lead mt-5 text-white/75">
Every Empereal project follows a rigorous, phased delivery process — from initial resource assessment through to long-term performance optimisation.
</p> </div> <div class="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 reveal-stagger"> <div class="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-accent/30" aria-hidden="true"></div> ${steps.map((s) => renderTemplate`<div class="relative flex flex-col items-center text-center"> <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary-dark font-display text-lg font-semibold shadow-lg shadow-accent/30 relative z-10" aria-hidden="true"> ${s.num} </div> <h3 class="mt-5 text-base font-semibold text-white">${s.title}</h3> <p class="mt-2 text-sm text-white/70 leading-relaxed max-w-[240px]">${s.desc}</p> </div>`)} </div> ` })} </section>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/solutions/DeliveryApproach.astro", void 0);

const prerender = false;
const $$Solutions = createComponent(async ($$result, $$props, $$slots) => {
  const solutions = await getSolutions();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Solutions \u2014 Empereal Clean Energy & Water Engineering", "description": "Six engineering disciplines, one delivery partner. Empereal delivers integrated solar power, water desalination, energy storage, BIPV, integrated infrastructure, and green hydrogen solutions \u2014 feasibility through O&M." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SolutionsHero", $$SolutionsHero, {})} ${renderComponent($$result2, "SolutionsIntro", $$SolutionsIntro, {})} ${renderComponent($$result2, "SolutionAreas", $$SolutionAreas, { "solutions": solutions })} ${renderComponent($$result2, "ApplicationSectors", $$ApplicationSectors, {})} ${renderComponent($$result2, "DeliveryApproach", $$DeliveryApproach, {})} ${renderComponent($$result2, "CertificationsBar", $$CertificationsBar, {})} ${renderComponent($$result2, "SolutionsCTA", $$SolutionsCTA, {})} ` })}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/solutions.astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/solutions.astro";
const $$url = "/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
