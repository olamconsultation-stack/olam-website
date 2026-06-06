---
name: olam-med-spa-design
description: Use this skill to generate well-branded interfaces and assets for OLAM Med Spa (medical aesthetics spa, Pembroke Pines FL — non-surgical skin tightening for women 40+), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Key files:
- `readme.md` — full brand guide: content fundamentals (warm, honest, medical voice; light-italic emphasis on emotional words), visual foundations, iconography, and a manifest.
- `styles.css` — links all design tokens + fonts. Link this one file.
- `tokens/` — colors, typography, spacing/radius/shadow custom properties.
- `components/` — React primitives (Button, IconButton, Input, Select, Textarea, ServiceCard, TestimonialCard, ResultCard, Badge, Tag, Accordion, SiteHeader, PriceBlock). Each has a `.prompt.md` with usage.
- `ui_kits/website/` — full landing-page recreation showing the components composed together.
- `assets/` — logos (`logo-olam.png`, `logo-olam-white.png`), favicon.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Brand essentials at a glance:
- **Fonts:** Sora (display, weight 500; emotional words in 300 italic, steel-blue) + Inter (body). Icons: Google Material Symbols Outlined.
- **Color:** green `#7AB520` (primary, from logo), steel blue `#4BA8C8` (accent/emphasis), near-black `#1A1A1A`, warm off-white `#F9F7F4`. No emoji. No cold clinical blue fields.
- **Voice:** warm but authoritative; "honest qualification" (says who it's NOT for); specific numbers; first-person CTAs with a trailing → ("Book my session →"). English primary, Spanish secondary.
- **Feel:** editorial whitespace, pill buttons, 20–28px card radii, soft diffuse low-opacity shadows, signature "cushion" hover (lift −8px / scale 1.01).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
