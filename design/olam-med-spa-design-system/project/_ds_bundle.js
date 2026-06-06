/* @ds-bundle: {"format":3,"namespace":"OLAMMedSpaDesignSystem_e5ad93","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"ResultCard","sourcePath":"components/cards/ResultCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"PriceBlock","sourcePath":"components/navigation/PriceBlock.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"dcc3557dd8e1","components/buttons/IconButton.jsx":"8963bf032b5a","components/cards/ResultCard.jsx":"3427688b9125","components/cards/ServiceCard.jsx":"4f02a69ada82","components/cards/TestimonialCard.jsx":"10e412e12c18","components/feedback/Accordion.jsx":"910ee671990d","components/feedback/Badge.jsx":"a6c3b947e540","components/feedback/Tag.jsx":"297aadb65449","components/forms/Input.jsx":"bb479cc99f1a","components/forms/Select.jsx":"281c8d8be06d","components/forms/Textarea.jsx":"237fcb2213b4","components/navigation/PriceBlock.jsx":"dbdf5f033f1e","components/navigation/SiteHeader.jsx":"9aa81532ba83","ui_kits/website/Bottom.jsx":"01b45797e720","ui_kits/website/Chrome.jsx":"da6bedf2705a","ui_kits/website/Closing.jsx":"e470e0248c50","ui_kits/website/Middle.jsx":"79b44b93a847","ui_kits/website/Top.jsx":"ffe1917f5503","ui_kits/website/app.jsx":"00d2892ce5ed","ui_kits/website/components.jsx":"fb320692ff84"},"inlinedExternals":[],"unexposedExports":[{"name":"labelStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.OLAMMedSpaDesignSystem_e5ad93 = window.OLAMMedSpaDesignSystem_e5ad93 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM primary button system. Pill-shaped, Inter semibold,
 * cushion-eased hover. Variants: primary (green), accent (steel
 * blue, matches live site), secondary (ink outline), ghost (text + arrow).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  disabled = false,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 20px',
      fontSize: '0.8125rem'
    },
    md: {
      padding: '16px 32px',
      fontSize: '0.9375rem'
    },
    lg: {
      padding: '20px 40px',
      fontSize: '1rem'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    },
    accent: {
      background: 'var(--action-accent)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid transparent',
      boxShadow: 'none',
      padding: 0
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'all var(--dur-base) var(--ease-cushion)',
    WebkitTapHighlightColor: 'transparent',
    ...sizes[size],
    ...variants[variant],
    ...(variant === 'ghost' ? {
      padding: 0
    } : {}),
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--action-primary-hover)';else if (variant === 'accent') el.style.background = 'var(--action-accent-hover)';else if (variant === 'secondary') {
      el.style.background = 'var(--action-ink)';
      el.style.color = '#fff';
      el.style.borderColor = 'var(--action-ink)';
    } else if (variant === 'ghost') el.style.color = 'var(--blue-700)';
  };
  const hoverOut = e => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.background = variants[variant].background;
    el.style.color = variants[variant].color;
    if (variant === 'secondary') el.style.borderColor = 'var(--border-soft)';
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transition: 'transform var(--dur-base) var(--ease-cushion)'
    }
  }, "\u2192"));
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    style: base
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button using Material Symbols. Used for the
 * filled-blue chevron pills in feature rows and compact controls.
 */
function IconButton({
  icon,
  variant = 'accent',
  size = 40,
  label,
  href,
  onClick,
  style = {},
  ...rest
}) {
  const variants = {
    accent: {
      background: 'var(--action-accent)',
      color: '#fff'
    },
    primary: {
      background: 'var(--action-primary)',
      color: '#fff'
    },
    ink: {
      background: 'var(--ink-900)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-soft)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'all var(--dur-base) var(--ease-cushion)',
    ...variants[variant],
    ...style
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type: 'button'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    "aria-label": label,
    onClick: onClick,
    style: base
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: size * 0.55,
      lineHeight: 1
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/ResultCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Before/after result card. Photo with a floating uppercase tag chip,
 * zoom-on-hover image, title + caption below. Use for the results gallery.
 * If no image is supplied, renders a neutral placeholder.
 */
function ResultCard({
  image,
  tag,
  title,
  caption,
  ratio = '3 / 4',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    background: 'var(--surface-card)',
    border: `1px solid ${hover ? 'rgba(31,100,137,0.15)' : 'var(--border-hairline)'}`,
    borderRadius: 'var(--radius-brand-lg)',
    boxShadow: hover ? 'var(--shadow-cushion)' : 'var(--shadow-card)',
    transform: hover ? 'var(--lift-card)' : 'none',
    transition: 'all var(--dur-base) var(--ease-cushion)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: cardStyle
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: ratio
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-cushion)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, var(--surface-2), var(--surface-3))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-300)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.7rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "Patient photo"), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      background: 'rgba(252,249,248,0.9)',
      backdropFilter: 'blur(4px)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '0.875rem',
      color: 'var(--text-strong)'
    }
  }, title), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      color: 'var(--text-subtle)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { ResultCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ResultCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Numbered service / problem card (the "Six problems" grid). Warm
 * fill, hairline border, brand-tint corner glow, signature cushion
 * hover. Title shifts to accent on hover.
 */
function ServiceCard({
  index,
  title,
  children,
  accent = 'blue',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const accentColor = accent === 'green' ? 'var(--text-brand)' : 'var(--text-accent)';
  const glow = accent === 'green' ? 'rgba(122,181,32,0.06)' : 'rgba(75,168,200,0.06)';
  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--surface-card-muted)',
    border: `1px solid ${hover ? 'rgba(31,100,137,0.15)' : 'var(--border-hairline)'}`,
    borderRadius: 'var(--radius-brand)',
    padding: 'var(--card-pad)',
    boxShadow: hover ? 'var(--shadow-cushion)' : 'none',
    transform: hover ? 'var(--lift-card)' : 'none',
    transition: 'all var(--dur-base) var(--ease-cushion)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: cardStyle
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 96,
      height: 96,
      background: glow,
      filter: 'blur(28px)',
      borderRadius: '50%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 700,
      letterSpacing: '0.15em',
      color: accentColor,
      marginBottom: 16
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h3)',
      margin: '0 0 12px',
      color: hover ? accentColor : 'var(--text-strong)',
      transition: 'color var(--dur-base) var(--ease-cushion)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, children)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial / review card. Star rating, quote in display italic-friendly
 * body, patient attribution. White fill, soft card shadow, cushion hover.
 */
function TestimonialCard({
  quote,
  name,
  detail,
  rating = 5,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    background: 'var(--surface-card)',
    border: `1px solid ${hover ? 'rgba(31,100,137,0.15)' : 'var(--border-hairline)'}`,
    borderRadius: 'var(--radius-brand)',
    padding: 'var(--space-7)',
    boxShadow: hover ? 'var(--shadow-cushion)' : 'var(--shadow-card)',
    transform: hover ? 'var(--lift-card)' : 'none',
    transition: 'all var(--dur-base) var(--ease-cushion)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: cardStyle
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--amber-500)',
      letterSpacing: 2,
      fontSize: '0.95rem'
    },
    "aria-label": `${rating} out of 5`
  }, '★'.repeat(rating), '☆'.repeat(5 - rating)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.0625rem',
      lineHeight: 1.5,
      color: 'var(--text-body)',
      letterSpacing: '-0.01em'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.875rem',
      color: 'var(--text-strong)'
    }
  }, name), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      color: 'var(--text-subtle)'
    }
  }, detail)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FAQ accordion. Sora question, hairline top border, a "+" that
 * rotates to "×" on open, smooth height reveal. Renders a list of
 * {q, a} items; one open at a time by default.
 */
