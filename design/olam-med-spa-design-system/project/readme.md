# OLAM Med Spa — Design System

A brand & UI design system for **OLAM Med Spa**, a medical aesthetics spa in
Pembroke Pines, FL. OLAM offers non-surgical skin tightening, injectables, laser
treatments, and body contouring. The audience is **women 40+** seeking *natural*
results without surgery. The voice is warm but clinically authoritative — an
"honest medical institution," not a sales-driven chain.

This system is consumed by design agents to produce on-brand interfaces, landing
pages, slides, and marketing assets.

---

## Sources reviewed

| Source | What it is | Notes |
|---|---|---|
| `uploads/code.html` | **Primary source of truth** — full production landing-page HTML for the "Skin Tightening" Google-Ads page | Tailwind config (exact brand hexes), Sora+Inter type, Material Symbols, GSAP/Lenis motion, full copy in EN + ES |
| `uploads/screencapture-…png` | Full-page screenshot of the same live landing page | Layout/visual reference; archived to `assets/reference-landing-page.png` |
| `uploads/logo-large-a.png` | OLAM med-spa horizontal logo (green wordmark + tri-stroke swoosh) | Copied to `assets/logo-olam.png` (+ white knockout) |
| `uploads/cropped-favicon-a-1.png` | Favicon — the swoosh mark alone | Copied to `assets/favicon-olam.png` |
| `uploads/_.jpeg` | Unrelated "Upmind" template screenshot | Mood reference only (green editorial); NOT an OLAM asset |

Live site: olammedspa.com · Phone: 954.237.0930

> **Color reconciliation (read me):** The written brief specifies **green
> `#7AB520` as the *primary*** action color with **steel blue `#4BA8C8` as the
> accent**. The *live site* actually ships **blue** CTAs (`#5B98BF` → `#1F6489`).
> This system follows the **brief**: green is primary (matches the logo), blue is
> the emphasis/accent color. Both blue tones are preserved as tokens
> (`--blue-400/700`) so the live-site look is still reproducible. If you want CTAs
> to match the deployed site exactly, use the `accent` button variant.

---

## CONTENT FUNDAMENTALS

The voice is the brand's strongest asset: **honest, medical, and unhurried** — it
disqualifies the wrong patient as readily as it courts the right one.

