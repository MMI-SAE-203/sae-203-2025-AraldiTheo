import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BDyi_QXf.mjs';
import { o as oneactivite } from '../../chunks/backend_BLU-T-5z.mjs';
import { $ as $$ImgPB } from '../../chunks/ImgPB_BqA9xiE8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const activites = await oneactivite(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <a href="./"> <p class=" font-bold py-10">retour sur les activites</p> <div></div> </a><div class="col-start-2"><a href="./"></a><h3 class="text-2xl font-semibold"><a href="./"></a><a class="text-black text-center"${addAttribute(`/film/${activites.id}`, "href")}>${activites.Nom_activite}</a> </h3> ${renderComponent($$result2, "ImgPB", $$ImgPB, { "record": activites, "field": "affiche", "alt": activites.imgAlt, "classPicture": "duotone  col-span-2 row span-3 flex items-center justify-center", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal" })} <address class="text-gray-500 not-italic  pb-4"> <p>animateur:<a${addAttribute(` /invite/${activites.expand?.animateur.id}`, "href")}>${activites.expand?.animateur.nom_invite} ${activites.expand?.animateur.prenom_invite}</a></p> </address> </div> </div>` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/activite/[id].astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/activite/[id].astro";
const $$url = "/activite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
