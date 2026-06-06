# Landing Page Brief — Olam Med Spa

## Brand
- **Name:** Olam Med Spa
- **Location:** Pembroke Pines, FL · Phone 954.237.0930 · olammedspa.com
- **Niche:** Medical aesthetics spa — non-surgical, physician-supervised

## Offer / Services
Aesthetic services: **skin tightening** (Ultherapy, RF Microneedling, Agnes RF),
**injectables** (Botox, fillers), **laser** treatments, **body contouring**.
Entry offer: **$100 Diagnostic Consultation** (3D skin analysis + written plan,
credited to treatment within 30 days).

## Audience
Women 40+ (35–65) in Pembroke Pines seeing early loss of firmness (jawline, neck,
cheeks) who want natural, non-surgical results and certified medical care. Strong
Latina base (Univisión/Telemundo/RCN positioning) — EN primary, ES secondary.

## Key outcome
Firmer, lifted skin in 60–90 days — with a written plan before you decide.

## Voice profile
<VOICE>
Warm but clinically authoritative. "An honest medical institution, not a sales
chain." Signature move = honest qualification (states who it's NOT for). Specific,
falsifiable numbers do the persuading. First-person CTAs with trailing arrow.
Closed em-dashes. No emoji. No hype words. Display headlines with the emotional
clause in light italic ("tighten and lift your skin *without surgery*").
</VOICE>

## Real proof (defensible — from brand's own production page)
- 15,000+ aesthetic procedures · 6,000+ injectables (last 5 years)
- 5.0★ Google — 395 reviews · Best of Pembroke Pines 2024
- Featured in Forbes & Univisión
- Board Certified Medical Director, 20+ yrs · team 30+ yrs combined
- 6 out of 10 patients return
- Pricing: $500–$3,500 per session area · financing from $45/mo (CareCredit/Cherry)
- Individual quoted testimonials: NONE on file → [TESTIMONIAL PLACEHOLDER]
- Patient before/after photos: NONE on file → marked placeholder slots

## CTA
Primary: **"Book My Consultation →"** (books the $100 diagnostic consultation)

## Sections (user-specified order)
Hero → Services → Social proof → Before/After → 3-step process → FAQ → CTA form

## Design system
Provided & extracted at `design/olam-med-spa-design-system/`. Tokens copied into
`landing-page/` (styles.css + tokens/ + assets/). Green #7AB520 primary, steel-blue
#4BA8C8 accent, warm off-white #F9F7F4, Sora+Inter, pill buttons, cushion-lift hover.

## Tool Preferences
- Deploy: Vercel (blocked — no CLI/token/git in env; awaiting auth from user).
- Form capture: GoHighLevel form embed, form ID `qxRPO4krPS42zbVf3IjU`.

## Landing Page
- Source: `landing-page/` (self-contained static; links DS tokens + assets).
- Status: built, bilingual EN/ES, GHL form wired. Images kept as placeholders.
- Local preview: `cd landing-page && python3 -m http.server 8753` → http://localhost:8753
- Deploy config: root `vercel.json` serves `outputDirectory: landing-page`; `.vercelignore` excludes design/.
- Live URL: [PENDING DEPLOY]
