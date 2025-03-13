import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BDyi_QXf.mjs';
import { f as formatDate } from '../chunks/utilises_D2yhCvbl.mjs';
import { $ as $$ImgPB } from '../chunks/ImgPB_BqA9xiE8.mjs';
import { g as getactivite } from '../chunks/backend_BLU-T-5z.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Carda = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carda;
  const { ...activite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <div class=""> <a${addAttribute(`/activite/${activite.id}`, "href")}>${renderComponent($$result, "ImgPB", $$ImgPB, { "record": activite, "field": "affiche", "alt": activite.imgAlt, "classPicture": "", "classImg": "" })}</a> <div class="relative px-6  space-y-4"> <h3 class="text-2xl font-semibold py-4"> <a class="text-black"${addAttribute(`/activite/${activite.id}`, "href")}>${activite.Nom_activite}</a> </h3> <p class="text-gray-500 flex items-center"> <span class="text-2xl font-bold ">${formatDate(activite.date)}</span> </p> </div> </div> </article>`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/components/Carda.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const activite = await getactivite();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/activite/add" class=" underline">Ajouter une activite</a> <div class=""> <div class="container py-20 space-y-8"> <h1 class="text-center">Programe activités</h1> <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"> ${activite.length > 0 ? activite.map((activite2) => renderTemplate`${renderComponent($$result2, "Carda", $$Carda, { ...activite2 })}`) : renderTemplate`<p>pas d'activités</p>`} </div> </div> </div> ` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/activite/index.astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/activite/index.astro";
const $$url = "/activite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
