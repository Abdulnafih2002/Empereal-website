import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_Bkw53cAP.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://empereal.energy");
const $$StatusBadge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StatusBadge;
  const { status } = Astro2.props;
  const config = {
    new: { pill: "bg-blue-50 text-blue-700 ring-1 ring-blue-200", dot: "bg-blue-500" },
    read: { pill: "bg-slate-100 text-slate-600 ring-1 ring-slate-200", dot: "bg-slate-400" },
    replied: { pill: "bg-green-50 text-green-700 ring-1 ring-green-200", dot: "bg-green-500" },
    archived: { pill: "bg-amber-50 text-amber-700 ring-1 ring-amber-200", dot: "bg-amber-500" }
  };
  const c = config[status];
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize", c.pill], "class:list")}> <span${addAttribute(["h-1.5 w-1.5 shrink-0 rounded-full", c.dot], "class:list")}></span> ${status} </span>`;
}, "/Users/n3globaltech/Documents/GitHub/Empereal-website/src/components/crm/StatusBadge.astro", void 0);

export { $$StatusBadge as $ };
