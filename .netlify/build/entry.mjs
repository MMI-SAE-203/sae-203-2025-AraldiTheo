import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BExKW5yB.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/activite/add.astro.mjs');
const _page2 = () => import('./pages/activite/_id_.astro.mjs');
const _page3 = () => import('./pages/activite.astro.mjs');
const _page4 = () => import('./pages/apropos.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/film/add.astro.mjs');
const _page7 = () => import('./pages/film/_id_.astro.mjs');
const _page8 = () => import('./pages/film.astro.mjs');
const _page9 = () => import('./pages/info.astro.mjs');
const _page10 = () => import('./pages/invite/add.astro.mjs');
const _page11 = () => import('./pages/invite/_id_.astro.mjs');
const _page12 = () => import('./pages/invite.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/activite/add.astro", _page1],
    ["src/pages/activite/[id].astro", _page2],
    ["src/pages/activite/index.astro", _page3],
    ["src/pages/apropos/index.astro", _page4],
    ["src/pages/contact/index.astro", _page5],
    ["src/pages/film/add.astro", _page6],
    ["src/pages/film/[id].astro", _page7],
    ["src/pages/film/index.astro", _page8],
    ["src/pages/info/index.astro", _page9],
    ["src/pages/invite/add.astro", _page10],
    ["src/pages/invite/[id].astro", _page11],
    ["src/pages/invite/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bda96396-39af-4e67-8cf0-32912edb67f6"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
