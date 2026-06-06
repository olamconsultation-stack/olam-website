/* OLAM Website UI Kit — Middle: Six problems + Technologies tabs */
const { ServiceCard, Tag: Chip, Badge: Eyebrow } = window.OLAMMedSpaDesignSystem_e5ad93;

const PROBLEMS = [
  { en: ['Loss of jawline definition', 'The first place skin laxity becomes visible. Caused by collagen depletion at the deeper SMAS layer.'], es: ['Pérdida de definición del óvalo facial', 'El primer lugar donde la flacidez se nota. Causado por pérdida de colágeno en la capa SMAS.'] },
  { en: ['Sagging neck and "turkey neck"', 'Loss of tone in the platysma and overlying skin. Often visible in photos before the mirror catches it.'], es: ['Cuello caído y "papada de pavo"', 'Pérdida de tono en el platisma. Visible en fotos antes que en el espejo.'] },
  { en: ['Drooping cheeks and mid-face', 'Volume migration and structural descent. The face shifts from heart-shaped to more square.'], es: ['Pómulos y tercio medio descendidos', 'Migración de volumen y descenso estructural. El rostro pasa de forma de corazón a cuadrada.'] },
  { en: ['Crepey skin on neck and chest', 'Surface texture loss, often combined with sun damage. A different protocol than facial laxity.'], es: ['Piel crepé en cuello y escote', 'Pérdida de textura superficial, a menudo con daño solar. Protocolo diferente a la laxitud facial.'] },
  { en: ['Post-weight-loss laxity', "Skin that didn't retract after significant weight change. Requires deeper energy to remodel collagen."], es: ['Flacidez post pérdida de peso', 'Piel que no se retrajo tras un cambio de peso. Requiere energía profunda para remodelar el colágeno.'] },
  { en: ['Brow descent and hooded eyes', 'The forehead and brow drop subtly with time, making the upper face look heavier. Treatable non-surgically.'], es: ['Caída de cejas y párpados pesados', 'La frente y las cejas caen con el tiempo, dando peso al rostro. Tratable sin cirugía.'] },
];

