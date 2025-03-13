import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BDyi_QXf.mjs';
import { c as onefilm } from '../../chunks/backend_BLU-T-5z.mjs';
import { $ as $$ImgPB } from '../../chunks/ImgPB_BqA9xiE8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const films = await onefilm(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <a href="./"> <p class=" font-bold py-10">retour sur le Programe</p> <div></div> ${renderComponent($$result2, "ImgPB", $$ImgPB, { "record": films, "field": "affiche", "alt": films.imgAlt, "classPicture": "duotone  col-span-2 row span-3 flex items-center justify-center", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal pb-8" })} </a><div class="col-start-3"><a href="./"></a><h3 class=" font-semibold text-center"><a href="./"></a><a class="text-black"${addAttribute(`/film/${films.id}`, "href")}>${films.nom_film}</a> </h3> <h3 class="font-semibold p-2">Synopsis : </h3> <address class="text-gray-500 not-italic  pb-4"> ${films.synopsis} </address> <p>information du film :</p> <p class="w-36 py-8 text-gray-500 text ml-12">${films.info}</p> <p>invité :<a${addAttribute(`/invite/${films.expand?.invite.id}`, "href")}>${films.expand?.invite.nom_invite} ${films.expand?.invite.prenom_invite}</a></p> </div> </div>` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/film/[id].astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/film/[id].astro";
const $$url = "/film/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
