import React from 'react';

/**
 * Testimonial / review card. Star rating, quote in display italic-friendly
 * body, patient attribution. White fill, soft card shadow, cushion hover.
 */
export function TestimonialCard({
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
    ...style,
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={cardStyle}
      {...rest}
    >
      <div style={{ color: 'var(--amber-500)', letterSpacing: 2, fontSize: '0.95rem' }} aria-label={`${rating} out of 5`}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <p style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.0625rem',
        lineHeight: 1.5, color: 'var(--text-body)', letterSpacing: '-0.01em',
      }}>
        “{quote}”
      </p>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-strong)' }}>{name}</span>
        {detail && <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{detail}</span>}
      </div>
    </div>
  );
}
