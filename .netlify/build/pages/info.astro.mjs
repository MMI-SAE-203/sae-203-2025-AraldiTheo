import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BDyi_QXf.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DJzTneve.mjs';
export { renderers } from '../renderers.mjs';

const imgcarte = new Proxy({"src":"/_astro/carte.CmPZlSrh.webp","width":391,"height":414,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/assets/image/carte.webp";
							}
							
							return target[name];
						}
					});

const imghotel1 = new Proxy({"src":"/_astro/hotel1.iu-A5m__.webp","width":259,"height":194,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/assets/image/hotel1.webp";
							}
							
							return target[name];
						}
					});

const imghotel2 = new Proxy({"src":"/_astro/hotel2.DaQcXOfB.webp","width":275,"height":183,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/assets/image/hotel2.webp";
							}
							
							return target[name];
						}
					});

const imghotel3 = new Proxy({"src":"/_astro/hotel3.D3zZt_dl.webp","width":259,"height":194,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/assets/image/hotel3.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:grid lg:grid-cols-3"> <div class="lg:col-start-2"> <div class=" flex justify-center items-center py-6"> <div class="relative bg-[#9EFFA7] w-80 h-10 rounded-lg"> <h2 class="text-center">Le Lieu</h2> </div> </div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full ", "src": imgcarte, "alt": "" })} <p class="text-center py-4">Adresse : 7 Rue du Malsaucy 90300 Sermamagny</p> <div class=" flex justify-center items-center py-6"> <div class="relative bg-[#9EFFA7] w-80 h-6 rounded-lg"> <h3 class="text-center">Horraires</h3> </div> </div> <div> <p class="lg:text-center">Le cinéNature se déroulera le 5,6et7 juillet 2025 </p> <ul class="text-center pb-6"> <li>Samedi 11h à 23h</li> <li>Dimanche 11h à 20h</li> <li>lundi 11h à 20h</li> </ul> </div> <div class=" flex justify-center items-center py-6"> <div class="relative bg-[#9EFFA7] w-80 h-6 rounded-lg"> <h3 class="text-center">Tarifs</h3> </div> </div> <div> <ul class="font-extrabold text-2xl pb-6 lg:text-center"> <li>Pass 1 jours : 35€</li> <li>Pass 2jours : 50€</li> <li>Pass complet : 60€</li> </ul> </div> <div class=" flex justify-center items-center py-6"> <div class="relative bg-[#9EFFA7] w-80 h-6 rounded-lg"> <h3 class="text-center">Consignes Vigipirate</h3> </div> </div> <p class="pl-6">Nous vous rappelons que, par soucis de sécurité, tous les visiteurs seront susceptibles d’être fouillés à l’entrée. De plus, certains objets seront interdit dans l’enceinte du parc des expositions :</p> <div class="pl-20"> <li>toutes les armes de toutes catégories et toutes les reproductions factices, ce qui inclut :</li> <li>es katana, sabres, épées et leurs répliques</li> <li>tout matériel explosif ou reproduction de matériel explosif</li> <li>les bokken et toutes les répliques d’objets contondants (batte de baseball…)</li> <li>les armes de type airsoft</li> <li>les uniformes de type militaire, police, GIGN ou de toute autre brigade d’intervention</li> <li>les pistolets de type Nerf comportant des parties métalliques (s’ils sont entièrement en plastique, les pistolets Nerf sont autorisés à condition qu’ils ne soient pas accompagnés de fléchettes)</li> <li>les canifs, couteaux suisses et autres accessoires coupant</li> </div> <h3 class="py-10">SEULES SONT ACCEPTÉES LES RÉPLIQUES NON DANGEREUSES D’ARMES DE TYPE FANTAISIE NE PRÉSENTANT AUCUNE RESSEMBLANCE AVEC DES ARMES RÉELLES.</h3> <div class="pl-5 pb-10 "> <li>Les objets en métal ou comportant des parties métalliques </li> <li>Les sacs d’une contenance de plus de 25 litres</li> <li>Les glacières </li> <li>Les bouteilles ou tout autre objet en verre</li> <li>Les instruments sonores de type cornes de brume (à gaz ou à pompe), les mégaphones, les tambours et grosses caisses</li> </div> <div class=" flex justify-center items-center py-6"> <div class="relative bg-[#9EFFA7] w-80 h-6 rounded-lg"> <h3 class="text-center">Hébergements</h3> </div> </div> <h3 class="text-center pb-10">HÔTELS PARTENAIRES</h3> <div> ${renderComponent($$result2, "Image", $$Image, { "class": "ml-16 lg:w-3/4 ", "src": imghotel1, "alt": "" })} <h3 class="text-center py-10">Campanile Belfort-Montbéliard*** La Jonxion Avenue de la Gare TGV90400 Meroux <a href="https://www.campanile.com/hotel-result/?location=Meroux-Moval%2C+Territoire%20de%20Belfort%2C+France&rooms%5B0%5D%5Badult%5D=1&rooms%5B0%5D%5Bchild%5D=0&sr=SEA-CA-FR-GOOGLE-BRAND&gad_source=1&gad_source=1&gclid=CjwKCAjwvr--BhB5EiwAd5YbXthQu6aDDK-Hb0ih1uOMA3JWnMMLTWGJlNfHlqi6tFWFWXK6ss7UhBoC64gQAvD_BwE">Site web</a> 03 84 19 08 97</h3> ${renderComponent($$result2, "Image", $$Image, { "class": "ml-16 lg:w-3/4", "src": imghotel2, "alt": "" })} <h3 class="text-center py-10">HOTEL BEST WESTERN 9 avenue Wilson 90000 Belfort <a href="https://www.bestwestern.fr/fr/hotel-Belfort-Best-Western-Hotel-Belfort-93725">Site web</a> 03 84 21 59 45</h3> ${renderComponent($$result2, "Image", $$Image, { "class": "ml-16 lg:w-3/4", "src": imghotel3, "alt": "" })} <h3 class="text-center py-10">Camping de l’Étang des Forges de Belfort *** Env. à 6 km du festival <a href="https://fr.camping-and-co.com/camping-etang-des-forges?utm_source=google&utm_medium=cpc&utm_campaign=DYN_NOMS_CAMPINGS&utm_content=Etang_des_Forges_Dyn&gad_source=1&gclid=CjwKCAjwvr--BhB5EiwAd5YbXhqQPmkltjsYT6m31XF3joQnbdpUgal_Aaqmc-CAbXBcV8EXRZeIUBoC6WAQAvD_BwE#checkinDate=15.03.2025&checkoutDate=22.03.2025&nights=7">Site web</a> 03 84 22 54 92 03 84 19 08 97</h3> </div> <div class=" flex justify-center items-center py-6"> <div class="relative bg-[#9EFFA7] w-80 h-6 rounded-lg"> <h3 class="text-center">Coment venir</h3> </div> </div> <div class="ml-6 pt-4 pb-24"> <h3>PRIVILÉGIEZ L’ÉCO-MOBILITÉ</h3> <p>Le festival du CinéNature se déroule sur la presqu’île du Malsaucy, un site protégé situé à 7 km de Belfort.Afin de limiter les impacts environnementaux et réduire le temps de venue sur le site, le festival développe un dispositif de navettes train et bus gratuits entre la gare TGV Belfort-Montbéliard, la gare Belfort-Ville, le camping et le site du festival.Le CinéNature encouragent et recommandent d’utiliser des moyens de transport alternatifs à la voiture, tels que le vélo ou les transports en commun.</p> </div> </div> </div> ` })}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/info/index.astro", void 0);

const $$file = "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/pages/info/index.astro";
const $$url = "/info";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
