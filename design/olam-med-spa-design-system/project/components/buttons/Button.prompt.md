**Button** — OLAM's pill-shaped CTA; use for any primary or secondary action. Green is primary (brand), accent blue matches the live site, secondary is an ink outline, ghost is an inline text link.

```jsx
<Button variant="primary" size="lg" href="#reserve" arrow>
  Reserve my $100 diagnostic consultation
</Button>
```

- **variant**: `primary` (green, glow shadow) · `accent` (steel blue) · `secondary` (1px ink outline → fills ink on hover) · `ghost` (accent text, used with `arrow`)
- **size**: `sm` · `md` (default) · `lg`
- **arrow**: appends the brand `→` glyph — almost always on for CTAs.
- Pass `href` to render an `<a>`. Copy should be first-person & specific ("Book my session →"), never "Submit".
