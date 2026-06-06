**ServiceCard / TestimonialCard / ResultCard** — OLAM's content cards. All share the signature cushion hover (lift −8px, scale 1.01, shadow deepens, border tints blue).

```jsx
<ServiceCard index="01" title="Loss of jawline definition">
  The first place skin laxity becomes visible. Caused by collagen depletion at the deeper SMAS layer.
</ServiceCard>

<TestimonialCard rating={5} name="Maria G." detail="Pembroke Pines · Ultherapy"
  quote="They told me honestly what to expect. By month three my jawline looked like me, 5 years ago." />

<ResultCard image="/path.jpg" tag="MID-FACE LIFT" title="Cheek volume elevation" caption="Clinical Outcome" />
```

- **ServiceCard**: numbered problem/service tile on warm fill; `accent` switches index/hover color (blue default, green optional).
- **TestimonialCard**: quote set in Sora; white fill, resting `shadow-card`.
- **ResultCard**: photo-forward, image zooms on hover; falls back to a neutral placeholder when `image` is omitted.
