import { c as createComponent, u as unescapeHTML, s as spreadAttributes, b as renderTemplate, a as createAstro, m as maybeRenderHead, d as addAttribute, j as renderSlot, r as renderComponent, k as renderScript, l as renderHead } from './astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const countersByPage = /* @__PURE__ */ new WeakMap();
function createSvgComponent({ meta, attributes, children }) {
  const renderedIds = /* @__PURE__ */ new WeakMap();
  const Component = createComponent((result, props) => {
    let counter = countersByPage.get(result) ?? 0;
    const {
      title: titleProp,
      viewBox,
      mode,
      ...normalizedProps
    } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (mode === "sprite") {
      let symbol = "";
      let id = renderedIds.get(result);
      if (!id) {
        countersByPage.set(result, ++counter);
        id = `a:${counter}`;
        symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
        renderedIds.set(result, id);
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use href="#${id}" /></svg>`;
    }
    return renderTemplate`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size !== void 0 && props.width === void 0 && props.height === void 0) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Logo = createSvgComponent({"meta":{"src":"/_astro/IconLogo.CgNtw9tW.svg","width":87,"height":87,"format":"svg"},"attributes":{"mode":"inline","width":"65.000000pt","height":"65.000000pt","viewBox":"0 0 65.000000 65.000000","preserveAspectRatio":"xMidYMid meet"},"children":"\n\n<g transform=\"translate(0.000000,65.000000) scale(0.100000,-0.100000)\" fill=\"#000000\" stroke=\"none\">\n<path d=\"M180 512 c0 -48 23 -97 41 -87 16 11 10 67 -12 101 -11 19 -23 34\n-25 34 -2 0 -4 -21 -4 -48z m40 -30 c0 -7 -4 -11 -9 -8 -5 4 -12 0 -14 -6 -3\n-7 -6 5 -6 27 0 37 1 39 14 21 8 -11 15 -26 15 -34z\" />\n<path d=\"M340 530 c70 -13 127 -53 157 -109 13 -24 23 -37 23 -29 0 24 -55 93\n-93 117 -21 13 -58 24 -89 26 l-53 4 55 -9z\" />\n<path d=\"M246 521 c-4 -5 3 -7 14 -4 23 6 26 13 6 13 -8 0 -17 -4 -20 -9z\" />\n<path d=\"M315 488 c-35 -21 -85 -71 -85 -86 0 -12 -5 -10 -23 6 -26 25 -47 29\n-47 9 0 -20 30 -57 45 -57 8 0 18 -7 23 -17 13 -22 42 -9 41 19 0 22 -1 22 -9\n3 -5 -11 -9 -14 -9 -7 -1 7 -5 10 -11 7 -14 -8 -13 8 2 41 l13 27 6 -24 c6\n-23 7 -22 14 9 15 67 90 93 141 48 80 -68 -17 -187 -106 -130 l-25 16 24 -21\nc60 -54 165 14 145 94 -14 56 -90 91 -139 63z m-121 -93 c-4 -8 -7 -15 -9 -15\n-2 0 -5 7 -9 15 -3 9 0 15 9 15 9 0 12 -6 9 -15z\" />\n<path d=\"M148 448 c-8 -13 -18 -34 -21 -48 l-7 -25 13 26 c6 14 18 34 26 43 8\n9 12 19 9 22 -3 2 -12 -6 -20 -18z\" />\n<path d=\"M342 453 c5 -26 38 -29 38 -4 0 15 -6 21 -21 21 -14 0 -19 -5 -17\n-17z\" />\n<path d=\"M301 416 c-9 -10 -8 -16 4 -26 19 -16 41 1 32 24 -8 20 -21 20 -36 2z\" />\n<path d=\"M391 416 c-8 -10 -8 -16 2 -24 17 -14 42 2 34 22 -8 20 -21 20 -36 2z\" />\n<path d=\"M342 363 c5 -26 38 -29 38 -4 0 15 -6 21 -21 21 -14 0 -19 -5 -17\n-17z\" />\n<path d=\"M110 326 c0 -86 48 -161 125 -197 138 -64 299 45 293 198 l-1 48 -4\n-41 -4 -42 -83 -3 c-75 -4 -88 -7 -128 -36 l-45 -32 3 52 c1 29 0 39 -2 24\nl-5 -28 -22 32 c-12 18 -28 34 -35 37 -19 6 22 -74 41 -81 17 -7 11 -51 -9\n-68 -12 -9 -14 -4 -14 28 0 46 -28 93 -77 131 l-33 25 0 -47z m73 -34 c16 -21\n27 -48 27 -66 0 -24 -3 -27 -10 -16 -5 8 -10 29 -10 45 0 21 -3 26 -9 16 -7\n-11 -13 -6 -26 18 -9 18 -19 30 -22 27 -3 -3 2 -17 11 -31 12 -18 13 -25 4\n-25 -7 0 -3 -8 8 -18 28 -22 62 -86 42 -80 -29 10 -71 86 -76 138 -4 49 -4 51\n14 40 11 -7 31 -28 47 -48z m51 2 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10 16 0 14\n7 11 14 -7z m156 -23 c0 -5 -12 -12 -26 -15 -15 -4 -53 -32 -85 -63 -33 -31\n-59 -52 -59 -47 0 14 91 100 125 117 35 19 45 20 45 8z m120 0 c0 -8 -90 -3\n-99 5 -2 2 19 4 47 4 29 0 52 -4 52 -9z m-120 -25 c0 -2 -20 -16 -44 -30 -25\n-14 -55 -40 -67 -58 -13 -17 -25 -26 -27 -20 -4 14 31 53 78 86 31 23 60 33\n60 22z m88 -3 c-16 -2 -40 -2 -55 0 -16 2 -3 4 27 4 30 0 43 -2 28 -4z m-33\n-22 c3 -6 -14 -12 -37 -14 -41 -3 -41 -4 10 -5 66 -2 69 -22 3 -22 -41 0 -54\n-5 -82 -31 -18 -17 -35 -26 -37 -21 -2 6 -11 8 -20 5 -12 -5 -11 1 7 20 13 14\n28 24 35 21 6 -2 16 6 21 18 13 29 86 50 100 29z m42 -7 c-3 -3 -12 -4 -19 -1\n-8 3 -5 6 6 6 11 1 17 -2 13 -5z m-57 -59 c-7 -8 -19 -15 -26 -15 -8 0 -11 6\n-8 15 4 8 15 15 26 15 17 0 18 -3 8 -15z m-50 -9 c0 -8 -7 -17 -16 -20 -30\n-11 -37 -6 -19 14 21 23 35 26 35 6z\" />\n</g>\n"});

const $$Astro$2 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "default",
    size = "medium",
    url = "#",
    text = ""
  } = Astro2.props;
  const variantClass = {
    default: "border-indigo-100 bg-indigo-50",
    dark: "border border-orange-300 bg-orange-300 text-white",
    outlined: "border-indigo-200 bg-red"
  };
  const sizeClass = {
    small: "px-4 py-2.5 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-base"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`inline-flex items-center gap-2 text-red-400 border-2 font-bold rounded-lg transition duration-300 ease-in-out ${variantClass[variant]} ${sizeClass[size]}`, "class")}> ${renderSlot($$result, $$slots["default"])} ${text} </a>`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center justify-between px-4 py-12 gap-8  bg-[rgb(253,234,181)] h-20"> <a href="/"> ${renderComponent($$result, "Logo", Logo, {})} </a> <h1>Festival Ciné Nature</h1> <button id="menu-btn" class="group relative z-10 flex h-3 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-0.5 *:w-full *:transform *:rounded-full *:bg-black *:transition *:duration-300" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[5px] group-aria-expanded:rotate-45"></span> <span class="group-aria-expanded:translate-y-[5px] group-aria-expanded:hidden"></span> <span class="group-aria-expanded:-translate-y-[5px] group-aria-expanded:-rotate-45"></span> </button> <nav id="menu" class="flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-[rgb(253,234,181)] visible opacity-100 max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100" aria-hidden="true"> <ul class="flex flex-col gap-4 lg:flex-row underline lg: text-center"> <li> <a${addAttribute(`block p-4 rounded-lg text-black-500 ${currentPath === "/film" ? "text-red-600 font-bold max-lg:bg-orange-300 max-lg:rounded-lg" : ""}`, "class")} href="/film">Programe films</a> </li> <li> <a${addAttribute(`block p-4 rounded-lg text-black-500 ${currentPath === "/activite" ? "text-red-600 font-bold max-lg:bg-orange-300 max-lg:rounded-lg" : ""}`, "class")} href="/activite">Programe Activités </a> </li> <li> <a${addAttribute(`block p-4 rounded-lg text-black-500 ${currentPath === "/apropos" ? "text-red-600 font-bold max-lg:bg-orange-300 max-lg:rounded-lg" : ""}`, "class")} href="/apropos">A propos</a> </li> <li> <a${addAttribute(`block p-4 rounded-lg text-black-500 ${currentPath === "/info" ? "text-red-600 font-bold max-lg:bg-orange-300 max-lg:rounded-lg" : ""}`, "class")} href="/info">Infos pratiques</a> </li> <li> <a${addAttribute(`block p-4 rounded-lg text-black-500 ${currentPath === "/invite" ? "text-red-600 font-bold max-lg:bg-orange-300 max-lg:rounded-lg" : ""}`, "class")} href="/invite">Invités</a> </li> <li> <a${addAttribute(`block p-4 rounded-lg text-black-500 ${currentPath === "/contact" ? "text-red-600 font-bold max-lg:bg-orange-300 max-lg:rounded-lg" : ""}`, "class")} href="/contact">Contact</a> </li> </ul> <div class="flex items-center justify-center gap-4 px-4"> ${renderComponent($$result, "Button", $$Button, { "variant": "dark", "url": "/signup", "text": "Billeterie" })} </div> </nav> </header> ${renderScript($$result, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/components/Header.astro", void 0);

const Facebook = createSvgComponent({"meta":{"src":"/_astro/IconFacebook.D-O1hkIP.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"24","height":"24","viewBox":"0 0 24 24"},"children":"\n  <path =\"\" d=\"M22 12c0-5.524-4.476-10-10-10S2 6.476 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.506 1.491-3.89 3.776-3.89 1.095 0 2.24.195 2.24.195v2.46h-1.262c-1.242 0-1.63.77-1.63 1.561V12h2.774l-.444 2.89h-2.33v6.989C18.343 21.129 22 16.991 22 12z\" />\n"});

const Instagram = createSvgComponent({"meta":{"src":"/_astro/IconInstagram.BIAhrc81.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"24","height":"24","viewBox":"0 0 24 24"},"children":"\n  <path =\"\" d=\"M12.002 6.872A5.119 5.119 0 006.876 12a5.119 5.119 0 005.126 5.128A5.119 5.119 0 0017.13 12a5.12 5.12 0 00-5.127-5.128zm0 8.462A3.34 3.34 0 018.67 12a3.337 3.337 0 013.333-3.334A3.337 3.337 0 0115.335 12a3.34 3.34 0 01-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 111.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19-1.17-1.17-2.588-1.535-4.19-1.616-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611-1.173 1.17-1.534 2.589-1.615 4.19-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.168-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 01-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.401a3.375 3.375 0 01-1.9-1.902c-.523-1.316-.402-4.44-.402-5.895 0-1.455-.116-4.583.401-5.895a3.375 3.375 0 011.901-1.902c1.316-.522 4.44-.401 5.894-.401 1.455 0 4.582-.116 5.894.401a3.375 3.375 0 011.901 1.902c.522 1.316.401 4.44.401 5.895 0 1.455.121 4.583-.401 5.895z\" />\n"});

const Twitter = createSvgComponent({"meta":{"src":"/_astro/IconTwitter.Caa1ZTgz.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"24","height":"24","viewBox":"0 0 24 24"},"children":"\n  <path =\"\" d=\"M19.944 7.416c.013.194.013.388.013.582 0 5.911-4.124 12.722-11.663 12.722-2.322 0-4.48-.733-6.294-2.007.33.041.647.055.99.055 1.916 0 3.68-.706 5.089-1.91-1.802-.042-3.313-1.33-3.833-3.101.254.041.508.069.774.069.368 0 .736-.055 1.079-.152-1.878-.416-3.287-2.215-3.287-4.389V9.23c.546.332 1.18.54 1.853.567-1.104-.803-1.827-2.173-1.827-3.724 0-.83.203-1.592.558-2.256 2.018 2.713 5.05 4.485 8.452 4.68a5.492 5.492 0 01-.102-1.025c0-2.465 1.828-4.472 4.1-4.472 1.18 0 2.245.54 2.994 1.412a7.673 7.673 0 002.602-1.08 4.411 4.411 0 01-1.802 2.464A7.685 7.685 0 0022 5.104a9.29 9.29 0 01-2.056 2.312z\" />\n"});

const Linkedin = createSvgComponent({"meta":{"src":"/_astro/IconLinkedin.BsbdNZ1A.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"24","height":"24","viewBox":"0 0 24 24"},"children":"\n  <path =\"\" d=\"M20.41 2.00014H3.47C3.27958 1.9975 3.0905 2.03239 2.91357 2.10282C2.73663 2.17326 2.5753 2.27786 2.4388 2.41065C2.30229 2.54344 2.19328 2.70182 2.11799 2.87675C2.0427 3.05167 2.00261 3.23972 2 3.43014V20.5701C2.00261 20.7606 2.0427 20.9486 2.11799 21.1235C2.19328 21.2985 2.30229 21.4568 2.4388 21.5896C2.5753 21.7224 2.73663 21.827 2.91357 21.8975C3.0905 21.9679 3.27958 22.0028 3.47 22.0001H20.41C20.6004 22.0028 20.7895 21.9679 20.9664 21.8975C21.1434 21.827 21.3047 21.7224 21.4412 21.5896C21.5777 21.4568 21.6867 21.2985 21.762 21.1235C21.8373 20.9486 21.8774 20.7606 21.88 20.5701V3.43014C21.8774 3.23972 21.8373 3.05167 21.762 2.87675C21.6867 2.70182 21.5777 2.54344 21.4412 2.41065C21.3047 2.27786 21.1434 2.17326 20.9664 2.10282C20.7895 2.03239 20.6004 1.9975 20.41 2.00014ZM8.03 18.7401H5.03V9.74014H8.03V18.7401ZM6.53 8.48014C6.11626 8.48014 5.71947 8.31578 5.42691 8.02323C5.13436 7.73067 4.97 7.33388 4.97 6.92014C4.97 6.5064 5.13436 6.10961 5.42691 5.81705C5.71947 5.5245 6.11626 5.36014 6.53 5.36014C6.7497 5.33522 6.97218 5.35699 7.18288 5.42402C7.39357 5.49105 7.58774 5.60183 7.75266 5.7491C7.91757 5.89637 8.04953 6.07682 8.13987 6.27862C8.23022 6.48043 8.27692 6.69904 8.27692 6.92014C8.27692 7.14124 8.23022 7.35985 8.13987 7.56166C8.04953 7.76346 7.91757 7.94391 7.75266 8.09118C7.58774 8.23845 7.39357 8.34923 7.18288 8.41626C6.97218 8.48329 6.7497 8.50505 6.53 8.48014ZM18.85 18.7401H15.85V13.9101C15.85 12.7001 15.42 11.9101 14.33 11.9101C13.9927 11.9126 13.6642 12.0184 13.3888 12.2133C13.1135 12.4082 12.9045 12.6828 12.79 13.0001C12.7117 13.2352 12.6778 13.4827 12.69 13.7301V18.7301H9.69C9.69 18.7301 9.69 10.5501 9.69 9.73014H12.69V11.0001C12.9625 10.5272 13.3589 10.1377 13.8364 9.87334C14.314 9.60902 14.8546 9.47999 15.4 9.50014C17.4 9.50014 18.85 10.7901 18.85 13.5601V18.7401Z\" />\n"});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="  space-y-8 pt-10 bg-[rgb(158,255,167)] lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0"> ${renderComponent($$result, "Logo", Logo, {})} <nav class="px-5 columns-2 gap-8 space-y-8 text-sm lg:text-base lg:columns-3 lg:col-span-3 lg:px-0 *:break-inside-avoid *:space-y-3"> <div> <ul> <li><a href="/contact">Contact</a></li> <li><a href="/apropos">A propos</a></li> </ul> <h3 class="left-0">
7 Rue du Malsaucy
        90300 Sermamagny
        BUT MMI 
        Araldi Théo</h3> </div> </nav> <div class="px-5 text-gray-400  border-gray-300 py-8 space-y-6 text-center lg:col-span-4 lg:flex lg:justify-around lg:items-center lg:space-y-0"> <p>©2025 Ciné Nature. All rights reserved</p> <ul class="flex gap-12 justify-center"> <li> <a href="https://facebook.com" aria-label="Facebook">${renderComponent($$result, "Facebook", Facebook, {})}</a> </li> <li> <a href="https://instagram.com" aria-label="Instagram">${renderComponent($$result, "Instagram", Instagram, {})}</a> </li> <li> <a href="https://twitter.com" aria-label="Twitter">${renderComponent($$result, "Twitter", Twitter, {})}</a> </li> <li> <a href="https://linkedin.com" aria-label="Linkedin">${renderComponent($$result, "Linkedin", Linkedin, {})}</a> </li> </ul> </div> </footer>`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/IconLogo.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title ? `${title} \u2014 Cin\xE9 Nature` : "Cin\xE9 Nature"}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="bg-[rgb(230,255,215)]"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
