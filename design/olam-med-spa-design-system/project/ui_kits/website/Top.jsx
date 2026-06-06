/* OLAM Website UI Kit — Top: Hero, Qualification, Medical Leadership */
const { Badge, Button: Btn } = window.OLAMMedSpaDesignSystem_e5ad93;

function Hero() {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(to bottom, #fff, var(--surface-warm))', paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-10)' }}>
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45%', height: '60%', background: 'var(--blue-100)', filter: 'blur(120px)', borderRadius: '50%', opacity: 0.7, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-8%', width: '35%', height: '40%', background: 'var(--green-100)', filter: 'blur(110px)', borderRadius: '50%', opacity: 0.6, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Badge tone="accent" style={{ marginBottom: 18 }}>
            <L en="Non-Surgical Skin Tightening & Lifting" es="Firmeza y Lifting Sin Cirugía" />
          </Badge>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h1)', lineHeight: 1.04, letterSpacing: 'var(--ls-display)', margin: '0 0 22px', color: 'var(--text-strong)' }}>
            <L en={<>Pembroke Pines women 40+: tighten and lift your skin <span className="em">without surgery.</span></>}
               es={<>Mujeres de Pembroke Pines 40+: tensa y levanta tu piel <span className="em">sin cirugía.</span></>} />
          </h1>
          <p className="lead" style={{ maxWidth: 460, margin: '0 0 24px' }}>
            <L en="Firmer, lifted skin in 60–90 days — with a plan written before you decide. 15,000+ aesthetic procedures. Featured in Forbes & Univisión."
               es="Piel más firme y levantada en 60 a 90 días — con un plan escrito antes de que decidas. Más de 15,000 procedimientos." />
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
            <span style={{ color: 'var(--amber-500)', letterSpacing: 1 }}>★★★★★</span>
            <span style={{ fontWeight: 700, color: 'var(--text-strong)' }}>5.0</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ink-300)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}><L en="Google — 395 reviews" es="Google — 395 reseñas" /></span>
          </div>
          <Btn variant="accent" size="lg" href="#reserve" arrow>
            <L en="Reserve my $100 diagnostic consultation" es="Reservar mi consulta de $100" />
          </Btn>
          <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-subtle)' }}>
            <span><L en="$100 credited to treatment" es="Consulta acreditable" /></span>
            <span style={{ color: 'var(--ink-300)' }}>|</span>
            <span><L en="Financing from $45/mo" es="Financiamiento desde $45/mes" /></span>
          </div>
        </div>
        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)', aspectRatio: '4 / 5' }}>
          <div className="ph" style={{ width: '100%', height: '100%' }}>Hero photo — luxury<br/>med-spa atmosphere</div>
        </div>
      </div>
    </section>
  );
}

function QualCard({ tone, heading, items }) {
  const isPos = tone === 'pos';
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-card-muted)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-brand)', padding: 'var(--space-6)' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 90, height: 90, background: isPos ? 'rgba(122,181,32,0.07)' : 'rgba(192,57,43,0.06)', filter: 'blur(26px)', borderRadius: '50%' }} />
      <Badge tone={isPos ? 'green' : 'danger'} dot style={{ marginBottom: 22, position: 'relative' }}>{heading}</Badge>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 18, position: 'relative' }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, fontSize: 'var(--text-sm)', lineHeight: 1.55, color: 'var(--text-body)' }}>
            <span style={{ color: isPos ? 'var(--green-500)' : 'var(--danger-500)', fontWeight: 700 }}>•</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Qualification() {
  return (
    <section className="band" style={{ background: '#fff' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56 }}>
        <div>
          <Badge tone="accent" style={{ marginBottom: 16 }}><L en="Honest Qualification" es="Calificación Honesta" /></Badge>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)', marginBottom: 18 }}><L en={<>Is this<br/>for you?</>} es={<>¿Esto es<br/>para ti?</>} /></h2>
          <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <L en="We'd rather lose a booking than take a patient we can't help. Here's the honest filter."
               es="Preferimos perder una cita que aceptar a alguien a quien no podemos ayudar. Aquí el filtro honesto." />
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <QualCard tone="pos" heading={<L en="This is for you if" es="Sí es para ti si" />} items={[
            <L en="You see early loss of firmness along your jawline, neck or cheeks." es="Notas pérdida de firmeza en el óvalo facial, cuello o pómulos." />,
            <L en="You're 35–65 and want to act before it becomes surgical." es="Tienes entre 35 y 65 y quieres actuar antes de una cirugía." />,
            <L en="You want natural results — like yourself, 5 years ago." es="Buscas un resultado natural — como tú, cinco años atrás." />,
          ]} />
          <QualCard tone="neg" heading={<L en="This is NOT for you if" es="NO es para ti si" />} items={[
            <L en="You want a dramatic, Instagram-filter look." es="Quieres un look dramático tipo filtro de Instagram." />,
            <L en="You expect a single session to fix everything overnight." es="Esperas que una sola sesión lo resuelva todo en un día." />,
          ]} />
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const row = (txt) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 0', borderBottom: '1px solid var(--border-soft)' }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--blue-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: 18 }}>chevron_right</span>
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-strong)' }}>{txt}</span>
    </div>
  );
  return (
    <section className="band" style={{ background: 'var(--surface-warm)', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Badge tone="accent" style={{ marginBottom: 16 }}><L en="Medical Leadership" es="Liderazgo Médico" /></Badge>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)', marginBottom: 22 }}><L en={<>Collective expertise. <br/><i>Not a personality.</i></>} es={<>Excelencia colectiva. <br/><i>No una personalidad.</i></>} /></h2>
          <p style={{ margin: '0 0 16px', color: 'var(--text-muted)', lineHeight: 1.65, fontSize: 'var(--text-lead)' }}>
            <L en={<>Every OLAM treatment plan is personally reviewed and supervised by our <strong style={{ color: 'var(--text-body)' }}>Board Certified Medical Director</strong>, with over 20 years of experience in aesthetic medicine.</>}
               es={<>Cada plan de tratamiento lo revisa y supervisa personalmente nuestro <strong style={{ color: 'var(--text-body)' }}>Medical Director Board Certified</strong>, con más de 20 años de experiencia.</>} />
          </p>
          <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.65, fontSize: 'var(--text-lead)' }}>
            <L en={<>We've performed <strong style={{ color: 'var(--text-body)' }}>15,000+ aesthetic procedures</strong> in the last five years. This isn't a rotating-staff franchise — it's a medical institution.</>}
               es={<>Hemos realizado <strong style={{ color: 'var(--text-body)' }}>más de 15,000 procedimientos</strong> en los últimos cinco años. Somos una institución médica.</>} />
          </p>
        </div>
        <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', minHeight: 460, boxShadow: 'var(--shadow-2xl)', border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="ph" style={{ position: 'absolute', inset: 0 }}>OLAM team photo</div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #fff 8%, rgba(255,255,255,0.82) 45%, transparent)' }} />
          <div style={{ position: 'relative', padding: '0 40px 32px' }}>
            {row(<L en="Supervised." es="Supervisado." />)}
            {row(<L en="Licensed." es="Licenciado." />)}
            {row(<L en="Accountable." es="Responsable." />)}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Qualification, Leadership });