function Accordion({
  items = [],
  single = true,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(single ? -1 : []);
  const isOpen = i => single ? open === i : open.includes(i);
  const toggle = i => {
    if (single) setOpen(open === i ? -1 : i);else setOpen(open.includes(i) ? open.filter(x => x !== i) : [...open, i]);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderBottom: '1px solid var(--border-soft)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggle(i),
    "aria-expanded": isOpen(i),
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '28px 0',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-body)',
      lineHeight: 1.3
    }
  }, it.q), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '1.75rem',
      color: 'var(--text-accent)',
      lineHeight: 1,
      flexShrink: 0,
      transform: isOpen(i) ? 'rotate(45deg)' : 'rotate(0deg)',
      transition: 'transform var(--dur-base) var(--ease-cushion)'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: isOpen(i) ? '1fr' : '0fr',
      transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingBottom: 28,
      maxWidth: 640,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      lineHeight: 1.65,
      color: 'var(--text-muted)'
    }
  }, it.a))))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow / status badge. Tiny tracked-uppercase label, optional
 * leading dot. Used as section eyebrows and qualifier markers.
 */
function Badge({
  children,
  tone = 'accent',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    accent: 'var(--text-accent)',
    green: 'var(--text-brand)',
    danger: 'var(--danger-500)',
    muted: 'var(--text-subtle)'
  };
  const dotColors = {
    accent: 'var(--blue-500)',
    green: 'var(--green-500)',
    danger: 'var(--danger-500)',
    muted: 'var(--ink-300)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dotColors[tone],
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill tag / chip. Used for metadata chips, technology labels, and
 * overlay chips on imagery. Solid, soft, or outline fills.
 */
function Tag({
  children,
  variant = 'soft',
  style = {},
  ...rest
}) {
  const variants = {
    soft: {
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      border: '1px solid transparent'
    },
    green: {
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--action-accent)',
      color: '#fff',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-soft)'
    },
    glass: {
      background: 'rgba(252,249,248,0.9)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-hairline)',
      backdropFilter: 'blur(4px)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM text input. Warm white field, hairline border, 8px radius,
 * blue focus ring. Optional label + uppercase tracked label style.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--text-body)',
    background: 'var(--surface-card)',
    border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 16px',
    outline: 'none',
    boxShadow: focused ? '0 0 0 3px rgba(75,168,200,0.15)' : 'none',
    transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--action-accent)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest)));
}
const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.6875rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: 'var(--text-subtle)'
};
Object.assign(__ds_scope, { Input, labelStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM select dropdown. Custom chevron, matches Input field styling.
 * Pass options as [{value, label}] or string[].
 */
function Select({
  label,
  id,
  options = [],
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: value ? 'var(--text-body)' : 'var(--text-subtle)',
    background: 'var(--surface-card)',
    border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 40px 13px 16px',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    cursor: 'pointer',
    boxShadow: focused ? '0 0 0 3px rgba(75,168,200,0.15)' : 'none',
    transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B6B6B\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'6 9 12 15 18 9\'/></svg>")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: __ds_scope.labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--action-accent)'
    }
  }, " *")), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    onChange: onChange,
    required: required,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM multi-line textarea. Matches Input styling.
 */
