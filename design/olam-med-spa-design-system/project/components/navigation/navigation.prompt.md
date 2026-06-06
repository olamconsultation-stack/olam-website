**SiteHeader / PriceBlock** — OLAM's chrome and pricing pieces.

```jsx
<SiteHeader logoSrc="assets/logo-olam.png" phone="954.237.0930" lang="en" />

<PriceBlock range="$500 – $3,500" caption="Range per session area"
  note={<>Financing from <strong>$45/mo</strong> via CareCredit or Cherry. 12 months interest-free for qualified applicants.</>} />
```

- **SiteHeader**: sticky, translucent white + blur, hairline border. EN/ES toggle is built in; pass `onLangChange` to drive page language. `logoSrc` is relative to the page using it.
- **PriceBlock**: transparent, specific pricing — never vague. Pair with the "Real prices. *No hidden estimates.*" headline.
