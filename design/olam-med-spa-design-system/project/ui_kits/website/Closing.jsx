/* OLAM Website UI Kit — Closing: FAQ + Reservation form */
const NSC = window.OLAMMedSpaDesignSystem_e5ad93;
const { Accordion, Input, Select, Textarea, Button: B3, Badge: Eb3 } = NSC;

function FAQ() {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const items = [
    { en: ['Does it hurt?', 'For most technologies (Ultherapy, RF Microneedling, Agnes RF) we apply topical numbing before your session. Patients describe warmth or a quick tingling, not sharp pain. You can work and socialize the same day.'],
      es: ['¿Duele?', 'Para la mayoría de tecnologías aplicamos anestesia tópica. Las pacientes describen calor o cosquilleo breve, no dolor agudo. Puedes trabajar y salir el mismo día.'] },
    { en: ['When will I see results?', 'Initial firmness is often visible between weeks 4–6. Full collagen rebuild progresses over 2–6 months. A real biological process, not a filter — which is why the result lasts.'],
      es: ['¿En cuánto tiempo veré resultados?', 'La firmeza inicial suele verse entre las semanas 4 y 6. La reconstrucción completa avanza entre 2 y 6 meses. Es un proceso biológico real, no un filtro.'] },
    { en: ['Why does this cost more than some chain med spas?', 'Your plan is reviewed by a Board Certified Medical Director, every procedure is performed by licensed professionals who don\'t rotate every six months, and you receive a complete follow-up protocol. You\'re paying for medical supervision, not a room with a machine.'],
      es: ['¿Por qué cuesta más que algunas cadenas?', 'Tu plan lo revisa un Medical Director Board Certified, cada procedimiento lo hacen profesionales licenciados que no rotan, y recibes seguimiento completo. Pagas por supervisión médica, no por un cuarto con una máquina.'] },
    { en: ['What if the treatment isn\'t right for me?', 'Your Diagnostic Consultation is designed to find that out before we recommend anything. If skin tightening isn\'t right for you, we\'ll tell you clearly — and you keep the written analysis with no pressure to book.'],
      es: ['¿Y si no es el adecuado para mí?', 'Tu Consulta Diagnóstica está diseñada para averiguarlo antes de recomendar nada. Si no es lo correcto, te lo decimos con claridad — y te llevas el análisis sin presión.'] },
    { en: ['It\'s my first time — is it safe?', 'Every plan is supervised by our Board Certified Medical Director. We only use FDA-approved technology, with a complete follow-up protocol and direct contact if anything feels off.'],
      es: ['Es mi primera vez — ¿es seguro?', 'Cada plan está supervisado por nuestro Medical Director Board Certified. Usamos solo tecnología aprobada por la FDA, con seguimiento completo y contacto directo.'] },
  ].map((it) => ({ q: it[lang][0], a: it[lang][1] }));

  return (
    <section className="band" style={{ background: 'var(--surface-panel)' }} id="faq">
      <div className="wrap-narrow">
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <Eb3 tone="accent" style={{ marginBottom: 16 }}><L en="Common Doubts" es="Dudas Comunes" /></Eb3>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)' }}><L en={<>Questions <i>real patients</i> ask us.</>} es={<>Preguntas que <i>pacientes reales</i> nos hacen.</>} /></h2>
        </div>
        <Accordion items={items} />
      </div>
    </section>
  );
}

function Reserve() {
  const benefit = (en, es) => (
    <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start', fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
      <span><L en={en} es={es} /></span>
    </li>
  );
  return (
    <section className="band" style={{ background: 'var(--ink-900)', position: 'relative', overflow: 'hidden' }} id="reserve">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 56, alignItems: 'start' }}>
        <div>
          <span style={{ fontSize: 'var(--text-label)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--ls-label)', color: 'var(--blue-400)' }}><L en="Reserve Your Consultation" es="Reserva Tu Consulta" /></span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h2)', lineHeight: 1.05, color: '#fff', margin: '18px 0 24px' }}><L en={<>One honest conversation.<br/><span style={{ fontWeight: 300, fontStyle: 'italic', opacity: 0.6 }}>Then you decide.</span></>} es={<>Una conversación honesta.<br/><span style={{ fontWeight: 300, fontStyle: 'italic', opacity: 0.6 }}>Tú decides después.</span></>} /></h2>
          <p style={{ margin: '0 0 28px', color: 'var(--text-on-dark-muted)', lineHeight: 1.6 }}><L en="We'll contact you within 5 minutes during business hours to confirm your preferred time." es="Te contactaremos en 5 minutos en horario laboral para confirmar tu horario." /></p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {benefit('$100 credited to your first treatment within 30 days', '$100 acreditables a tu primer tratamiento en 30 días')}
            {benefit('Written treatment plan you keep, regardless', 'Plan de tratamiento por escrito, pase lo que pase')}
            {benefit('Financing options from $45/mo via CareCredit or Cherry', 'Financiamiento desde $45/mes vía CareCredit o Cherry')}
            {benefit('Board Certified Medical Director supervision', 'Supervisión de Medical Director Board Certified')}
          </ul>
        </div>
        <div style={{ background: '#fff', borderRadius: 'var(--radius-brand-lg)', padding: 36, boxShadow: 'var(--shadow-2xl)' }}>
          <form onSubmit={(e) => { e.preventDefault(); e.target.reset(); alert('Thank you — we\'ll call you within 5 minutes during business hours.'); }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <Input label={<L en="First name" es="Nombre" />} id="fn" placeholder="Jane" required />
            <Input label={<L en="Last name" es="Apellido" />} id="ln" placeholder="Doe" required />
            <Input label={<L en="Phone" es="Teléfono" />} id="ph" type="tel" placeholder="+1 (555) 000-0000" required />
            <Input label="Email" id="em" type="email" placeholder="you@email.com" required />
            <div style={{ gridColumn: '1 / -1' }}>
              <Select label={<L en="Primary concern" es="Preocupación principal" />} id="cn" placeholder="Select an area"
                options={['Jawline & neck', 'Cheeks & mid-face', 'Crepey skin / chest', 'Brow & hooded eyes', 'Post-weight-loss laxity', 'Not sure — help me decide']} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <Textarea label={<L en="Anything else we should know?" es="¿Algo más que debamos saber?" />} id="nt" rows={3} placeholder="Optional — tell us about your goals." />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <B3 variant="accent" size="lg" type="submit" arrow style={{ width: '100%', justifyContent: 'center' }}><L en="Reserve my $100 consultation" es="Reservar mi consulta de $100" /></B3>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQ, Reserve });
