import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_hG_XfLdv.mjs';
import { manifest } from './manifest_BcXTHUvw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/crm/auth/change-password.astro.mjs');
const _page3 = () => import('./pages/api/crm/auth/login.astro.mjs');
const _page4 = () => import('./pages/api/crm/auth/logout.astro.mjs');
const _page5 = () => import('./pages/api/crm/enquiries/_id_.astro.mjs');
const _page6 = () => import('./pages/api/crm/enquiries.astro.mjs');
const _page7 = () => import('./pages/api/crm/features/cards/_id_.astro.mjs');
const _page8 = () => import('./pages/api/crm/features/cards.astro.mjs');
const _page9 = () => import('./pages/api/crm/features/highlight.astro.mjs');
const _page10 = () => import('./pages/api/crm/projects/_id_.astro.mjs');
const _page11 = () => import('./pages/api/crm/projects.astro.mjs');
const _page12 = () => import('./pages/api/crm/settings.astro.mjs');
const _page13 = () => import('./pages/api/crm/solutions/_id_.astro.mjs');
const _page14 = () => import('./pages/api/crm/solutions.astro.mjs');
const _page15 = () => import('./pages/api/crm/upload.astro.mjs');
const _page16 = () => import('./pages/api/enquiries/submit.astro.mjs');
const _page17 = () => import('./pages/contact.astro.mjs');
const _page18 = () => import('./pages/crm/change-password.astro.mjs');
const _page19 = () => import('./pages/crm/enquiries/_id_.astro.mjs');
const _page20 = () => import('./pages/crm/enquiries.astro.mjs');
const _page21 = () => import('./pages/crm/features/new.astro.mjs');
const _page22 = () => import('./pages/crm/features/_id_.astro.mjs');
const _page23 = () => import('./pages/crm/features.astro.mjs');
const _page24 = () => import('./pages/crm/login.astro.mjs');
const _page25 = () => import('./pages/crm/projects/new.astro.mjs');
const _page26 = () => import('./pages/crm/projects/_id_.astro.mjs');
const _page27 = () => import('./pages/crm/projects.astro.mjs');
const _page28 = () => import('./pages/crm/settings.astro.mjs');
const _page29 = () => import('./pages/crm/solutions/new.astro.mjs');
const _page30 = () => import('./pages/crm/solutions/_id_.astro.mjs');
const _page31 = () => import('./pages/crm/solutions.astro.mjs');
const _page32 = () => import('./pages/crm.astro.mjs');
const _page33 = () => import('./pages/leadership.astro.mjs');
const _page34 = () => import('./pages/projects.astro.mjs');
const _page35 = () => import('./pages/solutions/energy-storage.astro.mjs');
const _page36 = () => import('./pages/solutions/integrated-infrastructure.astro.mjs');
const _page37 = () => import('./pages/solutions/solar-power-systems.astro.mjs');
const _page38 = () => import('./pages/solutions/water-desalination.astro.mjs');
const _page39 = () => import('./pages/solutions.astro.mjs');
const _page40 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/crm/auth/change-password.ts", _page2],
    ["src/pages/api/crm/auth/login.ts", _page3],
    ["src/pages/api/crm/auth/logout.ts", _page4],
    ["src/pages/api/crm/enquiries/[id].ts", _page5],
    ["src/pages/api/crm/enquiries/index.ts", _page6],
    ["src/pages/api/crm/features/cards/[id].ts", _page7],
    ["src/pages/api/crm/features/cards/index.ts", _page8],
    ["src/pages/api/crm/features/highlight.ts", _page9],
    ["src/pages/api/crm/projects/[id].ts", _page10],
    ["src/pages/api/crm/projects/index.ts", _page11],
    ["src/pages/api/crm/settings.ts", _page12],
    ["src/pages/api/crm/solutions/[id].ts", _page13],
    ["src/pages/api/crm/solutions/index.ts", _page14],
    ["src/pages/api/crm/upload.ts", _page15],
    ["src/pages/api/enquiries/submit.ts", _page16],
    ["src/pages/contact.astro", _page17],
    ["src/pages/crm/change-password.astro", _page18],
    ["src/pages/crm/enquiries/[id].astro", _page19],
    ["src/pages/crm/enquiries/index.astro", _page20],
    ["src/pages/crm/features/new.astro", _page21],
    ["src/pages/crm/features/[id].astro", _page22],
    ["src/pages/crm/features/index.astro", _page23],
    ["src/pages/crm/login.astro", _page24],
    ["src/pages/crm/projects/new.astro", _page25],
    ["src/pages/crm/projects/[id].astro", _page26],
    ["src/pages/crm/projects/index.astro", _page27],
    ["src/pages/crm/settings.astro", _page28],
    ["src/pages/crm/solutions/new.astro", _page29],
    ["src/pages/crm/solutions/[id].astro", _page30],
    ["src/pages/crm/solutions/index.astro", _page31],
    ["src/pages/crm/index.astro", _page32],
    ["src/pages/leadership.astro", _page33],
    ["src/pages/projects.astro", _page34],
    ["src/pages/solutions/energy-storage.astro", _page35],
    ["src/pages/solutions/integrated-infrastructure.astro", _page36],
    ["src/pages/solutions/solar-power-systems.astro", _page37],
    ["src/pages/solutions/water-desalination.astro", _page38],
    ["src/pages/solutions.astro", _page39],
    ["src/pages/index.astro", _page40]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "a86094be-619c-461a-98d4-268aca2818cd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
