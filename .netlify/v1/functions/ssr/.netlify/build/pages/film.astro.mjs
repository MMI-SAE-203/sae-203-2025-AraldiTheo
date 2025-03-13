import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BDyi_QXf.mjs';
import { $ as $$ImgPB } from '../chunks/ImgPB_BqA9xiE8.mjs';
import { f as formatDate } from '../chunks/utilises_D2yhCvbl.mjs';
import { d as getFilm } from '../chunks/backend_BLU-T-5z.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { ...film } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <div class="flex justify-center"> <a${addAttribute(`/film/${film.id}`, "href")}>${renderComponent($$result, "ImgPB", $$ImgPB, { "record": film, "field": "affiche", "alt": film.imgAlt, "classPicture": "", "classImg": "" })}</a> <div class="relative px-6 py-8 space-y-4 text-center"> <h3 class="text-2xl font-semibold py-4"> <a class="text-black"${addAttribute(`/film/${film.id}`, "href")}>${film.nom_film}</a> </h3> <p class="text-gray-500 flex items-center"> <span class="text-2xl font-bold ">${formatDate(film.date)}</span> </p> </div> </div> </article>`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/components/Card.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const film = await getFilm();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/film/add" class=" underline">Ajouter un Film</a> <div class=""> <div class="container py-20 space-y-8"> <h1 class="text-center">Programe films</h1> <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"> ${film.length > 0 ? film.map((film2) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...film2 })}`) : renderTemplate`<p>pas de films</p>`} </div> </div> </div> ` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/film/index.astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/film/index.astro";
const $$url = "/film";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