- **Person & address.** Speaks directly to *you* ("Is this for you?", "Then you
  decide."). The clinic refers to itself as *we* / *OLAM*. Never "I."
- **Tone.** Warm but authoritative. Confident without hype. It sells *trust and
  process*, not outcomes-as-magic. Recurring promise: *"A medical session. Not a
  sales pitch."*
- **The signature move: honest qualification.** Copy openly states who the
  treatment is **NOT** for ("You want a dramatic, Instagram-filter look" →
  disqualified). *"We'd rather lose a booking than take a patient we can't help."*
- **Headline construction.** A plain, declarative statement set in display type,
  with the **emotional clause in light italic**: "tighten and lift your skin
  *without surgery.*" · "Collective expertise. *Not a personality.*" · "What real
  results *look like.*" Build every hero/section title this way.
- **Specific, falsifiable claims.** Numbers do the persuading: *"15,000+ aesthetic
  procedures,"* *"6,000+ injectables,"* *"results in 60–90 days,"* *"$500–$3,500,"*
  *"financing from $45/mo."* Never vague superlatives.
- **Anti-hype on results.** Explicitly manages expectations: "like yourself, 5
  years ago," "a real biological process, not a filter — which is why it lasts."
- **Casing.** Sentence case for headlines and body. **Eyebrows / labels are
  ALL-CAPS, tracked wide** ("HONEST QUALIFICATION", "PRICE TRANSPARENCY"). Numerals
  for stats and step indicators ("01"–"06").
- **CTAs are direct & specific.** "Reserve my $100 diagnostic consultation →",
  "Book my session →", "See real results". First-person possessive ("my") +
  trailing arrow `→`. Avoid generic "Submit" / "Learn more."
- **Bilingual.** English primary, Spanish secondary — every user-facing string has
  an `.only-en` / `.only-es` pair, toggled by `html[data-lang]`. Spanish keeps the
  same warm-clinical register (e.g. "No un pitch de ventas.").
- **No emoji.** Ever. The only glyphs are a trailing `→` on CTAs, `+` on accordions,
  and `•` list bullets. Tone is medical, not playful.

---

## VISUAL FOUNDATIONS

The aesthetic is **editorial medical luxury**: generous whitespace, a warm
off-white canvas, tight display type, and soft diffuse shadows. It deliberately
avoids the cold blue/white sterility of typical med-spa sites.

- **Color vibe.** Warm neutral base (`#F9F7F4` / `#FCF9F8`), near-black ink, with
  green (logo) and steel-blue (emphasis) as the only saturated hues. Color is used
  *sparingly* — eyebrows, italic emphasis words, bullet dots, buttons. Large fields
  are neutral. Red appears **only** for honest-disqualifier lists.
- **Type.** `Sora` for everything expressive — display, headings, eyebrows, large
  numerals — at weight 500, tracked tight (`-0.05em` hero). Emphasis words drop to
  **weight 300 italic** in blue. `Inter` (400/500/600) for body and UI. Hero uses
  `clamp(3rem, 7vw, 5.25rem)` with `line-height: 0.92`.
- **Layout.** Single-column editorial sections, `max-width: 1152px` centered,
  side gutters 16px mobile / 32px desktop. Section rhythm **80px desktop / 48px
  mobile** (`py-20 md:py-32` on hero sections). Asymmetric 1:2 and 2:3 grids for
  text-vs-cards. Lots of breathing room — never dense.
- **Backgrounds.** Mostly flat warm off-white. Occasional **full-bleed photography**
  (hero media, leadership panel) and one **dark near-black callout band** (the $100
  consultation / reservation) for contrast. Subtle **blurred color "glow blobs"**
  (`blur(120px)`, brand green/blue at 5–10% opacity, `mix-blend: multiply`) float
  behind hero/section content. No gradients-as-decoration beyond a soft
  white→off-white hero wash and white→transparent photo scrims. No repeating
  patterns or textures.
- **Imagery.** Photography-forward and real: patient before/afters, the team,
  procedure shots, the travertine lobby. Warm, natural, softly lit — never cold or
  stocky. Photos sit in rounded frames (20–28px) with soft shadows; before/after
  uses an interactive drag slider. On dark sections photos are knocked back
  (`opacity-10 grayscale`) as texture.
- **Cards.** White or warm-off-white fill, `1px` hairline border
  (`rgba(0,0,0,0.06)`), `20px` radius (`28px` for feature/media), soft diffuse
  shadow (`0 30px 50px rgba(0,0,0,0.03)`). Many carry a tiny brand-tint glow blob in
  one corner.
- **Signature hover — "cushion lift."** Cards rise and barely scale on hover:
  `translateY(-8px) scale(1.01)`, shadow deepens to `0 40px 60px rgba(0,0,0,0.05)`,
  border tints toward brand. Eased with `cubic-bezier(0.16, 1, 0.3, 1)` over
  `0.4s`. Titles shift to brand color on group-hover.
- **Buttons.** Fully **pill** (`9999px`). Primary = solid green with a soft colored
  glow shadow; hover darkens + the same cushion ease. Secondary = `1px` ink outline,
  fills ink-dark on hover. Ghost/inline = colored text with `→`. No press-shrink on
  buttons (the cushion ease handles feel); cards do the lifting.
- **Borders & dividers.** Hairlines everywhere — `rgba(0,0,0,0.06–0.10)` on light,
  `rgba(255,255,255,0.10)` on dark. Sections separated by `border-y` hairlines, not
  heavy rules. List/step rows divided by bottom hairlines.
- **Radii.** `8px` inputs · `20px` brand cards · `28px` large/media · `40px` hero
  & leadership panel · pill buttons/tags/toggles.
- **Shadows.** Always soft, large-radius, very low opacity (3–5%). Hero media gets a
  deeper `shadow-2xl`. Buttons get a *colored* glow matching their fill. No hard or
  dark drop shadows; no inner shadows.
- **Transparency & blur.** Sticky header is `white/95` + `backdrop-blur-md`. Photo
  scrims fade white→transparent. Before/after labels and overlay chips use
  `bg/85` + `backdrop-blur`. Used for chrome and legibility, not decoration.
- **Animation.** Quiet and premium. Lenis smooth-scroll; GSAP scroll-reveals
  (`opacity 0→1`, `y 35→0`, `power3.out`, staggered `d-1/d-2/d-3`); a slow image
  parallax on the team photo; tab fades; accordions slide open. Easing favors
  `power3.out` / the cushion bezier. No bounces, no infinite loops on content (one
  exception: a slow linear logo marquee). Respect `prefers-reduced-motion`.

---

## ICONOGRAPHY

- **Primary icon set: Google "Material Symbols Outlined"** (weight 100–700, fill
  0–1), loaded from Google Fonts and rendered via
  `<span class="material-symbols-outlined">chevron_right</span>`. Thin, rounded,
  outlined — matches the soft editorial tone. Used sparingly (e.g. `chevron_right`
  in the leadership panel's filled-blue circles).
- **Inline SVG** for a few bespoke marks: the checkmark in reservation benefit lists
  (`M5 13l4 4L19 7`, 2px round stroke) and the before/after slider's chevron handle.
  Stroke style: `stroke-width: 2`, `round` caps/joins, `currentColor`.
- **Typographic "icons."** Many UI accents are just glyphs, not icons: `→` on CTAs,
  `+` (rotates to `×`) on FAQ accordions, `•` bullet dots, `★★★★★` for ratings,
  small `01–06` numerals as section indices, and tiny colored dots
  (`w-1.5 h-1.5 rounded-full`) as status/eyebrow markers.
- **No emoji. No icon "cards."** Iconography is restrained and functional.
- **Logo/mark.** The tri-stroke swoosh (green/black/blue, an "O") is the brand mark;
  it appears alone as the favicon. Full logo = swoosh + "OLAM" (green) + "med-spa"
  (dark). Assets: `assets/logo-olam.png`, `assets/logo-olam-white.png` (dark bg),
  `assets/favicon-olam.png`.

When building OLAM screens, link Material Symbols from Google Fonts and prefer it
for any UI glyph; reach for inline SVG only for the checkmark/handle marks above.

---

## Index / manifest

**Root**
- `styles.css` — entry point; `@import`s all tokens + fonts. Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`
(CSS custom properties; base primitives + semantic aliases).

**`assets/`** — `logo-olam.png`, `logo-olam-white.png`, `favicon-olam.png`,
`reference-landing-page.png`.

**`guidelines/`** — foundation specimen cards (Design System tab): colors, type,
spacing, radii, shadows, brand.

**`components/`** — reusable React primitives (see each `*.prompt.md`):
- `buttons/` — `Button`, `IconButton`
- `forms/` — `Input`, `Textarea`, `Select`
- `cards/` — `ServiceCard`, `TestimonialCard`, `ResultCard`
- `feedback/` — `Badge`, `Tag`, `Accordion`
- `navigation/` — `SiteHeader`, `PriceBlock`

**`ui_kits/website/`** — high-fidelity, click-through recreation of the OLAM
landing page (`index.html` + section JSX).

Namespace for `@dsCard` HTML: `window.OLAMMedSpaDesignSystem_e5ad93`.
