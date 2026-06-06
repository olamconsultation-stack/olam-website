import React from 'react';

/**
 * FAQ accordion. Sora question, hairline top border, a "+" that
 * rotates to "×" on open, smooth height reveal. Renders a list of
 * {q, a} items; one open at a time by default.
 */
export function Accordion({ items = [], single = true, style = {}, ...rest }) {
  const [open, setOpen] = React.useState(single ? -1 : []);

  const isOpen = (i) => (single ? open === i : open.includes(i));
  const toggle = (i) => {
    if (single) setOpen(open === i ? -1 : i);
    else setOpen(open.includes(i) ? open.filter((x) => x !== i) : [...open, i]);
  };

  return (
    <div style={{ borderBottom: '1px solid var(--border-soft)', ...style }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{ borderTop: '1px solid var(--border-soft)' }}>
          <button
            onClick={() => toggle(i)}
            aria-expanded={isOpen(i)}
            style={{
              width: '100%', background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
              padding: '28px 0', textAlign: 'left',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h3)',
              color: 'var(--text-body)', lineHeight: 1.3,
            }}>
              {it.q}
            </span>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.75rem',
              color: 'var(--text-accent)', lineHeight: 1, flexShrink: 0,
              transform: isOpen(i) ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform var(--dur-base) var(--ease-cushion)',
            }}>
              +
            </span>
          </button>
          <div style={{
            display: 'grid',
            gridTemplateRows: isOpen(i) ? '1fr' : '0fr',
            transition: 'grid-template-rows var(--dur-base) var(--ease-out)',
          }}>
            <div style={{ overflow: 'hidden' }}>
              <p style={{
                margin: 0, paddingBottom: 28, maxWidth: 640,
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)',
                lineHeight: 1.65, color: 'var(--text-muted)',
              }}>
                {it.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
