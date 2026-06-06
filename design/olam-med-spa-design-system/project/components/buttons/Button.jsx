import React from 'react';

/**
 * OLAM primary button system. Pill-shaped, Inter semibold,
 * cushion-eased hover. Variants: primary (green), accent (steel
 * blue, matches live site), secondary (ink outline), ghost (text + arrow).
 */
export function Button({
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
    sm: { padding: '10px 20px', fontSize: '0.8125rem' },
    md: { padding: '16px 32px', fontSize: '0.9375rem' },
    lg: { padding: '20px 40px', fontSize: '1rem' },
  };

  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-brand)',
    },
    accent: {
      background: 'var(--action-accent)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-accent)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid transparent',
      boxShadow: 'none',
      padding: 0,
    },
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
    ...(variant === 'ghost' ? { padding: 0 } : {}),
    ...style,
  };

  const hoverIn = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--action-primary-hover)';
    else if (variant === 'accent') el.style.background = 'var(--action-accent-hover)';
    else if (variant === 'secondary') { el.style.background = 'var(--action-ink)'; el.style.color = '#fff'; el.style.borderColor = 'var(--action-ink)'; }
    else if (variant === 'ghost') el.style.color = 'var(--blue-700)';
  };
  const hoverOut = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.background = variants[variant].background;
    el.style.color = variants[variant].color;
    if (variant === 'secondary') el.style.borderColor = 'var(--border-soft)';
  };

  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true" style={{ transition: 'transform var(--dur-base) var(--ease-cushion)' }}>→</span>}
    </>
  );

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      style={base}
      {...rest}
    >
      {content}
    </Tag>
  );
}
