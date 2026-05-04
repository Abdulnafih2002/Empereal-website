import { f as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, h as addAttribute } from './astro/server_Bkw53cAP.mjs';
import 'piccolore';
import { $ as $$Container } from './BaseLayout_CiFmNO2a.mjs';
/* empty css                             */

const $$CertificationsBar = createComponent(($$result, $$props, $$slots) => {
  const certs = [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ISO 45001:2018",
    "IEC 61730",
    "IEC 61215",
    "Dubai SHAMS/D33"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary-dark/95 text-white border-t border-accent/15 py-5 overflow-hidden" aria-label="Certifications" data-astro-cid-423qricc> ${renderComponent($$result, "Container", $$Container, { "class": "flex flex-col sm:flex-row sm:items-center gap-4", "data-astro-cid-423qricc": true }, { "default": ($$result2) => renderTemplate` <p class="text-xs font-semibold uppercase tracking-[0.15em] text-white/55 shrink-0" data-astro-cid-423qricc>Certified under</p> <div class="marquee group relative flex-1 min-w-0 overflow-hidden" data-astro-cid-423qricc> <ul class="marquee-track flex gap-2 w-max" data-astro-cid-423qricc> ${[...certs, ...certs].map((c, i) => renderTemplate`<li class="shrink-0 rounded-md bg-white/5 border border-white/15 px-3 py-1.5 text-xs text-white/75 whitespace-nowrap"${addAttribute(i >= certs.length ? "true" : "false", "aria-hidden")} data-astro-cid-423qricc> ${c} </li>`)} </ul> <div class="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-primary-dark to-transparent" aria-hidden="true" data-astro-cid-423qricc></div> <div class="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-primary-dark to-transparent" aria-hidden="true" data-astro-cid-423qricc></div> </div> ` })} </section> `;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/solutions/CertificationsBar.astro", void 0);

const $$SolutionsCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary-dark text-white border-t border-accent/15" aria-labelledby="solutions-cta-title"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-16 sm:py-20 text-center max-w-2xl mx-auto reveal"> <h2 id="solutions-cta-title" class="fluid-h2 text-white">Every project begins with engineering.</h2> <p class="mt-4 fluid-lead text-white/75 max-w-lg mx-auto">
Speak with our technical team about your requirements — from initial feasibility through to long-term operations.
</p> <a href="/contact" class="press group mt-8 inline-flex items-center gap-2 rounded-md bg-accent hover:bg-accent-dark px-6 py-3.5 text-sm sm:text-base font-semibold text-primary-dark transition-colors min-h-[48px] shadow-lg shadow-accent/20">
Request a Technical Consultation
<svg viewBox="0 0 20 20" class="h-4 w-4 arrow-slide" fill="none" aria-hidden="true"> <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </div> ` })} </section>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/sections/solutions/SolutionsCTA.astro", void 0);

export { $$CertificationsBar as $, $$SolutionsCTA as a };
