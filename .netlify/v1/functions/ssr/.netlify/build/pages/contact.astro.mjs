import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BDyi_QXf.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:grid lg:grid-cols-3"> <h2 class="text-center py-6 col-start-2">Contact</h2> <div class="items-center ml-10  py-3 col-start-2 lg:justify-center lg:ml-20"> <h3>Nom</h3> <input type="text" class="relative bg-white  w-80 h-6 rounded-3xl border border-black"> </div> <div class=" ml-10 items-center py-3 col-start-2 lg:justify-center lg:ml-20"> <h3>Prénom</h3> <input type="text" class="relative bg-white  w-80 h-6 rounded-3xl border border-black"> </div> <div class=" ml-10 items-center py-3 col-start-2 lg:justify-center lg:ml-20"> <h3>Email</h3> <input type="text" class="relative bg-white  w-80 h-6 rounded-3xl border border-black"> </div> <div class=" ml-10 items-center py-3 col-start-2 lg:justify-center lg:ml-20"> <h3>Messages</h3> <input type="text" class="relative bg-white w-80 h-36 rounded-3xl border border-black top-0"> </div> <div class=" flex justify-center items-center py-6 col-start-2"> <div class="relative bg-[#9EFFA7] w-24 h-6 rounded-lg"> <h3 class="text-center">Envoyer</h3> </div> </div> <div class=" flex justify-center items-center py-6 col-start-2"> <div class="relative bg-[#9EFFA7] w-80 h-12 rounded-lg"> <h3 class="text-center">Adresse email  www.cinenature@gmail.com</h3> </div> </div> <div class=" flex justify-center items-center py-6 col-start-2"> <div class="relative bg-[#9EFFA7] w-80 h-12 rounded-lg"> <h3 class="text-center">numéro de téléphone   
                +33 XX XX XX XX </h3> </div> </div> <div class=" flex justify-center items-center pt-6 pb-24 col-start-2"> <div class="relative bg-[#9EFFA7] w-80 h-12 rounded-lg"> <h3 class="text-center ">Adresse postale 
                7 Rue du Malsaucy
                90300 Sermamagny
</h3> </div> </div> </div> ` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/contact/index.astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
