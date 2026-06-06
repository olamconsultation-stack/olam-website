**Badge / Tag / Accordion** — OLAM's small feedback & disclosure pieces.

```jsx
<Badge tone="accent">Honest Qualification</Badge>
<Badge tone="green" dot>This is for you if</Badge>
<Badge tone="danger" dot>This is NOT for you if</Badge>

<Tag variant="soft">Ultherapy</Tag>
<Tag variant="glass">OUR SANCTUARY</Tag>

<Accordion items={[
  { q: "Does it hurt?", a: "We apply topical numbing before your session…" },
  { q: "When will I see results?", a: "Initial firmness is often visible at weeks 4–6…" },
]} />
```

- **Badge**: section eyebrow / qualifier marker. `dot` adds a leading status dot. Always tracked-uppercase.
- **Tag**: pill chip; `glass` is for overlay chips on photos.
- **Accordion**: FAQ disclosure; `single` (default) keeps one panel open. Questions render in Sora.
