import React from 'react';

/**
 * Price transparency block. Big Sora range, tracked caption, and a
 * financing note. White card on warm panel.
 */
export function PriceBlock({
  range = '$500 – $3,500',
  caption = 'Range per session area',
  note,
  style = {},
  ...rest
}) {
  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-brand)', boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-7)', minWidth: 300, ...style,
    }} {...rest}>
      <p style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500,
        fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--text-strong)',
      }}>
        {range}
      </p>
      <p style={{
        margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-subtle)',
      }}>
        {caption}
      </p>
      {note && (
        <p style={{
          margin: '22px 0 0', maxWidth: 320, fontFamily: 'var(--font-body)',
          fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-muted)',
        }}>
          {note}
        </p>
      )}
    </div>
  );
}
