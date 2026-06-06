**IconButton** — circular Material-Symbols button; use for compact glyph actions like the filled-blue chevron pills in feature/benefit rows.

```jsx
<IconButton icon="chevron_right" variant="accent" label="Next" />
```

- Requires Material Symbols Outlined to be loaded on the page.
- **variant**: `accent` (blue, default) · `primary` (green) · `ink` (near-black) · `outline`.
- **size**: diameter in px (default 40). Keep ≥40px for touch targets.
