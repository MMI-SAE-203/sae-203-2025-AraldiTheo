import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BDyi_QXf.mjs';
import { e as addinvite } from '../../chunks/backend_BLU-T-5z.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let pbMessage = "";
  if (Astro2.request.method == "POST") {
    const data = await Astro2.request.formData();
    console.log(data);
    if (new Date(data.get("date")?.toString() || 0) < /* @__PURE__ */ new Date()) {
      pbMessage = "La date de l'\xE9v\xE9nement doit \xEAtre sup\xE9rieure \xE0 la date d'aujourd'hui";
    } else {
      const response = await addinvite(data);
      pbMessage = response.message;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ajouter un inite" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl">Ajouter un invite</h1> <p class="text-red-500">${pbMessage}</p> <form method="post" action="/invite/add" enctype="multipart/form-data" class="flex flex-col p-4"> <input type="text" nom-film="nom_invite" placeholder="Nom" class="border my-4 p-2 rounded-md" required> <input type="text" nom-film="prenom_invite" placeholder="Prenom" class="border my-4 p-2 rounded-md" required> <textarea name="synopsis" placeholder="bio" class="border my-4 p-2 rounded-md" required></textarea> <input type="file" name="photo" class="border my-4 p-2 rounded-md"> <input type="submit" value="Ajouter" class="bg-slate-500 rounded-lg p-5"> </form> ` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/invite/add.astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/invite/add.astro";
const $$url = "/invite/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Add,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
