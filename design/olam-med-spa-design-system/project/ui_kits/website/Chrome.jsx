/* OLAM Website UI Kit — Chrome: header + footer + shared helpers */
const NS = window.OLAMMedSpaDesignSystem_e5ad93;
const { Button } = NS;

function L({ en, es }) {
  return (
    <>
      <span className="only-en">{en}</span>
      <span className="only-es">{es}</span>
    </>
  );
}

function Header({ lang, setLang }) {
  const pill = (l, txt) => (
    <button
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      style={{
        padding: '5px 12px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.12em',
        background: lang === l ? 'var(--ink-900)' : 'transparent',
        color: lang === l ? '#fff' : 'var(--text-subtle)',
        transition: 'all var(--dur-base) var(--ease-cushion)',
      }}
    >{txt}</button>
  );

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-hairline)',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, paddingBottom: 14 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo-olam.png" alt="OLAM Med Spa" style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', gap: 2, background: 'var(--surface-2)', padding: 4, borderRadius: 'var(--radius-pill)' }}>
            {pill('en', 'EN')}{pill('es', 'ES')}
          </div>
          <a href="tel:+19542370930" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid var(--border-strong)',
            padding: '9px 20px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)',
            fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-strong)', textDecoration: 'none',
            transition: 'all var(--dur-base) var(--ease-cushion)',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink-900)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--ink-900)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-strong)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}>
            <L en="Call 954.237.0930" es="Llama 954.237.0930" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const col = (heading, links) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <span style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-on-dark-muted)' }}>{heading}</span>
      {links.map((t) => (
        <a key={t} href="#" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{t}</a>
      ))}
    </div>
  );

  return (
    <footer style={{ background: 'var(--ink-900)', color: '#fff', paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-8)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 320 }}>
          <img src="../../assets/logo-olam-white.png" alt="OLAM Med Spa" style={{ height: 40, width: 'auto', objectFit: 'contain', alignSelf: 'flex-start' }} />
          <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
            <L en="Medical aesthetics in Pembroke Pines, FL. Board Certified Medical Director supervision. Natural results without surgery."
               es="Estética médica en Pembroke Pines, FL. Supervisión de Medical Director Board Certified. Resultados naturales sin cirugía." />
          </p>
          <span style={{ color: 'var(--amber-500)', letterSpacing: 2 }}>★★★★★ <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', letterSpacing: 0 }}>5.0 · 395 Google reviews</span></span>
        </div>
        {col('Treatments', ['Skin Tightening', 'Ultherapy', 'RF Microneedling', 'Agnes RF', 'Injectables'])}
        {col('Clinic', ['Medical Leadership', 'Real Results', 'Pricing', 'FAQ', 'Book Consultation'])}
        {col('Visit', ['Pembroke Pines, FL', '954.237.0930', 'Mon–Sat 9–6', 'Financing'])}
      </div>
      <div className="wrap" style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--border-on-dark)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>© 2026 OLAM Med Spa. All rights reserved.</span>
        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>Privacy · Terms · Medical Disclaimer</span>
      </div>
    </footer>
  );
}

Object.assign(window, { L, Header, Footer });
