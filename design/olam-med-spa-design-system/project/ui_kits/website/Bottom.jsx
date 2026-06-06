/* OLAM Website UI Kit — Bottom: Results gallery, $100 consult (dark), Pricing */
const NSB = window.OLAMMedSpaDesignSystem_e5ad93;
const { ResultCard, PriceBlock, Badge: Eb, Button: B2 } = NSB;

function Results() {
  return (
    <section className="band" style={{ background: '#fff' }}>
      <div className="wrap">
        <Eb tone="accent" style={{ marginBottom: 16 }}><L en="Realistic Expectations" es="Expectativas Reales" /></Eb>
        <h2 className="h" style={{ fontSize: 'var(--text-h2)', marginBottom: 32 }}><L en={<>What real results <i>look like.</i></>} es={<>Cómo se ven <i>los resultados reales.</i></>} /></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, marginBottom: 44 }}>
          {[['01', 'Visible firmness on the jaw and neck starting around week 4–6.', 'Firmeza visible en óvalo y cuello desde la semana 4 a 6.'],
            ['02', 'Clearer jawline definition progressing over 2–6 months.', 'Definición progresiva del jawline en 2 a 6 meses.'],
            ['03', 'Gradual collagen rebuild — change your friends notice without asking why.', 'Reconstrucción gradual de colágeno — que tus amigas notan sin saber por qué.'],
            ['04', 'Natural-looking — no overdone, frozen or "filtered" appearance.', 'Aspecto natural — sin exceso, congelado ni "filtrado".']].map(([n, en, es]) => (
            <div key={n} style={{ display: 'flex', gap: 16 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--blue-700)', letterSpacing: '0.1em', marginTop: 2 }}>{n}</span>
              <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}><L en={en} es={es} /></p>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          <ResultCard tag="JAWLINE · WK 12" title={<L en="Jawline contour comparison" es="Comparación de contorno" />} caption={<L en="Week 12 vs Baseline" es="Semana 12 vs Inicio" />} />
          <ResultCard tag="MID-FACE LIFT" title={<L en="Cheek volume elevation" es="Elevación de pómulos" />} caption={<L en="Clinical Outcome" es="Resultado Clínico" />} />
          <ResultCard tag="PROCEDURE" title={<L en="Ultrasound precision delivery" es="Ultrasonido focalizado" />} caption={<L en="Live Session" es="Sesión en Vivo" />} />
          <ResultCard tag="COLLAGEN" title={<L en="Natural jawline contour" es="Contorno natural" />} caption={<L en="Serene Radiance" es="Radiación Serena" />} />
        </div>
      </div>
    </section>
  );
}

function Consult() {
  const item = (n, en, es, sen, ses) => (
    <div style={{ display: 'flex', gap: 22, paddingBottom: 28, borderBottom: '1px solid var(--border-on-dark)' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.6rem', color: 'var(--blue-400)', opacity: 0.7 }}>{n}</span>
      <div>
        <h4 style={{ margin: '0 0 6px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.0625rem', color: '#fff' }}><L en={en} es={es} /></h4>
        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', lineHeight: 1.55 }}><L en={sen} es={ses} /></p>
      </div>
    </div>
  );
  return (
    <section className="band" style={{ background: 'var(--ink-900)', color: '#fff', borderTop: '1px solid var(--border-on-dark)', borderBottom: '1px solid var(--border-on-dark)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
        <div>
          <span style={{ fontSize: 'var(--text-label)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--ls-label)', color: 'var(--blue-400)' }}><L en="The $100 Diagnostic Consultation" es="La Consulta Diagnóstica de $100" /></span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h2)', lineHeight: 1.05, margin: '18px 0 28px' }}><L en={<>A medical session. <br/><span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--blue-400)' }}>Not a sales pitch.</span></>} es={<>Una sesión médica. <br/><span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--blue-400)' }}>No un pitch de ventas.</span></>} /></h2>
          <p style={{ margin: '0 0 16px', fontSize: 'var(--text-lead)', lineHeight: 1.6, color: 'var(--text-on-dark-muted)' }}><L en="$100 is what we charge to do the work properly: 3D skin analysis with medical ultrasound, a written treatment plan reviewed by our Medical Director, exact pricing in writing, and a realistic projection of your results." es="$100 es lo que cobramos por hacer el trabajo bien: análisis 3D con ultrasonido, un plan escrito revisado por nuestro Director Médico, precios exactos por escrito y una proyección realista." /></p>
          <p style={{ margin: '0 0 36px', fontSize: 'var(--text-lead)', lineHeight: 1.6, color: 'var(--text-on-dark-muted)' }}><L en="Move forward within 30 days and your $100 is credited to treatment. If it's not right for you, the plan is yours to keep." es="Si avanzas en 30 días, tus $100 se acreditan al tratamiento. Si no es para ti, el plan es tuyo." /></p>
          <B2 variant="accent" size="lg" href="#reserve" arrow><L en="Reserve my consultation" es="Reservar mi consulta" /></B2>
        </div>
        <div style={{ paddingLeft: 72, borderLeft: '1px solid var(--border-on-dark)' }}>
          <span style={{ display: 'block', fontSize: 'var(--text-label)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--ls-label)', color: 'var(--blue-400)', marginBottom: 36 }}><L en="What your consultation includes" es="Qué incluye tu consulta" /></span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {item('01', '3D skin analysis with medical ultrasound', 'Análisis 3D con ultrasonido médico', 'An objective reading of your collagen, laxity, and structural condition — not a visual guess.', 'Lectura objetiva de tu colágeno, flacidez y estructura — sin adivinanzas.')}
            {item('02', 'Personalized treatment plan, in writing', 'Plan personalizado por escrito', 'Technology, area, sessions and sequence — signed off by our Medical Director.', 'Tecnología, área y secuencia — firmado por el Director Médico.')}
            {item('03', 'Exact price for your case, in writing', 'Precio exacto por escrito', 'Before any decision. No upsell on the day of treatment.', 'Antes de decidir. Sin ventas forzadas el día del tratamiento.')}
            {item('04', 'Results projection at months 2, 4 and 6', 'Proyección a los meses 2, 4 y 6', 'A realistic timeline so you know what to expect — and what not to.', 'Una línea de tiempo realista para saber qué esperar — y qué no.')}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="band" style={{ background: 'var(--surface-warm)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
        <div>
          <Eb tone="accent" style={{ marginBottom: 16 }}><L en="Price Transparency" es="Transparencia de Precios" /></Eb>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)' }}><L en={<>Real prices. <i>No hidden estimates.</i></>} es={<>Precios reales. <i>Sin estimados escondidos.</i></>} /></h2>
        </div>
        <PriceBlock range="$500 – $3,500" caption={<L en="Range per session area" es="Rango por zona de sesión" />}
          note={<L en={<>Financing from <strong>$45/mo</strong> via CareCredit or Cherry. 12 months interest-free for qualified applicants.</>} es={<>Financiamiento desde <strong>$45/mes</strong> vía CareCredit o Cherry. 12 meses sin interés.</>} />} />
      </div>
    </section>
  );
}

Object.assign(window, { Results, Consult, Pricing });
