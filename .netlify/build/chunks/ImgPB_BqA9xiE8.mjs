import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from './astro/server_U8DxJ3IX.mjs';
import 'kleur/colors';
import { c as $$Picture } from './_astro_assets_DJzTneve.mjs';
import { p as pb } from './backend_BLU-T-5z.mjs';

const $$Astro = createAstro();
const $$ImgPB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImgPB;
  const { record, field = "imgUrl", alt, classPicture, classImg, thumb = "1024x1024" } = Astro2.props;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb }) : null;
  return renderTemplate`${imageUrl && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "pictureAttributes": { class: classPicture }, "class": classImg, "inferSize": true, "formats": ["avif", "webp"], "alt": alt || "Image", "src": imageUrl })}`}`;
}, "C:/Users/Azerh/OneDrive/Bureau/Cours/Tpdev/sae-203-2025-AraldiTheo/src/components/ImgPB.astro", void 0);

export { $$ImgPB as $ };