function Textarea({
  label,
  id,
  placeholder,
  value,
  onChange,
  rows = 4,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    lineHeight: 1.5,
    color: 'var(--text-body)',
    background: 'var(--surface-card)',
    border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 16px',
    outline: 'none',
    resize: 'vertical',
    boxShadow: focused ? '0 0 0 3px rgba(75,168,200,0.15)' : 'none',
    transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: __ds_scope.labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--action-accent)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PriceBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Price transparency block. Big Sora range, tracked caption, and a
 * financing note. White card on warm panel.
 */
function PriceBlock({
  range = '$500 – $3,500',
  caption = 'Range per session area',
  note,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-brand)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-7)',
      minWidth: 300,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      letterSpacing: '-0.04em',
      color: 'var(--text-strong)'
    }
  }, range), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text-subtle)'
    }
  }, caption), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      maxWidth: 320,
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { PriceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PriceBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM sticky site header: logo, EN/ES language toggle, phone CTA.
 * Translucent white with backdrop blur and a hairline bottom border.
 */
function SiteHeader({
  logoSrc = 'assets/logo-olam.png',
  phone = '954.237.0930',
  lang = 'en',
  onLangChange,
  style = {},
  ...rest
}) {
  const [active, setActive] = React.useState(lang);
  const setLang = l => {
    setActive(l);
    onLangChange && onLangChange(l);
  };
  const pill = (l, txt) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(l),
    "aria-pressed": active === l,
    style: {
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      background: active === l ? 'var(--ink-900)' : 'transparent',
      color: active === l ? '#fff' : 'var(--text-subtle)',
      transition: 'all var(--dur-base) var(--ease-cushion)'
    }
  }, txt);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "OLAM Med Spa",
    style: {
      height: 38,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-2)',
      padding: 4,
      borderRadius: 'var(--radius-pill)'
    }
  }, pill('en', 'EN'), pill('es', 'ES')), /*#__PURE__*/React.createElement("a", {
    href: `tel:+1${phone.replace(/\D/g, '')}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--border-strong)',
      padding: '9px 20px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '0.875rem',
      color: 'var(--text-strong)',
      textDecoration: 'none',
      transition: 'all var(--dur-base) var(--ease-cushion)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--ink-900)';
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = 'var(--ink-900)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-strong)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    }
  }, active === 'es' ? 'Llama' : 'Call', " ", phone))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Bottom.jsx
try { (() => {
/* OLAM Website UI Kit — Bottom: Results gallery, $100 consult (dark), Pricing */
const NSB = window.OLAMMedSpaDesignSystem_e5ad93;
const {
  ResultCard,
  PriceBlock,
  Badge: Eb,
  Button: B2
} = NSB;
function Results() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Eb, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Realistic Expectations",
    es: "Expectativas Reales"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "What real results ", /*#__PURE__*/React.createElement("i", null, "look like.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "C\xF3mo se ven ", /*#__PURE__*/React.createElement("i", null, "los resultados reales."))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 28,
      marginBottom: 44
    }
  }, [['01', 'Visible firmness on the jaw and neck starting around week 4–6.', 'Firmeza visible en óvalo y cuello desde la semana 4 a 6.'], ['02', 'Clearer jawline definition progressing over 2–6 months.', 'Definición progresiva del jawline en 2 a 6 meses.'], ['03', 'Gradual collagen rebuild — change your friends notice without asking why.', 'Reconstrucción gradual de colágeno — que tus amigas notan sin saber por qué.'], ['04', 'Natural-looking — no overdone, frozen or "filtered" appearance.', 'Aspecto natural — sin exceso, congelado ni "filtrado".']].map(([n, en, es]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '0.875rem',
      color: 'var(--blue-700)',
      letterSpacing: '0.1em',
      marginTop: 2
    }
  }, n), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: en,
    es: es
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(ResultCard, {
    tag: "JAWLINE \xB7 WK 12",
    title: /*#__PURE__*/React.createElement(L, {
      en: "Jawline contour comparison",
      es: "Comparaci\xF3n de contorno"
    }),
    caption: /*#__PURE__*/React.createElement(L, {
      en: "Week 12 vs Baseline",
      es: "Semana 12 vs Inicio"
    })
  }), /*#__PURE__*/React.createElement(ResultCard, {
    tag: "MID-FACE LIFT",
    title: /*#__PURE__*/React.createElement(L, {
      en: "Cheek volume elevation",
      es: "Elevaci\xF3n de p\xF3mulos"
    }),
    caption: /*#__PURE__*/React.createElement(L, {
      en: "Clinical Outcome",
      es: "Resultado Cl\xEDnico"
    })
  }), /*#__PURE__*/React.createElement(ResultCard, {
    tag: "PROCEDURE",
    title: /*#__PURE__*/React.createElement(L, {
      en: "Ultrasound precision delivery",
      es: "Ultrasonido focalizado"
    }),
    caption: /*#__PURE__*/React.createElement(L, {
      en: "Live Session",
      es: "Sesi\xF3n en Vivo"
    })
  }), /*#__PURE__*/React.createElement(ResultCard, {
    tag: "COLLAGEN",
    title: /*#__PURE__*/React.createElement(L, {
      en: "Natural jawline contour",
      es: "Contorno natural"
    }),
    caption: /*#__PURE__*/React.createElement(L, {
      en: "Serene Radiance",
      es: "Radiaci\xF3n Serena"
    })
  }))));
}
function Consult() {
  const item = (n, en, es, sen, ses) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      paddingBottom: 28,
      borderBottom: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.6rem',
      color: 'var(--blue-400)',
      opacity: 0.7
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '1.0625rem',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: en,
    es: es
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: sen,
    es: ses
  }))));
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--ink-900)',
      color: '#fff',
      borderTop: '1px solid var(--border-on-dark)',
      borderBottom: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--blue-400)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "The $100 Diagnostic Consultation",
    es: "La Consulta Diagn\xF3stica de $100"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h2)',
      lineHeight: 1.05,
      margin: '18px 0 28px'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "A medical session. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontStyle: 'italic',
        color: 'var(--blue-400)'
      }
    }, "Not a sales pitch.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Una sesi\xF3n m\xE9dica. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontStyle: 'italic',
        color: 'var(--blue-400)'
      }
    }, "No un pitch de ventas."))
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "$100 is what we charge to do the work properly: 3D skin analysis with medical ultrasound, a written treatment plan reviewed by our Medical Director, exact pricing in writing, and a realistic projection of your results.",
    es: "$100 es lo que cobramos por hacer el trabajo bien: an\xE1lisis 3D con ultrasonido, un plan escrito revisado por nuestro Director M\xE9dico, precios exactos por escrito y una proyecci\xF3n realista."
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 36px',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Move forward within 30 days and your $100 is credited to treatment. If it's not right for you, the plan is yours to keep.",
    es: "Si avanzas en 30 d\xEDas, tus $100 se acreditan al tratamiento. Si no es para ti, el plan es tuyo."
  })), /*#__PURE__*/React.createElement(B2, {
    variant: "accent",
    size: "lg",
    href: "#reserve",
    arrow: true
  }, /*#__PURE__*/React.createElement(L, {
    en: "Reserve my consultation",
    es: "Reservar mi consulta"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 72,
      borderLeft: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-label)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--blue-400)',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "What your consultation includes",
    es: "Qu\xE9 incluye tu consulta"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, item('01', '3D skin analysis with medical ultrasound', 'Análisis 3D con ultrasonido médico', 'An objective reading of your collagen, laxity, and structural condition — not a visual guess.', 'Lectura objetiva de tu colágeno, flacidez y estructura — sin adivinanzas.'), item('02', 'Personalized treatment plan, in writing', 'Plan personalizado por escrito', 'Technology, area, sessions and sequence — signed off by our Medical Director.', 'Tecnología, área y secuencia — firmado por el Director Médico.'), item('03', 'Exact price for your case, in writing', 'Precio exacto por escrito', 'Before any decision. No upsell on the day of treatment.', 'Antes de decidir. Sin ventas forzadas el día del tratamiento.'), item('04', 'Results projection at months 2, 4 and 6', 'Proyección a los meses 2, 4 y 6', 'A realistic timeline so you know what to expect — and what not to.', 'Una línea de tiempo realista para saber qué esperar — y qué no.')))));
}
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--surface-warm)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eb, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Price Transparency",
    es: "Transparencia de Precios"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Real prices. ", /*#__PURE__*/React.createElement("i", null, "No hidden estimates.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Precios reales. ", /*#__PURE__*/React.createElement("i", null, "Sin estimados escondidos."))
  }))), /*#__PURE__*/React.createElement(PriceBlock, {
    range: "$500 \u2013 $3,500",
    caption: /*#__PURE__*/React.createElement(L, {
      en: "Range per session area",
      es: "Rango por zona de sesi\xF3n"
    }),
    note: /*#__PURE__*/React.createElement(L, {
      en: /*#__PURE__*/React.createElement(React.Fragment, null, "Financing from ", /*#__PURE__*/React.createElement("strong", null, "$45/mo"), " via CareCredit or Cherry. 12 months interest-free for qualified applicants."),
      es: /*#__PURE__*/React.createElement(React.Fragment, null, "Financiamiento desde ", /*#__PURE__*/React.createElement("strong", null, "$45/mes"), " v\xEDa CareCredit o Cherry. 12 meses sin inter\xE9s.")
    })
  })));
}
Object.assign(window, {
  Results,
  Consult,
  Pricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* OLAM Website UI Kit — Chrome: header + footer + shared helpers */
const NS = window.OLAMMedSpaDesignSystem_e5ad93;
const {
  Button
} = NS;
function L({
  en,
  es
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "only-en"
  }, en), /*#__PURE__*/React.createElement("span", {
    className: "only-es"
  }, es));
}
function Header({
  lang,
  setLang
}) {
  const pill = (l, txt) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(l),
    "aria-pressed": lang === l,
    style: {
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      background: lang === l ? 'var(--ink-900)' : 'transparent',
      color: lang === l ? '#fff' : 'var(--text-subtle)',
      transition: 'all var(--dur-base) var(--ease-cushion)'
    }
  }, txt);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 14,
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-olam.png",
    alt: "OLAM Med Spa",
    style: {
      height: 40,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-2)',
      padding: 4,
      borderRadius: 'var(--radius-pill)'
    }
  }, pill('en', 'EN'), pill('es', 'ES')), /*#__PURE__*/React.createElement("a", {
    href: "tel:+19542370930",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--border-strong)',
      padding: '9px 20px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '0.875rem',
      color: 'var(--text-strong)',
      textDecoration: 'none',
      transition: 'all var(--dur-base) var(--ease-cushion)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--ink-900)';
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = 'var(--ink-900)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-strong)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Call 954.237.0930",
    es: "Llama 954.237.0930"
  })))));
}
function Footer() {
  const col = (heading, links) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.625rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text-on-dark-muted)'
    }
  }, heading), links.map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      fontSize: '0.875rem',
      color: 'rgba(255,255,255,0.65)',
      textDecoration: 'none'
    }
  }, t)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff',
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-olam-white.png",
    alt: "OLAM Med Spa",
    style: {
      height: 40,
      width: 'auto',
      objectFit: 'contain',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Medical aesthetics in Pembroke Pines, FL. Board Certified Medical Director supervision. Natural results without surgery.",
    es: "Est\xE9tica m\xE9dica en Pembroke Pines, FL. Supervisi\xF3n de Medical Director Board Certified. Resultados naturales sin cirug\xEDa."
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-500)',
      letterSpacing: 2
    }
  }, "\u2605\u2605\u2605\u2605\u2605 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: '0.8rem',
      letterSpacing: 0
    }
  }, "5.0 \xB7 395 Google reviews"))), col('Treatments', ['Skin Tightening', 'Ultherapy', 'RF Microneedling', 'Agnes RF', 'Injectables']), col('Clinic', ['Medical Leadership', 'Real Results', 'Pricing', 'FAQ', 'Book Consultation']), col('Visit', ['Pembroke Pines, FL', '954.237.0930', 'Mon–Sat 9–6', 'Financing'])), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'rgba(255,255,255,0.45)'
    }
  }, "\xA9 2026 OLAM Med Spa. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'rgba(255,255,255,0.45)'
    }
  }, "Privacy \xB7 Terms \xB7 Medical Disclaimer")));
}
Object.assign(window, {
  L,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Closing.jsx
try { (() => {
/* OLAM Website UI Kit — Closing: FAQ + Reservation form */
const NSC = window.OLAMMedSpaDesignSystem_e5ad93;
const {
  Accordion,
  Input,
  Select,
  Textarea,
  Button: B3,
  Badge: Eb3
} = NSC;
function FAQ() {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const items = [{
    en: ['Does it hurt?', 'For most technologies (Ultherapy, RF Microneedling, Agnes RF) we apply topical numbing before your session. Patients describe warmth or a quick tingling, not sharp pain. You can work and socialize the same day.'],
    es: ['¿Duele?', 'Para la mayoría de tecnologías aplicamos anestesia tópica. Las pacientes describen calor o cosquilleo breve, no dolor agudo. Puedes trabajar y salir el mismo día.']
  }, {
    en: ['When will I see results?', 'Initial firmness is often visible between weeks 4–6. Full collagen rebuild progresses over 2–6 months. A real biological process, not a filter — which is why the result lasts.'],
    es: ['¿En cuánto tiempo veré resultados?', 'La firmeza inicial suele verse entre las semanas 4 y 6. La reconstrucción completa avanza entre 2 y 6 meses. Es un proceso biológico real, no un filtro.']
  }, {
    en: ['Why does this cost more than some chain med spas?', 'Your plan is reviewed by a Board Certified Medical Director, every procedure is performed by licensed professionals who don\'t rotate every six months, and you receive a complete follow-up protocol. You\'re paying for medical supervision, not a room with a machine.'],
    es: ['¿Por qué cuesta más que algunas cadenas?', 'Tu plan lo revisa un Medical Director Board Certified, cada procedimiento lo hacen profesionales licenciados que no rotan, y recibes seguimiento completo. Pagas por supervisión médica, no por un cuarto con una máquina.']
  }, {
    en: ['What if the treatment isn\'t right for me?', 'Your Diagnostic Consultation is designed to find that out before we recommend anything. If skin tightening isn\'t right for you, we\'ll tell you clearly — and you keep the written analysis with no pressure to book.'],
    es: ['¿Y si no es el adecuado para mí?', 'Tu Consulta Diagnóstica está diseñada para averiguarlo antes de recomendar nada. Si no es lo correcto, te lo decimos con claridad — y te llevas el análisis sin presión.']
  }, {
    en: ['It\'s my first time — is it safe?', 'Every plan is supervised by our Board Certified Medical Director. We only use FDA-approved technology, with a complete follow-up protocol and direct contact if anything feels off.'],
    es: ['Es mi primera vez — ¿es seguro?', 'Cada plan está supervisado por nuestro Medical Director Board Certified. Usamos solo tecnología aprobada por la FDA, con seguimiento completo y contacto directo.']
  }].map(it => ({
    q: it[lang][0],
    a: it[lang][1]
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--surface-panel)'
    },
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap-narrow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Eb3, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Common Doubts",
    es: "Dudas Comunes"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Questions ", /*#__PURE__*/React.createElement("i", null, "real patients"), " ask us."),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Preguntas que ", /*#__PURE__*/React.createElement("i", null, "pacientes reales"), " nos hacen.")
  }))), /*#__PURE__*/React.createElement(Accordion, {
    items: items
  })));
}
function Reserve() {
  const benefit = (en, es) => /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--blue-400)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      marginTop: 1
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(L, {
    en: en,
    es: es
  })));
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--ink-900)',
      position: 'relative',
      overflow: 'hidden'
    },
    id: "reserve"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 3fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--blue-400)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Reserve Your Consultation",
    es: "Reserva Tu Consulta"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h2)',
      lineHeight: 1.05,
      color: '#fff',
      margin: '18px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "One honest conversation.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontStyle: 'italic',
        opacity: 0.6
      }
    }, "Then you decide.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Una conversaci\xF3n honesta.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 300,
        fontStyle: 'italic',
        opacity: 0.6
      }
    }, "T\xFA decides despu\xE9s."))
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 28px',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "We'll contact you within 5 minutes during business hours to confirm your preferred time.",
    es: "Te contactaremos en 5 minutos en horario laboral para confirmar tu horario."
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, benefit('$100 credited to your first treatment within 30 days', '$100 acreditables a tu primer tratamiento en 30 días'), benefit('Written treatment plan you keep, regardless', 'Plan de tratamiento por escrito, pase lo que pase'), benefit('Financing options from $45/mo via CareCredit or Cherry', 'Financiamiento desde $45/mes vía CareCredit o Cherry'), benefit('Board Certified Medical Director supervision', 'Supervisión de Medical Director Board Certified'))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-brand-lg)',
      padding: 36,
      boxShadow: 'var(--shadow-2xl)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      e.target.reset();
      alert('Thank you — we\'ll call you within 5 minutes during business hours.');
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "First name",
      es: "Nombre"
    }),
    id: "fn",
    placeholder: "Jane",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "Last name",
      es: "Apellido"
    }),
    id: "ln",
    placeholder: "Doe",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "Phone",
      es: "Tel\xE9fono"
    }),
    id: "ph",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    id: "em",
    type: "email",
    placeholder: "you@email.com",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "Primary concern",
      es: "Preocupaci\xF3n principal"
    }),
    id: "cn",
    placeholder: "Select an area",
    options: ['Jawline & neck', 'Cheeks & mid-face', 'Crepey skin / chest', 'Brow & hooded eyes', 'Post-weight-loss laxity', 'Not sure — help me decide']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "Anything else we should know?",
      es: "\xBFAlgo m\xE1s que debamos saber?"
    }),
    id: "nt",
    rows: 3,
    placeholder: "Optional \u2014 tell us about your goals."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(B3, {
    variant: "accent",
    size: "lg",
    type: "submit",
    arrow: true,
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Reserve my $100 consultation",
    es: "Reservar mi consulta de $100"
  })))))));
}
Object.assign(window, {
  FAQ,
  Reserve
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Middle.jsx
try { (() => {
/* OLAM Website UI Kit — Middle: Six problems + Technologies tabs */
const {
  ServiceCard,
  Tag: Chip,
  Badge: Eyebrow
} = window.OLAMMedSpaDesignSystem_e5ad93;
const PROBLEMS = [{
  en: ['Loss of jawline definition', 'The first place skin laxity becomes visible. Caused by collagen depletion at the deeper SMAS layer.'],
  es: ['Pérdida de definición del óvalo facial', 'El primer lugar donde la flacidez se nota. Causado por pérdida de colágeno en la capa SMAS.']
}, {
  en: ['Sagging neck and "turkey neck"', 'Loss of tone in the platysma and overlying skin. Often visible in photos before the mirror catches it.'],
  es: ['Cuello caído y "papada de pavo"', 'Pérdida de tono en el platisma. Visible en fotos antes que en el espejo.']
}, {
  en: ['Drooping cheeks and mid-face', 'Volume migration and structural descent. The face shifts from heart-shaped to more square.'],
  es: ['Pómulos y tercio medio descendidos', 'Migración de volumen y descenso estructural. El rostro pasa de forma de corazón a cuadrada.']
}, {
  en: ['Crepey skin on neck and chest', 'Surface texture loss, often combined with sun damage. A different protocol than facial laxity.'],
  es: ['Piel crepé en cuello y escote', 'Pérdida de textura superficial, a menudo con daño solar. Protocolo diferente a la laxitud facial.']
}, {
  en: ['Post-weight-loss laxity', "Skin that didn't retract after significant weight change. Requires deeper energy to remodel collagen."],
  es: ['Flacidez post pérdida de peso', 'Piel que no se retrajo tras un cambio de peso. Requiere energía profunda para remodelar el colágeno.']
}, {
  en: ['Brow descent and hooded eyes', 'The forehead and brow drop subtly with time, making the upper face look heavier. Treatable non-surgically.'],
  es: ['Caída de cejas y párpados pesados', 'La frente y las cejas caen con el tiempo, dando peso al rostro. Tratable sin cirugía.']
}];
function Treat() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "What we treat",
    es: "Qu\xE9 tratamos"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Six problems. ", /*#__PURE__*/React.createElement("i", null, "One diagnostic path.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Seis problemas. ", /*#__PURE__*/React.createElement("i", null, "Un camino diagn\xF3stico."))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, PROBLEMS.map((p, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: i,
    index: String(i + 1).padStart(2, '0'),
    title: /*#__PURE__*/React.createElement(L, {
      en: p.en[0],
      es: p.es[0]
    })
  }, /*#__PURE__*/React.createElement(L, {
    en: p.en[1],
    es: p.es[1]
  }))))));
}
const TECH = {
  ultherapy: {
    name: 'Ultherapy®',
    kicker: {
      en: 'Deep SMAS Ultrasound Lifting',
      es: 'Lifting de Ultrasonido SMAS'
    },
    body: {
      en: "Micro-focused ultrasound targets the SMAS layer — the exact muscle layer addressed in surgical facelifts — stimulating structural collagen without breaking the skin's surface.",
      es: 'El ultrasonido microfocalizado se dirige a la capa SMAS, la misma que se trata en un lifting quirúrgico, estimulando colágeno sin dañar la superficie.'
    },
    points: [{
      en: 'Excellent for jawline sagging and brow lifting',
      es: 'Excelente para flacidez de mandíbula y cejas'
    }, {
      en: 'Single-session results that improve over 2–6 months',
      es: 'Resultados en una sesión que mejoran de 2 a 6 meses'
    }],
    meta: [['Target', 'Deep SMAS Layer'], ['Duration', '60–90 Minutes'], ['Downtime', 'Zero Days'], ['Anesthesia', 'Topical Numbing']]
  },
  rf: {
    name: 'RF Microneedling',
    kicker: {
      en: 'Radiofrequency & Microneedling',
      es: 'Radiofrecuencia y Microagujas'
    },
    body: {
      en: 'Synergistic microneedling and dynamic radiofrequency delivered at precise depths, remodeling surface layers to tighten crepey skin and restore elastic fibers.',
      es: 'Microagujas y radiofrecuencia dinámica a profundidades precisas, remodelando capas superficiales para tensar piel crepé y restaurar fibras elásticas.'
    },
    points: [{
      en: 'Superb for neck skin texture and fine lines',
      es: 'Magnífico para textura del cuello y líneas finas'
    }, {
      en: 'Restores clinical density to aging skin',
      es: 'Restaura densidad clínica en piel envejecida'
    }],
    meta: [['Target', 'Dermis & Epidermis'], ['Duration', '45–60 Minutes'], ['Downtime', '1–2 Days Redness'], ['Anesthesia', 'Topical Numbing']]
  },
  agnes: {
    name: 'Agnes RF™',
    kicker: {
      en: 'Targeted Precision Sculpting',
      es: 'Escultura de Precisión'
    },
    body: {
      en: 'Precision micro-insulation technology melts targeted pockets of fat and tightens saggy areas simultaneously. Ideal for under-eye bags and heavy jowls.',
      es: 'Tecnología de microaislamiento que derrite grasa específica y tensa zonas caídas a la vez. Ideal para bolsas y papada.'
    },
    points: [{
      en: 'Pinpoint sculpting for jaw definition & eye bags',
      es: 'Escultura de precisión para mandíbula y bolsas'
    }, {
      en: 'Permanent fat cell destruction in treated zones',
      es: 'Destrucción permanente de grasa en zonas tratadas'
    }],
    meta: [['Target', 'Subcutaneous Fat & SMAS'], ['Duration', '30–45 Minutes'], ['Downtime', '2–3 Days Swelling'], ['Anesthesia', 'Local / Topical']]
  }
};
function Technologies() {
  const [tab, setTab] = React.useState('ultherapy');
  const t = TECH[tab];
  const tabBtn = (id, label) => {
    const on = tab === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setTab(id),
      style: {
        padding: '12px 24px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: `1px solid ${on ? 'var(--blue-700)' : 'var(--border-soft)'}`,
        background: on ? 'var(--blue-700)' : 'transparent',
        color: on ? '#fff' : 'var(--text-subtle)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'all var(--dur-base) var(--ease-cushion)'
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "The category, not a single protocol",
    es: "La categor\xEDa, no un solo protocolo"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Not one treatment. ", /*#__PURE__*/React.createElement("i", null, "The right treatment"), " for your skin."),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "No un tratamiento. ", /*#__PURE__*/React.createElement("i", null, "El tratamiento correcto"), " para tu piel.")
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Skin tightening isn't a single machine. It's a category. The technology that works for your neck may be the wrong answer for your jawline.",
    es: "La firmeza no es una sola m\xE1quina. Es una categor\xEDa. Lo que funciona para tu cuello puede ser incorrecto para tu mand\xEDbula."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      borderBottom: '1px solid var(--border-hairline)',
      paddingBottom: 24,
      marginBottom: 40
    }
  }, tabBtn('ultherapy', 'Ultherapy'), tabBtn('rf', 'RF Microneedling'), tabBtn('agnes', 'Agnes RF')), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-brand-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 40,
      display: 'grid',
      gridTemplateColumns: '3fr 2fr',
      gap: 36,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      color: 'var(--blue-700)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: t.kicker.en,
    es: t.kicker.es
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.875rem',
      margin: '12px 0 16px',
      color: 'var(--text-strong)'
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: t.body.en,
    es: t.body.es
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, t.points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--blue-700)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(L, {
    en: p.en,
    es: p.es
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-warm)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-brand)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.7rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-strong)',
      margin: '0 0 16px',
      paddingBottom: 12,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, "Clinical Overview"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, t.meta.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontSize: '0.625rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-subtle)'
    }
  }, k), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '0.8125rem',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.6rem',
      lineHeight: 1.3,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Which one is right for you is determined in your Diagnostic Consultation with 3D analysis \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "not by Google, not by guessing, and not by us trying to upsell you.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Cu\xE1l es la correcta se decide en tu Consulta Diagn\xF3stica con an\xE1lisis 3D \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "no por Google, no adivinando, y no por nosotros intentando venderte m\xE1s."))
  })))));
}
Object.assign(window, {
  Treat,
  Technologies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Middle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Top.jsx
try { (() => {
/* OLAM Website UI Kit — Top: Hero, Qualification, Medical Leadership */
const {
  Badge,
  Button: Btn
} = window.OLAMMedSpaDesignSystem_e5ad93;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #fff, var(--surface-warm))',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-10%',
      right: '-5%',
      width: '45%',
      height: '60%',
      background: 'var(--blue-100)',
      filter: 'blur(120px)',
      borderRadius: '50%',
      opacity: 0.7,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-10%',
      left: '-8%',
      width: '35%',
      height: '40%',
      background: 'var(--green-100)',
      filter: 'blur(110px)',
      borderRadius: '50%',
      opacity: 0.6,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Non-Surgical Skin Tightening & Lifting",
    es: "Firmeza y Lifting Sin Cirug\xEDa"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h1)',
      lineHeight: 1.04,
      letterSpacing: 'var(--ls-display)',
      margin: '0 0 22px',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Pembroke Pines women 40+: tighten and lift your skin ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "without surgery.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Mujeres de Pembroke Pines 40+: tensa y levanta tu piel ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "sin cirug\xEDa."))
  })), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: 460,
      margin: '0 0 24px'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Firmer, lifted skin in 60\u201390 days \u2014 with a plan written before you decide. 15,000+ aesthetic procedures. Featured in Forbes & Univisi\xF3n.",
    es: "Piel m\xE1s firme y levantada en 60 a 90 d\xEDas \u2014 con un plan escrito antes de que decidas. M\xE1s de 15,000 procedimientos."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-500)',
      letterSpacing: 1
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "5.0"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--ink-300)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Google \u2014 395 reviews",
    es: "Google \u2014 395 rese\xF1as"
  }))), /*#__PURE__*/React.createElement(Btn, {
    variant: "accent",
    size: "lg",
    href: "#reserve",
    arrow: true
  }, /*#__PURE__*/React.createElement(L, {
    en: "Reserve my $100 diagnostic consultation",
    es: "Reservar mi consulta de $100"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      fontSize: '0.6875rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(L, {
    en: "$100 credited to treatment",
    es: "Consulta acreditable"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)'
    }
  }, "|"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(L, {
    en: "Financing from $45/mo",
    es: "Financiamiento desde $45/mes"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-2xl)',
      aspectRatio: '4 / 5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      width: '100%',
      height: '100%'
    }
  }, "Hero photo \u2014 luxury", /*#__PURE__*/React.createElement("br", null), "med-spa atmosphere"))));
}
function QualCard({
  tone,
  heading,
  items
}) {
  const isPos = tone === 'pos';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-card-muted)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-brand)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 90,
      height: 90,
      background: isPos ? 'rgba(122,181,32,0.07)' : 'rgba(192,57,43,0.06)',
      filter: 'blur(26px)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: isPos ? 'green' : 'danger',
    dot: true,
    style: {
      marginBottom: 22,
      position: 'relative'
    }
  }, heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      position: 'relative'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: isPos ? 'var(--green-500)' : 'var(--danger-500)',
      fontWeight: 700
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, it)))));
}
function Qualification() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Honest Qualification",
    es: "Calificaci\xF3n Honesta"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Is this", /*#__PURE__*/React.createElement("br", null), "for you?"),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "\xBFEsto es", /*#__PURE__*/React.createElement("br", null), "para ti?")
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "We'd rather lose a booking than take a patient we can't help. Here's the honest filter.",
    es: "Preferimos perder una cita que aceptar a alguien a quien no podemos ayudar. Aqu\xED el filtro honesto."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(QualCard, {
    tone: "pos",
    heading: /*#__PURE__*/React.createElement(L, {
      en: "This is for you if",
      es: "S\xED es para ti si"
    }),
    items: [/*#__PURE__*/React.createElement(L, {
      en: "You see early loss of firmness along your jawline, neck or cheeks.",
      es: "Notas p\xE9rdida de firmeza en el \xF3valo facial, cuello o p\xF3mulos."
    }), /*#__PURE__*/React.createElement(L, {
      en: "You're 35\u201365 and want to act before it becomes surgical.",
      es: "Tienes entre 35 y 65 y quieres actuar antes de una cirug\xEDa."
    }), /*#__PURE__*/React.createElement(L, {
      en: "You want natural results \u2014 like yourself, 5 years ago.",
      es: "Buscas un resultado natural \u2014 como t\xFA, cinco a\xF1os atr\xE1s."
    })]
  }), /*#__PURE__*/React.createElement(QualCard, {
    tone: "neg",
    heading: /*#__PURE__*/React.createElement(L, {
      en: "This is NOT for you if",
      es: "NO es para ti si"
    }),
    items: [/*#__PURE__*/React.createElement(L, {
      en: "You want a dramatic, Instagram-filter look.",
      es: "Quieres un look dram\xE1tico tipo filtro de Instagram."
    }), /*#__PURE__*/React.createElement(L, {
      en: "You expect a single session to fix everything overnight.",
      es: "Esperas que una sola sesi\xF3n lo resuelva todo en un d\xEDa."
    })]
  }))));
}
function Leadership() {
  const row = txt => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 0',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--blue-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: '#fff',
      fontSize: 18
    }
  }, "chevron_right")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      color: 'var(--text-strong)'
    }
  }, txt));
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--surface-warm)',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Medical Leadership",
    es: "Liderazgo M\xE9dico"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Collective expertise. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "Not a personality.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Excelencia colectiva. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "No una personalidad."))
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      color: 'var(--text-muted)',
      lineHeight: 1.65,
      fontSize: 'var(--text-lead)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Every OLAM treatment plan is personally reviewed and supervised by our ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)'
      }
    }, "Board Certified Medical Director"), ", with over 20 years of experience in aesthetic medicine."),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Cada plan de tratamiento lo revisa y supervisa personalmente nuestro ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)'
      }
    }, "Medical Director Board Certified"), ", con m\xE1s de 20 a\xF1os de experiencia.")
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      lineHeight: 1.65,
      fontSize: 'var(--text-lead)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "We've performed ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)'
      }
    }, "15,000+ aesthetic procedures"), " in the last five years. This isn't a rotating-staff franchise \u2014 it's a medical institution."),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Hemos realizado ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)'
      }
    }, "m\xE1s de 15,000 procedimientos"), " en los \xFAltimos cinco a\xF1os. Somos una instituci\xF3n m\xE9dica.")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      minHeight: 460,
      boxShadow: 'var(--shadow-2xl)',
      border: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, "OLAM team photo"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, #fff 8%, rgba(255,255,255,0.82) 45%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 40px 32px'
    }
  }, row(/*#__PURE__*/React.createElement(L, {
    en: "Supervised.",
    es: "Supervisado."
  })), row(/*#__PURE__*/React.createElement(L, {
    en: "Licensed.",
    es: "Licenciado."
  })), row(/*#__PURE__*/React.createElement(L, {
    en: "Accountable.",
    es: "Responsable."
  }))))));
}
Object.assign(window, {
  Hero,
  Qualification,
  Leadership
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Top.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* OLAM Website UI Kit — app: assembles sections + language state */
function App() {
  const [lang, setLangState] = React.useState('en');
  const setLang = l => {
    document.documentElement.setAttribute('data-lang', l);
    setLangState(l);
  };
  React.useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);
  return /*#__PURE__*/React.createElement("div", {
    key: lang
  }, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Qualification, null), /*#__PURE__*/React.createElement(Leadership, null), /*#__PURE__*/React.createElement(Treat, null), /*#__PURE__*/React.createElement(Technologies, null), /*#__PURE__*/React.createElement(Results, null), /*#__PURE__*/React.createElement(Consult, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Reserve, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
/* OLAM Website UI Kit — self-contained component primitives.
   Mirrors the published design-system components (same API & namespace)
   so this kit renders standalone, without the compiled _ds_bundle.js. */
(function () {
  const R = React;
  function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    arrow = false,
    disabled = false,
    onClick,
    type = 'button',
    style = {},
    ...rest
  }) {
    const sizes = {
      sm: {
        padding: '10px 20px',
        fontSize: '0.8125rem'
      },
      md: {
        padding: '16px 32px',
        fontSize: '0.9375rem'
      },
      lg: {
        padding: '20px 40px',
        fontSize: '1rem'
      }
    };
    const variants = {
      primary: {
        background: 'var(--action-primary)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-brand)'
      },
      accent: {
        background: 'var(--action-accent)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-accent)'
      },
      secondary: {
        background: 'transparent',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-soft)',
        boxShadow: 'none'
      },
      ghost: {
        background: 'transparent',
        color: 'var(--text-accent)',
        border: '1px solid transparent',
        boxShadow: 'none'
      }
    };
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'all var(--dur-base) var(--ease-cushion)',
      ...sizes[size],
      ...variants[variant],
      ...(variant === 'ghost' ? {
        padding: 0
      } : {}),
      ...style
    };
    const hoverIn = e => {
      if (disabled) return;
      const el = e.currentTarget;
      if (variant === 'primary') el.style.background = 'var(--action-primary-hover)';else if (variant === 'accent') el.style.background = 'var(--action-accent-hover)';else if (variant === 'secondary') {
        el.style.background = 'var(--action-ink)';
        el.style.color = '#fff';
        el.style.borderColor = 'var(--action-ink)';
      } else if (variant === 'ghost') el.style.color = 'var(--blue-700)';
    };
    const hoverOut = e => {
      if (disabled) return;
      const el = e.currentTarget;
      el.style.background = variants[variant].background;
      el.style.color = variants[variant].color;
      if (variant === 'secondary') el.style.borderColor = 'var(--border-soft)';
    };
    const content = R.createElement(R.Fragment, null, children, arrow && R.createElement('span', {
      'aria-hidden': 'true'
    }, '→'));
    const Tag = href ? 'a' : 'button';
    const tagProps = href ? {
      href
    } : {
      type,
      disabled
    };
    return R.createElement(Tag, {
      ...tagProps,
      onClick,
      onMouseEnter: hoverIn,
      onMouseLeave: hoverOut,
      style: base,
      ...rest
    }, content);
  }
  function IconButton({
    icon,
    variant = 'accent',
    size = 40,
    label,
    href,
    onClick,
    style = {},
    ...rest
  }) {
    const variants = {
      accent: {
        background: 'var(--action-accent)',
        color: '#fff'
      },
      primary: {
        background: 'var(--action-primary)',
        color: '#fff'
      },
      ink: {
        background: 'var(--ink-900)',
        color: '#fff'
      },
      outline: {
        background: 'transparent',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-soft)'
      }
    };
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      cursor: 'pointer',
      flexShrink: 0,
      transition: 'all var(--dur-base) var(--ease-cushion)',
      ...variants[variant],
      ...style
    };
    const Tag = href ? 'a' : 'button';
    const tagProps = href ? {
      href
    } : {
      type: 'button'
    };
    return R.createElement(Tag, {
      ...tagProps,
      'aria-label': label,
      onClick,
      style: base,
      ...rest
    }, R.createElement('span', {
      className: 'material-symbols-outlined',
      style: {
        fontSize: size * 0.55,
        lineHeight: 1
      }
    }, icon));
  }
  function Badge({
    children,
    tone = 'accent',
    dot = false,
    style = {},
    ...rest
  }) {
    const tones = {
      accent: 'var(--text-accent)',
      green: 'var(--text-brand)',
      danger: 'var(--danger-500)',
      muted: 'var(--text-subtle)'
    };
    const dotColors = {
      accent: 'var(--blue-500)',
      green: 'var(--green-500)',
      danger: 'var(--danger-500)',
      muted: 'var(--ink-300)'
    };
    return R.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-label)',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-label)',
        color: tones[tone],
        ...style
      },
      ...rest
    }, dot && R.createElement('span', {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: dotColors[tone],
        flexShrink: 0
      }
    }), children);
  }
  function Tag({
    children,
    variant = 'soft',
    style = {},
    ...rest
  }) {
    const variants = {
      soft: {
        background: 'var(--blue-100)',
        color: 'var(--blue-700)',
        border: '1px solid transparent'
      },
      green: {
        background: 'var(--green-100)',
        color: 'var(--green-700)',
        border: '1px solid transparent'
      },
      solid: {
        background: 'var(--action-accent)',
        color: '#fff',
        border: '1px solid transparent'
      },
      outline: {
        background: 'transparent',
        color: 'var(--text-body)',
        border: '1px solid var(--border-soft)'
      },
      glass: {
        background: 'rgba(252,249,248,0.9)',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-hairline)',
        backdropFilter: 'blur(4px)'
      }
    };
    return R.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-body)',
        fontSize: '0.625rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        ...variants[variant],
        ...style
      },
      ...rest
    }, children);
  }
  function ServiceCard({
    index,
    title,
    children,
    accent = 'blue',
    style = {},
    ...rest
  }) {
    const [hover, setHover] = R.useState(false);
    const accentColor = accent === 'green' ? 'var(--text-brand)' : 'var(--text-accent)';
    const glow = accent === 'green' ? 'rgba(122,181,32,0.06)' : 'rgba(75,168,200,0.06)';
    const cardStyle = {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-card-muted)',
      border: `1px solid ${hover ? 'rgba(31,100,137,0.15)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-brand)',
      padding: 'var(--card-pad)',
      boxShadow: hover ? 'var(--shadow-cushion)' : 'none',
      transform: hover ? 'var(--lift-card)' : 'none',
      transition: 'all var(--dur-base) var(--ease-cushion)',
      ...style
    };
    return R.createElement('div', {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: cardStyle,
      ...rest
    }, R.createElement('div', {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 96,
        height: 96,
        background: glow,
        filter: 'blur(28px)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }
    }), R.createElement('div', {
      style: {
        position: 'relative'
      }
    }, index != null && R.createElement('span', {
      style: {
        display: 'block',
        fontFamily: 'var(--font-body)',
        fontSize: '0.625rem',
        fontWeight: 700,
        letterSpacing: '0.15em',
        color: accentColor,
        marginBottom: 16
      }
    }, index), R.createElement('h3', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'var(--text-h3)',
        margin: '0 0 12px',
        color: hover ? accentColor : 'var(--text-strong)',
        transition: 'color var(--dur-base) var(--ease-cushion)'
      }
    }, title), children && R.createElement('p', {
      style: {
        margin: 0,
        fontSize: 'var(--text-sm)',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, children)));
  }
  function TestimonialCard({
    quote,
    name,
    detail,
    rating = 5,
    style = {},
    ...rest
  }) {
    const [hover, setHover] = R.useState(false);
    const cardStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      background: 'var(--surface-card)',
      border: `1px solid ${hover ? 'rgba(31,100,137,0.15)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-brand)',
      padding: 'var(--space-7)',
      boxShadow: hover ? 'var(--shadow-cushion)' : 'var(--shadow-card)',
      transform: hover ? 'var(--lift-card)' : 'none',
      transition: 'all var(--dur-base) var(--ease-cushion)',
      ...style
    };
    return R.createElement('div', {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: cardStyle,
      ...rest
    }, R.createElement('div', {
      style: {
        color: 'var(--amber-500)',
        letterSpacing: 2,
        fontSize: '0.95rem'
      }
    }, '★'.repeat(rating) + '☆'.repeat(5 - rating)), R.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: '1.0625rem',
        lineHeight: 1.5,
        color: 'var(--text-body)',
        letterSpacing: '-0.01em'
      }
    }, '“' + quote + '”'), R.createElement('div', {
      style: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, R.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: '0.875rem',
        color: 'var(--text-strong)'
      }
    }, name), detail && R.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        color: 'var(--text-subtle)'
      }
    }, detail)));
  }
  function ResultCard({
    image,
    tag,
    title,
    caption,
    ratio = '3 / 4',
    style = {},
    ...rest
  }) {
    const [hover, setHover] = R.useState(false);
    const cardStyle = {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      border: `1px solid ${hover ? 'rgba(31,100,137,0.15)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-brand-lg)',
      boxShadow: hover ? 'var(--shadow-cushion)' : 'var(--shadow-card)',
      transform: hover ? 'var(--lift-card)' : 'none',
      transition: 'all var(--dur-base) var(--ease-cushion)',
      ...style
    };
    const media = image ? R.createElement('img', {
      src: image,
      alt: title || '',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform var(--dur-slow) var(--ease-cushion)'
      }
    }) : R.createElement('div', {
      className: 'ph',
      style: {
        width: '100%',
        height: '100%'
      }
    }, 'Patient photo');
    return R.createElement('div', {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: cardStyle,
      ...rest
    }, R.createElement('div', {
      style: {
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: ratio
      }
    }, media, tag && R.createElement('span', {
      style: {
        position: 'absolute',
        top: 16,
        left: 16,
        background: 'rgba(252,249,248,0.9)',
        backdropFilter: 'blur(4px)',
        border: '1px solid var(--border-hairline)',
        color: 'var(--text-strong)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.5625rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)'
      }
    }, tag)), R.createElement('div', {
      style: {
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, R.createElement('h4', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '0.875rem',
        color: 'var(--text-strong)'
      }
    }, title), caption && R.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        color: 'var(--text-subtle)'
      }
    }, caption)));
  }
  function Accordion({
    items = [],
    single = true,
    style = {},
    ...rest
  }) {
    const [open, setOpen] = R.useState(single ? -1 : []);
    const isOpen = i => single ? open === i : open.includes(i);
    const toggle = i => {
      if (single) setOpen(open === i ? -1 : i);else setOpen(open.includes(i) ? open.filter(x => x !== i) : [...open, i]);
    };
    return R.createElement('div', {
      style: {
        borderBottom: '1px solid var(--border-soft)',
        ...style
      },
      ...rest
    }, items.map((it, i) => R.createElement('div', {
      key: i,
      style: {
        borderTop: '1px solid var(--border-soft)'
      }
    }, R.createElement('button', {
      onClick: () => toggle(i),
      'aria-expanded': isOpen(i),
      style: {
        width: '100%',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '28px 0',
        textAlign: 'left'
      }
    }, R.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'var(--text-h3)',
        color: 'var(--text-body)',
        lineHeight: 1.3
      }
    }, it.q), R.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: '1.75rem',
        color: 'var(--text-accent)',
        lineHeight: 1,
        flexShrink: 0,
        transform: isOpen(i) ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: 'transform var(--dur-base) var(--ease-cushion)'
      }
    }, '+')), R.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen(i) ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, R.createElement('div', {
      style: {
        overflow: 'hidden'
      }
    }, R.createElement('p', {
      style: {
        margin: 0,
        paddingBottom: 28,
        maxWidth: 640,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body)',
        lineHeight: 1.65,
        color: 'var(--text-muted)'
      }
    }, it.a))))));
  }
  const labelStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.6875rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'var(--text-subtle)'
  };
  function fieldBox(focused) {
    return {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '13px 16px',
      outline: 'none',
      boxShadow: focused ? '0 0 0 3px rgba(75,168,200,0.15)' : 'none',
      transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease'
    };
  }
  function Labeled(label, required, id, control) {
    return R.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, label && R.createElement('label', {
      htmlFor: id,
      style: labelStyle
    }, label, required && R.createElement('span', {
      style: {
        color: 'var(--action-accent)'
      }
    }, ' *')), control);
  }
  function Input({
    label,
    id,
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    disabled = false,
    style = {},
    ...rest
  }) {
    const [f, setF] = R.useState(false);
    return Labeled(label, required, id, R.createElement('input', {
      id,
      type,
      placeholder,
      value,
      onChange,
      required,
      disabled,
      onFocus: () => setF(true),
      onBlur: () => setF(false),
      style: {
        ...fieldBox(f),
        ...style
      },
      ...rest
    }));
  }
  function Textarea({
    label,
    id,
    placeholder,
    value,
    onChange,
    rows = 4,
    required = false,
    disabled = false,
    style = {},
    ...rest
  }) {
    const [f, setF] = R.useState(false);
    return Labeled(label, required, id, R.createElement('textarea', {
      id,
      rows,
      placeholder,
      value,
      onChange,
      required,
      disabled,
      onFocus: () => setF(true),
      onBlur: () => setF(false),
      style: {
        ...fieldBox(f),
        lineHeight: 1.5,
        resize: 'vertical',
        ...style
      },
      ...rest
    }));
  }
  function Select({
    label,
    id,
    options = [],
    value,
    onChange,
    placeholder,
    required = false,
    disabled = false,
    style = {},
    ...rest
  }) {
    const [f, setF] = R.useState(false);
    const opts = options.map(o => typeof o === 'string' ? {
      value: o,
      label: o
    } : o);
    const fieldStyle = {
      ...fieldBox(f),
      color: value ? 'var(--text-body)' : 'var(--text-subtle)',
      padding: '13px 40px 13px 16px',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer',
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center',
      ...style
    };
    return Labeled(label, required, id, R.createElement('select', {
      id,
      value,
      onChange,
      required,
      disabled,
      onFocus: () => setF(true),
      onBlur: () => setF(false),
      style: fieldStyle,
      ...rest
    }, placeholder && R.createElement('option', {
      value: '',
      disabled: true
    }, placeholder), opts.map(o => R.createElement('option', {
      key: o.value,
      value: o.value
    }, o.label))));
  }
  function PriceBlock({
    range = '$500 – $3,500',
    caption = 'Range per session area',
    note,
    style = {},
    ...rest
  }) {
    return R.createElement('div', {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-brand)',
        boxShadow: 'var(--shadow-sm)',
        padding: 'var(--space-7)',
        minWidth: 300,
        ...style
      },
      ...rest
    }, R.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        letterSpacing: '-0.04em',
        color: 'var(--text-strong)'
      }
    }, range), R.createElement('p', {
      style: {
        margin: '10px 0 0',
        fontFamily: 'var(--font-body)',
        fontSize: '0.625rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--text-subtle)'
      }
    }, caption), note && R.createElement('p', {
      style: {
        margin: '22px 0 0',
        maxWidth: 320,
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, note));
  }
  const mine = {
    Button,
    IconButton,
    Badge,
    Tag,
    ServiceCard,
    TestimonialCard,
    ResultCard,
    Accordion,
    Input,
    Textarea,
    Select,
    PriceBlock
  };
  window.OLAMMedSpaDesignSystem_e5ad93 = Object.assign({}, mine, window.OLAMMedSpaDesignSystem_e5ad93 || {});
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ResultCard = __ds_scope.ResultCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.PriceBlock = __ds_scope.PriceBlock;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
