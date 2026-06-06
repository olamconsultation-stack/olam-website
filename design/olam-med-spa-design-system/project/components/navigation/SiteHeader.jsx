import React from 'react';

/**
 * OLAM sticky site header: logo, EN/ES language toggle, phone CTA.
 * Translucent white with backdrop blur and a hairline bottom border.
 */
export function SiteHeader({
  logoSrc = 'assets/logo-olam.png',
  phone = '954.237.0930',
  lang = 'en',
  onLangChange,
  style = {},
  ...rest
}) {
  const [active, setActive] = React.useState(lang);
  const setLang = (l) => { setActive(l); onLangChange && onLangChange(l); };

  const pill = (l, txt) => (
    <button
      onClick={() => setLang(l)}
      aria-pressed={active === l}
      style={{
        padding: '5px 12px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.12em',
        background: active === l ? 'var(--ink-900)' : 'transparent',
        color: active === l ? '#fff' : 'var(--text-subtle)',
        transition: 'all var(--dur-base) var(--ease-cushion)',
      }}
    >
      {txt}
    </button>
  );

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-hairline)', ...style,
    }} {...rest}>
      <div style={{
        maxWidth: 'var(--content-max)', margin: '0 auto', padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoSrc} alt="OLAM Med Spa" style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', gap: 2, background: 'var(--surface-2)', padding: 4, borderRadius: 'var(--radius-pill)' }}>
            {pill('en', 'EN')}
            {pill('es', 'ES')}
          </div>
          <a href={`tel:+1${phone.replace(/\D/g, '')}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid var(--border-strong)', padding: '9px 20px', borderRadius: 'var(--radius-pill)',
            fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.875rem',
            color: 'var(--text-strong)', textDecoration: 'none',
            transition: 'all var(--dur-base) var(--ease-cushion)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink-900)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--ink-900)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-strong)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
          >
            {active === 'es' ? 'Llama' : 'Call'} {phone}
          </a>
        </div>
      </div>
    </header>
  );
}
