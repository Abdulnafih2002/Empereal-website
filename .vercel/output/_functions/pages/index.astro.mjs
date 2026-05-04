import { f as createComponent, m as maybeRenderHead, k as renderComponent, l as renderScript, r as renderTemplate, h as addAttribute, e as createAstro, u as unescapeHTML } from '../chunks/astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$Container, a as $$BaseLayout } from '../chunks/BaseLayout_CiFmNO2a.mjs';
/* empty css                                 */
import { getFeatures } from '../chunks/storage_Dt7dQkXR.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const metrics = [
    { value: "350+", label: "Projects Delivered" },
    { value: "1.2 GW", label: "Solar Capacity" },
    { value: "15+", label: "Countries Served" },
    { value: "20+", label: "Years of Expertise" },
    { value: "$610M+", label: "Savings Enabled" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="hero-section relative isolate overflow-hidden bg-primary-dark text-white flex flex-col -mt-16 lg:mt-0" aria-label="Empereal Energy — Smart Solar Solutions" data-hero data-hero-backdrop data-astro-cid-74yslsmo> <div class="absolute inset-0 -z-10" data-astro-cid-74yslsmo> <img src="/images/hero-solar.jpg" alt="" class="h-full w-full object-cover" loading="eager" decoding="async" onerror="this.remove()" data-astro-cid-74yslsmo> <!-- Readability overlay: darken left (where text sits), fade to transparent on the right --> <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/55 to-primary-dark/15" aria-hidden="true" data-astro-cid-74yslsmo></div> <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" aria-hidden="true" data-astro-cid-74yslsmo></div> <!-- Subtle grid texture --> <svg class="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" data-astro-cid-74yslsmo> <defs data-astro-cid-74yslsmo> <pattern id="heroGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" data-astro-cid-74yslsmo> <path d="M40 0H0v40" fill="none" stroke="#fff" stroke-width="1" data-astro-cid-74yslsmo></path> </pattern> </defs> <rect width="1440" height="800" fill="url(#heroGrid)" data-astro-cid-74yslsmo></rect> </svg> </div> ${renderComponent($$result, "Container", $$Container, { "class": "relative flex-1 flex items-center", "data-astro-cid-74yslsmo": true }, { "default": ($$result2) => renderTemplate` <div class="pt-24 pb-14 sm:pt-28 sm:pb-20 lg:py-24 max-w-3xl" data-astro-cid-74yslsmo> <h1 class="fluid-display text-white hero-enter hero-enter-1" data-astro-cid-74yslsmo>Powering Progress with Smart Solar Solutions</h1> <p class="fluid-lead mt-6 text-white/85 max-w-2xl hero-enter hero-enter-2" data-astro-cid-74yslsmo>
Integrated, high-performance solar energy systems for businesses and communities across Asia and the Middle East.
</p> <div class="mt-8 flex flex-wrap items-center gap-3 hero-enter hero-enter-3" data-astro-cid-74yslsmo> <a href="/contact" class="hero-cta inline-flex items-center gap-2 rounded-md bg-orange hover:bg-orange-dark px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-orange/30 transition-colors min-h-[48px]" data-astro-cid-74yslsmo>
Request a Consultation
<svg viewBox="0 0 20 20" class="h-4 w-4 arrow-slide" fill="none" aria-hidden="true" data-astro-cid-74yslsmo> <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-74yslsmo></path> </svg> </a> <a href="/contact" class="hero-cta inline-flex items-center gap-2 rounded-md bg-cta hover:bg-cta-dark px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-cta/25 transition-colors min-h-[48px]" data-astro-cid-74yslsmo>
Consult Our Experts
</a> </div> </div> ` })} </section> <!-- Metrics strip: standalone section below the hero, so on mobile it sits
     below the fold at load and only appears after the user scrolls. --> <div class="relative bg-primary-dark text-white" data-astro-cid-74yslsmo> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-74yslsmo": true }, { "default": ($$result2) => renderTemplate` <dl class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y divide-white/10 sm:divide-y-0 sm:divide-x sm:divide-white/10 reveal-stagger" data-astro-cid-74yslsmo> ${metrics.map((m, i) => renderTemplate`<div${addAttribute(`px-4 py-5 lg:py-7 text-center sm:text-left ${i === metrics.length - 1 ? "col-span-2 sm:col-span-1" : ""}`, "class")} data-metric data-astro-cid-74yslsmo> <dt class="order-2 mt-1 text-[11px] sm:text-xs uppercase tracking-[0.15em] text-white/65 font-medium" data-astro-cid-74yslsmo>${m.label}</dt> <dd class="order-1 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white" data-astro-cid-74yslsmo>${m.value}</dd> </div>`)} </dl> ` })} </div>  ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/home/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/home/Hero.astro", void 0);

const $$Astro = createAstro("https://empereal.energy");
const $$ExperienceFeatures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExperienceFeatures;
  const { data: { highlight, cards } } = Astro2.props;
  const CIRC = 301.6;
  const offset = CIRC - CIRC * Math.min(Math.max(highlight.gaugePercent, 0), 100) / 100;
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="section-pad bg-surface" aria-labelledby="experience-title" data-astro-cid-b6rhotcr> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-b6rhotcr": true }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-2xl mx-auto reveal-stagger" data-astro-cid-b6rhotcr> <h2 id="experience-title" class="fluid-h2" data-astro-cid-b6rhotcr>Experience the Future of Solar Power.</h2> <p class="mt-3 text-muted fluid-lead" data-astro-cid-b6rhotcr>
Reliable solar solutions engineered for performance, savings, and sustainability.
</p> </div> <div class="mt-12 lg:mt-16 grid gap-5 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-stretch reveal-stagger" data-astro-cid-b6rhotcr> <!-- Featured card (dark navy) --> <article class="group relative overflow-hidden rounded-2xl bg-primary-dark text-white shadow-card hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1 min-h-[360px] lg:min-h-[440px]" data-astro-cid-b6rhotcr> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" data-astro-cid-b6rhotcr> ${highlight.imageUrl && renderTemplate`<img${addAttribute(highlight.imageUrl, "src")} alt="" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" onerror="this.remove()" data-astro-cid-b6rhotcr>`} <div class="absolute inset-0 bg-gradient-to-br from-primary-dark/70 via-primary/50 to-success/30" aria-hidden="true" data-astro-cid-b6rhotcr></div> <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/75 via-primary-dark/20 to-transparent" aria-hidden="true" data-astro-cid-b6rhotcr></div> </div> <div class="relative flex h-full flex-col justify-between p-6 lg:p-8" data-astro-cid-b6rhotcr> <div data-astro-cid-b6rhotcr> <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent" data-astro-cid-b6rhotcr>${highlight.eyebrow}</p> <h3 class="mt-2 font-display text-2xl sm:text-3xl font-semibold leading-tight text-white" data-astro-cid-b6rhotcr> ${highlight.title} </h3> <p class="mt-3 text-sm text-white/80 max-w-md" data-astro-cid-b6rhotcr> ${highlight.description} </p> </div> <div class="mt-6 flex items-end justify-between gap-4" data-astro-cid-b6rhotcr> <div data-astro-cid-b6rhotcr> <p class="text-[11px] uppercase tracking-[0.2em] text-white/60" data-astro-cid-b6rhotcr>${highlight.badgeLabel}</p> <p class="mt-1 font-display text-3xl sm:text-4xl font-semibold text-white" data-astro-cid-b6rhotcr> <span class="text-accent" data-astro-cid-b6rhotcr>${highlight.badgeValue}</span> </p> <p class="text-xs text-white/70" data-astro-cid-b6rhotcr>${highlight.badgeSuffix}</p> </div> <svg viewBox="0 0 120 120" class="h-20 w-20 lg:h-24 lg:w-24 shrink-0" aria-hidden="true" data-astro-cid-b6rhotcr> <defs data-astro-cid-b6rhotcr> <linearGradient id="gauge" x1="0" x2="1" y1="0" y2="0" data-astro-cid-b6rhotcr> <stop offset="0" stop-color="#F5B82E" data-astro-cid-b6rhotcr></stop> <stop offset="1" stop-color="#F27400" data-astro-cid-b6rhotcr></stop> </linearGradient> </defs> <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="10" data-astro-cid-b6rhotcr></circle> <circle cx="60" cy="60" r="48" fill="none" stroke="url(#gauge)" stroke-width="10" stroke-linecap="round"${addAttribute(CIRC, "stroke-dasharray")}${addAttribute(offset, "stroke-dashoffset")} transform="rotate(-90 60 60)" data-astro-cid-b6rhotcr></circle> <text x="60" y="66" text-anchor="middle" fill="#fff" font-family="Clash Display, sans-serif" font-size="22" font-weight="600" data-astro-cid-b6rhotcr> ${highlight.gaugePercent}%
</text> </svg> </div> </div> </article> <!-- Dynamic feature cards --> ${cards.map((f) => renderTemplate`<article class="group relative flex flex-col overflow-hidden isolate rounded-2xl bg-white border border-primary/10 shadow-card hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1 hover:border-transparent p-6 lg:p-7 min-h-[360px] lg:min-h-[440px]" data-astro-cid-b6rhotcr> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none -z-10" data-astro-cid-b6rhotcr> ${f.imageUrl && renderTemplate`<img${addAttribute(f.imageUrl, "src")} alt="" class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" onerror="this.remove()" data-astro-cid-b6rhotcr>`} </div> <span class="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft text-primary-dark ring-1 ring-accent/30 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:ring-white" data-astro-cid-b6rhotcr> ${f.icon ? renderTemplate`<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" data-astro-cid-b6rhotcr>${unescapeHTML(f.icon)}</svg>` : renderTemplate`<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-b6rhotcr> <circle cx="12" cy="12" r="9" data-astro-cid-b6rhotcr></circle> </svg>`} </span> <h3 class="mt-6 font-display text-lg lg:text-xl font-semibold text-primary-dark group-hover:text-white feature-text transition-colors duration-300" data-astro-cid-b6rhotcr> ${f.title} </h3> <p class="mt-2 text-sm text-muted group-hover:text-white/95 feature-text leading-relaxed flex-1 transition-colors duration-300" data-astro-cid-b6rhotcr> ${f.description} </p> <a${addAttribute(f.href ?? "#", "href")} class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent feature-text-link transition-colors" data-astro-cid-b6rhotcr>
Learn more
<svg viewBox="0 0 20 20" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true" data-astro-cid-b6rhotcr> <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-b6rhotcr></path> </svg> </a> </article>`)} </div> ` })} </section> `;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/home/ExperienceFeatures.astro", void 0);

const $$AboutEmpereal = createComponent(($$result, $$props, $$slots) => {
  const points = [
    "Trusted solar EPC expertise",
    "Pioneering projects across Asia & the Middle East"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="about" class="section-pad bg-white" aria-labelledby="about-title"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="grid gap-10 lg:grid-cols-2 lg:items-center"> <div class="reveal-left reveal-stagger order-2 lg:order-1"> <p class="eyebrow">Smart. Sustainable. Solar.</p> <h2 id="about-title" class="fluid-h2 mt-3">About Empereal</h2> <p class="mt-5 text-muted fluid-lead max-w-xl">
Empereal is a global leader in solar energy solutions, dedicated to driving sustainable progress with innovative, high-performance solar projects. We empower communities and industries to transition to clean energy.
</p> <ul class="mt-7 space-y-3"> ${points.map((p) => renderTemplate`<li class="flex items-start gap-3 text-sm sm:text-base text-ink"> <span class="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-success/15 text-success-dark shrink-0" aria-hidden="true"> <svg viewBox="0 0 20 20" class="h-3.5 w-3.5" fill="none"> <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span> <span>${p}</span> </li>`)} </ul> <a href="#about" class="mt-8 inline-flex items-center gap-2 rounded-md bg-ink hover:bg-primary-dark px-5 py-3 text-sm font-semibold text-white transition-colors min-h-[44px]">
Learn More
<svg viewBox="0 0 20 20" class="h-4 w-4 arrow-slide" fill="none" aria-hidden="true"> <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </div> <figure class="relative order-1 lg:order-2 reveal-right"> <div class="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-card-lg ring-1 ring-primary/5 bg-gradient-to-br from-primary via-primary-light to-accent/30"> <img src="/images/hero-solar.jpg" alt="Solar installation landscape at sunset" class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" onerror="this.remove()"> <!-- Subtle vignette for caption legibility --> <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-dark/70 to-transparent" aria-hidden="true"></div> <figcaption class="absolute left-4 bottom-3 inline-flex items-center rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-primary-dark shadow">
Expo 2020 Dubai
</figcaption> </div> </figure> </div> ` })} </section>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/home/AboutEmpereal.astro", void 0);

const $$OurProjects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      country: "United Arab Emirates",
      flag: "\u{1F1E6}\u{1F1EA}",
      title: "Large-Scale Solar Plant",
      summary: "Utility-scale solar power generation in the UAE \u2014 providing clean energy on a massive scale.",
      image: "/images/project-uae.jpg",
      gradient: "from-primary-dark via-primary to-accent/40"
    },
    {
      country: "India",
      flag: "\u{1F1EE}\u{1F1F3}",
      title: "Rooftop Solar for Factories",
      summary: "High-efficiency solar installations for Indian manufacturing facilities to reduce energy costs.",
      image: "/images/project-uae.jpg",
      gradient: "from-primary to-cta/50"
    },
    {
      country: "Malaysia",
      flag: "\u{1F1F2}\u{1F1FE}",
      title: "Solar Carports & Parking",
      summary: "Solar-powered carports and parking structures across Malaysia reducing operating expenses.",
      image: "/images/project-uae.jpg",
      gradient: "from-orange/40 via-primary to-primary-dark"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="section-pad bg-white" aria-labelledby="projects-title"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-2xl mx-auto reveal-stagger"> <p class="eyebrow">Smart. Scalable. Sustainable Energy Projects.</p> <h2 id="projects-title" class="fluid-h2 mt-3">Our Projects</h2> <p class="mt-4 text-muted fluid-lead">
Empereal pioneers world-class solar installations across Asia and the Middle East, enabling sustainable energy solutions that power communities and industries.
</p> </div> <div class="mt-12 lg:mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 reveal-stagger"> ${projects.map((p) => renderTemplate`<article class="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-primary/10 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300"> <div${addAttribute(`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.gradient}`, "class")}> <img${addAttribute(p.image, "src")}${addAttribute(`${p.title} \u2014 ${p.country}`, "alt")} class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" onerror="this.remove()"> <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" aria-hidden="true"></div> <div class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary-dark shadow"> <span aria-hidden="true">${p.flag}</span> ${p.country} </div> </div> <div class="flex flex-col flex-1 p-5 lg:p-6"> <h3 class="font-display text-lg lg:text-xl font-semibold text-primary-dark">${p.title}</h3> <p class="mt-2 text-sm text-muted leading-relaxed flex-1">${p.summary}</p> <a href="#" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-cta transition-colors">
View case study
<svg viewBox="0 0 20 20" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true"> <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </div> </article>`)} </div> <div class="mt-10 text-center reveal"> <a href="#" class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-white hover:border-primary hover:bg-primary-50 px-6 py-3 text-sm font-semibold text-primary transition-colors min-h-[44px]">
Explore All Projects
<svg viewBox="0 0 20 20" class="h-4 w-4 arrow-slide" fill="none" aria-hidden="true"> <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </div> ` })} </section>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/home/OurProjects.astro", void 0);

const $$NewsInsights = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      tag: "United Arab Emirates",
      date: "April 10, 2026",
      title: "Empereal Powers Solar Pavilion at Expo 2020 Dubai",
      excerpt: "Empereal showcased renewable innovations at Expo 2020 Dubai \u2014 1.65 MWp across 33 pavilions delivered under stringent timelines.",
      image: "/images/project-uae.jpg"
    },
    {
      tag: "Partnership",
      date: "March 8, 2026",
      title: "Empereal Partners with ADNOC for Solar Projects",
      excerpt: "Empereal collaborates with ADNOC to advance solar energy infrastructure across the UAE and wider GCC markets.",
      image: "/images/hero-solar.jpg"
    },
    {
      tag: "Summit",
      date: "April 16, 2026",
      title: "Empereal at World Future Energy Summit 2026",
      excerpt: "Empereal presented cutting-edge solar solutions in Abu Dhabi \u2014 highlighting next-generation BIPV and hydrogen-ready architectures.",
      image: "/images/testimonial-2.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="news" class="relative isolate overflow-hidden bg-primary-dark text-white section-pad" aria-labelledby="news-title"> <div class="absolute inset-0 -z-10"> <img src="/images/footer-bg.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-80" loading="lazy" decoding="async" onerror="this.remove()"> <div class="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary-light/30 to-primary/50" aria-hidden="true"></div> </div> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-2xl mx-auto reveal-stagger"> <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
Stay Informed. Stay Powered.
</p> <h2 id="news-title" class="fluid-h2 mt-3 text-white">News &amp; Insights from Empereal</h2> <p class="mt-4 text-white/75 fluid-lead">
Discover the latest updates on Empereal's solar projects and sustainable energy initiatives.
</p> </div> <div class="relative mt-12 lg:mt-16"> <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 reveal-stagger" role="list"> ${articles.map((a) => renderTemplate`<article role="listitem" class="group overflow-hidden rounded-2xl bg-white text-ink shadow-card hover:shadow-card-lg transition-all duration-300"> <div class="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary via-primary-light to-accent/30"> <img${addAttribute(a.image, "src")} alt="" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" onerror="this.remove()"> <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" aria-hidden="true"></div> <div class="absolute left-3 top-3 inline-flex items-center rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-dark shadow"> ${a.tag} </div> <div class="absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-md bg-primary-dark/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur"> <svg viewBox="0 0 20 20" class="h-3 w-3" fill="none" aria-hidden="true"> <rect x="3" y="4" width="14" height="13" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"></rect> <path d="M3 8h14M7 3v2M13 3v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> </svg> ${a.date} </div> </div> <div class="p-5 lg:p-6"> <h3 class="font-display text-base lg:text-lg font-semibold text-primary-dark leading-snug"> ${a.title} </h3> <p class="mt-2 text-sm text-muted leading-relaxed">${a.excerpt}</p> <a href="#" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-cta transition-colors">
Read article
<svg viewBox="0 0 20 20" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true"> <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </div> </article>`)} </div> </div> ` })} </section>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/home/NewsInsights.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      quote: "Empereal delivered beyond our expectations with their solar EPC expertise. The project was seamless, from design through to commissioning, setting a new standard of performance and sustainability.",
      name: "Ryun Robson",
      role: "Operations Director  |  Industrial Client",
      initials: "RR",
      avatar: "/images/testimonial-avatar-1.jpg",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "Empereal has helped us achieve significant energy savings while advancing our sustainability objectives \u2014 their engineering rigor stood out from day one.",
      name: "Sara El-Hadi",
      role: "Head of Sustainability  |  Commercial Real Estate",
      initials: "SE",
      avatar: "/images/testimonial-avatar-2.jpg",
      image: "/images/testimonial-2.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section-pad bg-white" aria-labelledby="testimonial-title"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <h2 id="testimonial-title" class="sr-only">What our clients say</h2> <div class="relative" data-testimonial> ${items.map((t, i) => renderTemplate`<article${addAttribute(`testimonial-slide ${i === 0 ? "" : "hidden"}`, "class")} data-testimonial-slide${addAttribute(i, "data-index")}${addAttribute(i === 0 ? "false" : "true", "aria-hidden")}> <div class="grid lg:grid-cols-[1.15fr_1fr] rounded-3xl bg-surface shadow-card ring-1 ring-primary/5 overflow-hidden reveal"> <!-- Text side --> <div class="p-7 sm:p-10 lg:p-14 order-2 lg:order-1 flex flex-col"> <!-- Quote badge --> <div class="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-primary/10"> <svg viewBox="0 0 24 24" class="h-4 w-4 sm:h-5 sm:w-5 text-primary-dark" fill="currentColor" aria-hidden="true"> <path d="M6.5 10c0-2.5 2-4.5 4.5-4.5V3C6.5 3 3 6.5 3 11v8h8V10H6.5zm11 0c0-2.5 2-4.5 4.5-4.5V3c-4.5 0-8 3.5-8 8v8h8V10h-4.5z"></path> </svg> </div> <!-- Quote text --> <blockquote class="mt-6 sm:mt-8 text-base sm:text-lg lg:text-[1.35rem] leading-[1.65] text-ink max-w-[44ch]"> ${t.quote} </blockquote> <!-- Dashed divider --> <hr class="mt-8 sm:mt-10 border-t border-dashed border-primary/20 max-w-[18rem]"> <!-- Author --> <div class="mt-5 flex items-center gap-3"> <div class="relative h-11 w-11 shrink-0 rounded-full bg-primary-50 ring-2 ring-white shadow-sm overflow-hidden"> <span class="absolute inset-0 flex items-center justify-center text-xs font-semibold text-primary-dark"> ${t.initials} </span> <img${addAttribute(t.avatar, "src")} alt="" class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" onerror="this.remove()"> </div> <div> <p class="text-sm font-semibold text-ink">${t.name}</p> <p class="text-xs text-muted mt-0.5">${t.role}</p> </div> </div> <!-- Nav arrows --> <div class="mt-8 flex items-center gap-2"> <button type="button" class="h-11 w-11 rounded-lg border border-primary/15 bg-white hover:bg-primary/5 text-primary flex items-center justify-center transition-colors shadow-sm" aria-label="Previous testimonial" data-testimonial-prev> <svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" aria-hidden="true"> <path d="M12 4l-6 6 6 6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> <button type="button" class="h-11 w-11 rounded-lg border border-primary/15 bg-white hover:bg-primary/5 text-primary flex items-center justify-center transition-colors shadow-sm" aria-label="Next testimonial" data-testimonial-next> <svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" aria-hidden="true"> <path d="M8 4l6 6-6 6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> </div> </div> <!-- Image side: extends flush to the card's rounded edge and blends into the card background --> <figure class="relative aspect-[4/3] lg:aspect-auto order-1 lg:order-2 bg-gradient-to-br from-primary via-primary-light to-accent/20"> <img${addAttribute(t.image, "src")} alt="" class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" onerror="this.remove()"> <!-- Mobile: image meets text below — fade the BOTTOM edge into the card --> <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface via-surface/70 to-transparent pointer-events-none lg:hidden" aria-hidden="true"></div> <!-- Desktop: image sits to the right of the text — fade the LEFT edge into the card --> <div class="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-surface via-surface/60 to-transparent pointer-events-none hidden lg:block" aria-hidden="true"></div> </figure> </div> </article>`)} </div> ` })} </section> ${renderScript($$result, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/home/Testimonial.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/home/Testimonial.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const featuresData = await getFeatures();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Empereal \u2014 Smart Solar & EPC Solutions", "description": "Powering progress with smart solar solutions. A global EPC leader delivering high-performance solar projects across 15+ countries \u2014 350+ installations, 1.2 GW of solar capacity, 20+ years of engineering expertise." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ExperienceFeatures", $$ExperienceFeatures, { "data": featuresData })} ${renderComponent($$result2, "AboutEmpereal", $$AboutEmpereal, {})} ${renderComponent($$result2, "OurProjects", $$OurProjects, {})} ${renderComponent($$result2, "NewsInsights", $$NewsInsights, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ` })}`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/index.astro", void 0);

const $$file = "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
