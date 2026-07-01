/* Olam Med Spa — Global Footer
 * Edit THIS file to update the footer across all pages.
 */
(function () {
  'use strict';

  // ── 1. Inject footer CSS ───────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    'footer.site{background:var(--surface-linen);border-top:1px solid var(--border-hairline);padding:52px 0 36px;}',
    '.foot-grid{display:flex;flex-wrap:wrap;justify-content:space-between;gap:28px;align-items:flex-start;}',
    '.foot-logo{height:32px;margin-bottom:16px;}',
    '.foot-col p,.foot-col a{font-size:var(--text-sm);color:var(--text-muted);line-height:1.9;display:block;}',
    '.foot-col a:hover{color:var(--text-accent);}',
    '.foot-bottom{margin-top:40px;padding-top:22px;border-top:1px solid var(--border-champagne);font-size:var(--text-caption);color:var(--text-subtle);display:flex;flex-wrap:wrap;gap:8px 18px;justify-content:space-between;}',
    '.foot-social{display:flex;gap:12px;margin-top:16px;}',
    '.foot-social a{width:36px;height:36px;border-radius:9999px;background:var(--surface-card);border:1px solid var(--border-hairline);display:grid;place-items:center;color:var(--text-muted);font-size:16px;transition:background var(--dur-fast) var(--ease-cushion),color var(--dur-fast) var(--ease-cushion);}',
    '.foot-social a:hover{background:var(--action);color:#fff;border-color:var(--action);}'
  ].join('');
  document.head.appendChild(style);

  // ── 2. Footer HTML ─────────────────────────────────────────────────
  var footerHTML = '<footer class="site">' +
    '<div class="wrap">' +
      '<div class="foot-grid">' +
        '<div class="foot-col" style="max-width:300px;">' +
          '<img class="foot-logo" src="/assets/logo-olam.png" alt="Olam Med Spa">' +
          '<p>' +
            '<span class="only-en">La nueva belleza natural. Personalized, physician-supervised non-invasive aesthetic medicine in Pembroke Pines, FL.</span>' +
            '<span class="only-es">La nueva belleza natural. Medicina estética no invasiva, personalizada y supervisada por médicos en Pembroke Pines, FL.</span>' +
          '</p>' +
          '<div class="foot-social">' +
            '<a href="https://www.instagram.com/olammedspa/" target="_blank" rel="noopener" aria-label="Instagram">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>' +
            '</a>' +
            '<a href="https://www.youtube.com/channel/UClQbMWIxJrGFIx2Ptiu787g" target="_blank" rel="noopener" aria-label="YouTube">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>' +
            '</a>' +
            '<a href="https://www.facebook.com/olammedspa/" target="_blank" rel="noopener" aria-label="Facebook">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' +
            '</a>' +
          '</div>' +
        '</div>' +
        '<div class="foot-col">' +
          '<p style="color:var(--text-strong);font-weight:600;margin-bottom:4px;"><span class="only-en">Services</span><span class="only-es">Servicios</span></p>' +
          '<a href="/services/injectables/botox-dysport"><span class="only-en">Injectables</span><span class="only-es">Inyectables</span></a>' +
          '<a href="/services/aesthetic-services/chemical-peel"><span class="only-en">Aesthetic Services</span><span class="only-es">Servicios Estéticos</span></a>' +
          '<a href="/services/skin-tightening/agnes-rf"><span class="only-en">Skin Tightening</span><span class="only-es">Tensado de Piel</span></a>' +
          '<a href="/services/body-contouring/bodysculp"><span class="only-en">Body Contouring</span><span class="only-es">Contorno Corporal</span></a>' +
          '<a href="/services/laser-hair-removal/laser-hair-removal"><span class="only-en">Laser Hair Removal</span><span class="only-es">Depilación Láser</span></a>' +
          '<a href="/services/wellness-integrative/medical-weight-loss"><span class="only-en">Wellness &amp; Integrative</span><span class="only-es">Medicina Integrativa</span></a>' +
        '</div>' +
        '<div class="foot-col">' +
          '<p style="color:var(--text-strong);font-weight:600;margin-bottom:4px;"><span class="only-en">Clinic</span><span class="only-es">Clínica</span></p>' +
          '<a href="/about"><span class="only-en">About Us</span><span class="only-es">Nosotros</span></a>' +
          '<a href="/financing"><span class="only-en">Financing</span><span class="only-es">Financiamiento</span></a>' +
          '<a href="/contact"><span class="only-en">Contact</span><span class="only-es">Contacto</span></a>' +
          '<a href="/contact"><span class="only-en">Book a consultation</span><span class="only-es">Agenda una consulta</span></a>' +
        '</div>' +
        '<div class="foot-col">' +
          '<p style="color:var(--text-strong);font-weight:600;margin-bottom:4px;"><span class="only-en">Visit</span><span class="only-es">Visítanos</span></p>' +
          '<a href="tel:19542370930">954.237.0930</a>' +
          '<a href="mailto:info@olammedspa.com">info@olammedspa.com</a>' +
          '<p style="line-height:1.6;">17901 NW 5th St, Ste 201<br>Pembroke Pines, FL 33029</p>' +
          '<p><span class="only-en">Tue–Fri · 10am–6pm · Sat 9am–2pm</span><span class="only-es">Mar–Vie · 10am–6pm · Sáb 9am–2pm</span></p>' +
        '</div>' +
      '</div>' +
      '<div class="foot-bottom">' +
        '<span>&copy; <span id="year"></span> Olam Med Spa. <span class="only-en">All rights reserved.</span><span class="only-es">Todos los derechos reservados.</span></span>' +
        '<span style="display:flex;gap:18px;flex-wrap:wrap;">' +
          '<a href="/privacy-policy" style="color:inherit;text-decoration:none;"><span class="only-en">Policies</span><span class="only-es">Políticas</span></a>' +
          '<a href="/terms-and-conditions" style="color:inherit;text-decoration:none;"><span class="only-en">Terms &amp; Conditions</span><span class="only-es">Términos y Condiciones</span></a>' +
          '<span><span class="only-en">Individual results may vary.</span><span class="only-es">Los resultados varían según la persona.</span></span>' +
        '</span>' +
      '</div>' +
    '</div>' +
  '</footer>';

  var placeholder = document.getElementById('g-footer');
  if (placeholder) placeholder.outerHTML = footerHTML;

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

}());
