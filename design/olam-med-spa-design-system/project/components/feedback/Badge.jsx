import React from 'react';

/**
 * Eyebrow / status badge. Tiny tracked-uppercase label, optional
 * leading dot. Used as section eyebrows and qualifier markers.
 */
export function Badge({
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
    muted: 'var(--text-subtle)',
  };
  const dotColors = {
    accent: 'var(--blue-500)',
    green: 'var(--green-500)',
    danger: 'var(--danger-500)',
    muted: 'var(--ink-300)',
  };

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-label)', fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: 'var(--ls-label)', color: tones[tone],
      ...style,
    }} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: dotColors[tone], flexShrink: 0 }} />}
      {children}
    </span>
  );
}