function Treat() {
  return (
    <section className="band" style={{ background: '#fff' }}>
      <div className="wrap">
        <div style={{ marginBottom: 44 }}>
          <Eyebrow tone="accent" style={{ marginBottom: 16 }}><L en="What we treat" es="Qué tratamos" /></Eyebrow>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)' }}><L en={<>Six problems. <i>One diagnostic path.</i></>} es={<>Seis problemas. <i>Un camino diagnóstico.</i></>} /></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {PROBLEMS.map((p, i) => (
            <ServiceCard key={i} index={String(i + 1).padStart(2, '0')} title={<L en={p.en[0]} es={p.es[0]} />}>
              <L en={p.en[1]} es={p.es[1]} />
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const TECH = {
  ultherapy: {
    name: 'Ultherapy®', kicker: { en: 'Deep SMAS Ultrasound Lifting', es: 'Lifting de Ultrasonido SMAS' },
    body: { en: "Micro-focused ultrasound targets the SMAS layer — the exact muscle layer addressed in surgical facelifts — stimulating structural collagen without breaking the skin's surface.", es: 'El ultrasonido microfocalizado se dirige a la capa SMAS, la misma que se trata en un lifting quirúrgico, estimulando colágeno sin dañar la superficie.' },
    points: [{ en: 'Excellent for jawline sagging and brow lifting', es: 'Excelente para flacidez de mandíbula y cejas' }, { en: 'Single-session results that improve over 2–6 months', es: 'Resultados en una sesión que mejoran de 2 a 6 meses' }],
    meta: [['Target', 'Deep SMAS Layer'], ['Duration', '60–90 Minutes'], ['Downtime', 'Zero Days'], ['Anesthesia', 'Topical Numbing']],
  },
  rf: {
    name: 'RF Microneedling', kicker: { en: 'Radiofrequency & Microneedling', es: 'Radiofrecuencia y Microagujas' },
    body: { en: 'Synergistic microneedling and dynamic radiofrequency delivered at precise depths, remodeling surface layers to tighten crepey skin and restore elastic fibers.', es: 'Microagujas y radiofrecuencia dinámica a profundidades precisas, remodelando capas superficiales para tensar piel crepé y restaurar fibras elásticas.' },
    points: [{ en: 'Superb for neck skin texture and fine lines', es: 'Magnífico para textura del cuello y líneas finas' }, { en: 'Restores clinical density to aging skin', es: 'Restaura densidad clínica en piel envejecida' }],
    meta: [['Target', 'Dermis & Epidermis'], ['Duration', '45–60 Minutes'], ['Downtime', '1–2 Days Redness'], ['Anesthesia', 'Topical Numbing']],
  },
  agnes: {
    name: 'Agnes RF™', kicker: { en: 'Targeted Precision Sculpting', es: 'Escultura de Precisión' },
    body: { en: 'Precision micro-insulation technology melts targeted pockets of fat and tightens saggy areas simultaneously. Ideal for under-eye bags and heavy jowls.', es: 'Tecnología de microaislamiento que derrite grasa específica y tensa zonas caídas a la vez. Ideal para bolsas y papada.' },
    points: [{ en: 'Pinpoint sculpting for jaw definition & eye bags', es: 'Escultura de precisión para mandíbula y bolsas' }, { en: 'Permanent fat cell destruction in treated zones', es: 'Destrucción permanente de grasa en zonas tratadas' }],
    meta: [['Target', 'Subcutaneous Fat & SMAS'], ['Duration', '30–45 Minutes'], ['Downtime', '2–3 Days Swelling'], ['Anesthesia', 'Local / Topical']],
  },
};

function Technologies() {
  const [tab, setTab] = React.useState('ultherapy');
  const t = TECH[tab];
  const tabBtn = (id, label) => {
    const on = tab === id;
    return (
      <button key={id} onClick={() => setTab(id)} style={{
        padding: '12px 24px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
        border: `1px solid ${on ? 'var(--blue-700)' : 'var(--border-soft)'}`,
        background: on ? 'var(--blue-700)' : 'transparent', color: on ? '#fff' : 'var(--text-subtle)',
        fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase',
        letterSpacing: '0.1em', transition: 'all var(--dur-base) var(--ease-cushion)',
      }}>{label}</button>
    );
  };
  return (
    <section className="band" style={{ background: '#fff' }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, marginBottom: 40 }}>
          <Eyebrow tone="accent" style={{ marginBottom: 16 }}><L en="The category, not a single protocol" es="La categoría, no un solo protocolo" /></Eyebrow>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)', marginBottom: 18 }}><L en={<>Not one treatment. <i>The right treatment</i> for your skin.</>} es={<>No un tratamiento. <i>El tratamiento correcto</i> para tu piel.</>} /></h2>
          <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}><L en="Skin tightening isn't a single machine. It's a category. The technology that works for your neck may be the wrong answer for your jawline." es="La firmeza no es una sola máquina. Es una categoría. Lo que funciona para tu cuello puede ser incorrecto para tu mandíbula." /></p>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', borderBottom: '1px solid var(--border-hairline)', paddingBottom: 24, marginBottom: 40 }}>
          {tabBtn('ultherapy', 'Ultherapy')}{tabBtn('rf', 'RF Microneedling')}{tabBtn('agnes', 'Agnes RF')}
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-brand-lg)', boxShadow: 'var(--shadow-card)', padding: 40, display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 36, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--blue-700)', textTransform: 'uppercase', letterSpacing: '0.1em' }}><L en={t.kicker.en} es={t.kicker.es} /></span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.875rem', margin: '12px 0 16px', color: 'var(--text-strong)' }}>{t.name}</h3>
            <p style={{ margin: '0 0 20px', color: 'var(--text-muted)', lineHeight: 1.6 }}><L en={t.body.en} es={t.body.es} /></p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {t.points.map((p, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-body)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue-700)', flexShrink: 0 }} /><L en={p.en} es={p.es} />
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--surface-warm)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-brand)', padding: 28 }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-strong)', margin: '0 0 16px', paddingBottom: 12, borderBottom: '1px solid var(--border-hairline)' }}>Clinical Overview</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              {t.meta.map(([k, v]) => (
                <div key={k}>
                  <p style={{ margin: '0 0 4px', fontSize: '0.625rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-subtle)' }}>{k}</p>
                  <p style={{ margin: 0, fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-strong)' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 48, maxWidth: 760 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.6rem', lineHeight: 1.3, margin: 0, color: 'var(--text-strong)' }}>
            <L en={<>Which one is right for you is determined in your Diagnostic Consultation with 3D analysis — <span className="em">not by Google, not by guessing, and not by us trying to upsell you.</span></>}
               es={<>Cuál es la correcta se decide en tu Consulta Diagnóstica con análisis 3D — <span className="em">no por Google, no adivinando, y no por nosotros intentando venderte más.</span></>} />
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Treat, Technologies });
