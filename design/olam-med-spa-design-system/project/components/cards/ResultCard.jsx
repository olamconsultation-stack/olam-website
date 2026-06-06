import React from 'react';

/**
 * Before/after result card. Photo with a floating uppercase tag chip,
 * zoom-on-hover image, title + caption below. Use for the results gallery.
 * If no image is supplied, renders a neutral placeholder.
 */
export function ResultCard({
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
    ...style,
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={cardStyle}
      {...rest}
    >
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: ratio }}>
        {image ? (
          <img src={image} alt={title || ''} style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hover ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-cushion)',
          }} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, var(--surface-2), var(--surface-3))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--ink-300)', fontFamily: 'var(--font-body)', fontSize: '0.7rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Patient photo
          </div>
        )}
        {tag && (
          <span style={{
            position: 'absolute', top: 16, left: 16,
            background: 'rgba(252,249,248,0.9)', backdropFilter: 'blur(4px)',
            border: '1px solid var(--border-hairline)', color: 'var(--text-strong)',
            fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '6px 12px', borderRadius: 'var(--radius-pill)',
          }}>
            {tag}
          </span>
        )}
      </div>
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-strong)' }}>{title}</h4>
        {caption && <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{caption}</p>}
      </div>
    </div>
  );
}
