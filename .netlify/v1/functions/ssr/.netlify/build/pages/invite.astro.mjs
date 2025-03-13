import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BDyi_QXf.mjs';
import { $ as $$ImgPB } from '../chunks/ImgPB_BqA9xiE8.mjs';
import { h as getinvite } from '../chunks/backend_BLU-T-5z.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cardi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardi;
  const { ...invite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <div class="flex"> <a${addAttribute(`/invite/${invite.id}`, "href")}>${renderComponent($$result, "ImgPB", $$ImgPB, { "record": invite, "field": "photo", "alt": invite.imgAlt, "classPicture": "duotone  group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal" })}</a> <div class="relative px-6 py-8 space-y-4"> <h3 class="text-2xl font-semibold py-4"> <a class="text-black "${addAttribute(`/invite/${invite.id}`, "href")}>${invite.nom_invite} ${invite.prenom_invite}</a> </h3> </div> </div> </article>`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/components/Cardi.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invite = await getinvite();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/invite/add" class=" underline">Ajouter un invite</a> <div class=""> <div class="container py-20 space-y-8"> <h1 class="text-center">Invités</h1> <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"> ${invite.length > 0 ? invite.map((invite2) => renderTemplate`${renderComponent($$result2, "Cardi", $$Cardi, { ...invite2 })}`) : renderTemplate`<p>pas d'activités</p>`} </div> </div> </div> ` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/invite/index.astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/invite/index.astro";
const $$url = "/invite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
