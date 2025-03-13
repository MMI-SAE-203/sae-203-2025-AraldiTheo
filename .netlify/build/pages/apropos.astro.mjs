import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BDyi_QXf.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DJzTneve.mjs';
export { renderers } from '../renderers.mjs';

const imgvue = new Proxy({"src":"/_astro/vue.BCTG2usi.webp","width":375,"height":250,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/assets/image/vue.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-center mb-8 pt-6"> A propos</h2> <p class="mb-8 lg:text-center">Le festival de cinéma éco-responsable qui se concentre sur la projection de films d'auteur et de documentaires abordant des sujets environnementaux et sociétaux. Il se déroule principalement en plein air, proposant une expérience immersive au cœur de la nature.</p> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full lg:w-1/2 lg:ml-96", "src": imgvue, "alt": "" })} <p class="mt-8 pb-24 lg:text-center">Le festival se déroulera sur la presqu'île du Malsaucy, un superbe environnement naturel à proximité de Belfort. Non seulement cet endroit propose un cadre super pour les projections en plein air, et il renforce également notre dévouement envers la durabilité et la préservation de l'environnement.</p> ` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/apropos/index.astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/apropos/index.astro";
const $$url = "/apropos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
