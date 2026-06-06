import React from 'react';

/**
 * Numbered service / problem card (the "Six problems" grid). Warm
 * fill, hairline border, brand-tint corner glow, signature cushion
 * hover. Title shifts to accent on hover.
 */
export function ServiceCard({
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
    ...style,
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={cardStyle}
      {...rest}
    >
      <div style={{ position: 'absolute', top: 0, right: 0, width: 96, height: 96, background: glow, filter: 'blur(28px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        {index != null && (
          <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.15em', color: accentColor, marginBottom: 16 }}>
            {index}
          </span>
        )}
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h3)',
          margin: '0 0 12px', color: hover ? accentColor : 'var(--text-strong)',
          transition: 'color var(--dur-base) var(--ease-cushion)',
        }}>
          {title}
        </h3>
        {children && (
          <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.6, color: 'var(--text-muted)' }}>
            {children}
          </p>
        )}
      </div>
    </div>
  );
}
