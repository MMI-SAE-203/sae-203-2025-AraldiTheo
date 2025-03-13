import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BDyi_QXf.mjs';
import { f as oneinvite } from '../../chunks/backend_BLU-T-5z.mjs';
import { $ as $$ImgPB } from '../../chunks/ImgPB_BqA9xiE8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invites = await oneinvite(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <a href="./"> <p class=" font-bold py-10">retour sur le invite</p> <div></div> ${renderComponent($$result2, "ImgPB", $$ImgPB, { "record": invites, "field": "photo", "alt": invites.imgAlt, "classPicture": "duotone  col-span-2 row span-3 flex items-center justify-center", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal" })} </a><div class="col-start-2"><a href="./"></a><h3 class="text-2xl font-semibold"><a href="./"></a><a class="text-black"${addAttribute(`/film/${invites.id}`, "href")}>${invites.nom_invite} ${invites.prenom_invite}</a> </h3> <address class="text-gray-500 not-italic  pb-4"> ${invites.bio} </address> <p>Film en relation:<a${addAttribute(` /film/${invites.expand?.film.id}`, "href")}>${invites.expand?.film.nom_film} </a></p> </div> </div>` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/invite/[id].astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/invite/[id].astro";
const $$url = "/invite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
