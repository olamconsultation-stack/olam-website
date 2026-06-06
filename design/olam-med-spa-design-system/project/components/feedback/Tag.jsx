import React from 'react';

/**
 * Pill tag / chip. Used for metadata chips, technology labels, and
 * overlay chips on imagery. Solid, soft, or outline fills.
 */
export function Tag({
  children,
  variant = 'soft',
  style = {},
  ...rest
}) {
  const variants = {
    soft: { background: 'var(--blue-100)', color: 'var(--blue-700)', border: '1px solid transparent' },
    green: { background: 'var(--green-100)', color: 'var(--green-700)', border: '1px solid transparent' },
    solid: { background: 'var(--action-accent)', color: '#fff', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--text-body)', border: '1px solid var(--border-soft)' },
    glass: { background: 'rgba(252,249,248,0.9)', color: 'var(--text-strong)', border: '1px solid var(--border-hairline)', backdropFilter: 'blur(4px)' },
  };

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '0.1em',
      padding: '6px 12px', borderRadius: 'var(--radius-pill)',
      ...variants[variant], ...style,
    }} {...rest}>
      {children}
    </span>
  );
}
