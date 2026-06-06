# OLAM Website — UI Kit

A high-fidelity, click-through recreation of OLAM Med Spa's non-surgical
skin-tightening landing page, rebuilt from the production source (`uploads/code.html`).
It composes the design-system component primitives — it does **not** re-implement them.

## Run
Open `index.html`. It loads React + Babel, then `_ds_bundle.js` (the compiled
component library), then the section files. Components are read from
`window.OLAMMedSpaDesignSystem_e5ad93`.

## Structure
- `index.html` — shell: fonts, tokens (`styles.css`), Material Symbols, scripts.
- `Chrome.jsx` — `Header` (logo, EN/ES toggle, phone CTA), `Footer`, the `L` bilingual helper.
- `Top.jsx` — `Hero`, `Qualification` (honest "is this for you?"), `Leadership`.
- `Middle.jsx` — `Treat` (six problems via `ServiceCard`), `Technologies` (interactive tabs).
- `Bottom.jsx` — `Results` gallery (`ResultCard`), `Consult` ($100 dark callout), `Pricing` (`PriceBlock`).
- `Closing.jsx` — `FAQ` (`Accordion`), `Reserve` (form using `Input`/`Select`/`Textarea`/`Button`).
- `app.jsx` — assembles all sections; holds the language state.

## Interactions
- **Language toggle** — EN/ES in the header swaps every `.only-en` / `.only-es` string.
- **Technology tabs** — Ultherapy / RF Microneedling / Agnes RF swap the clinical card.
- **FAQ accordion** — one panel open at a time, rotating "+".
- **Reservation form** — client-side only; submits to a thank-you alert.

## Notes
- **Photography is placeholdered.** The hero, team, and results imagery render as
  neutral "photo" placeholders — the real licensed patient/team photos were not in
  the provided assets. Drop real images in and replace the `.ph` blocks / `ResultCard`
  `image` prop.
- The live site uses blue CTAs; per the brief this kit uses the **accent (blue)**
  button variant for primary actions to stay faithful to the deployed look. Swap to
  `variant="primary"` for the green-led brand direction.
