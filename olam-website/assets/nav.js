/* Olam Med Spa — Global Navigation
 * Edit THIS file to update the header across all pages.
 * Add new service categories here → all pages update automatically.
 */
(function () {
  'use strict';

  // ── 1. Inject header CSS ───────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    /* header pill */
    'header.site{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:50;width:calc(100% - 32px);max-width:1100px;background:rgba(255,255,255,0.96);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-radius:9999px;border:1px solid var(--border-hairline);box-shadow:0 4px 28px rgba(31,32,32,0.10),0 1px 4px rgba(31,32,32,0.06);}',
    'header.site .wrap{max-width:100%;margin:0;}',
    'header.site .row{display:flex;align-items:center;justify-content:space-between;height:62px;gap:12px;padding:6px 6px 6px 36px;}',
    '.site .logo{height:28px;width:auto;display:block;}',
    '.site .actions{display:flex;align-items:center;gap:10px;}',
    '.site .actions .btn{display:none;}',
    '@media(min-width:600px){.site .actions .btn{display:inline-flex;}}',
    '.lang{display:inline-flex;border:1px solid var(--border-soft);border-radius:9999px;overflow:hidden;}',
    '.lang button{font-family:var(--font-body);font-weight:var(--fw-semibold);font-size:var(--text-caption);letter-spacing:0.06em;padding:7px 12px;background:transparent;border:0;cursor:pointer;color:var(--text-muted);}',
    '.lang button[aria-pressed="true"]{background:var(--action);color:#fff;}',
    /* nav links */
    '.nav-links{display:none;gap:26px;font-size:var(--text-sm);color:var(--text-body);font-weight:var(--fw-regular);align-items:center;}',
    '.nav-links>a:hover{color:var(--text-accent);}',
    '@media(min-width:1040px){.nav-links{display:flex;}}',
    /* mega menu trigger */
    '.nav-item.has-mega{position:static;}',
    '.nav-trigger{background:none;border:none;cursor:pointer;font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-body);font-weight:var(--fw-regular);display:flex;align-items:center;gap:5px;padding:0;transition:color .15s;}',
    '.nav-trigger:hover{color:var(--text-accent);}',
    '.nav-chevron{transition:transform .22s;flex-shrink:0;}',
    '.nav-item.has-mega.mega-open .nav-chevron{transform:rotate(180deg);}',
    '.nav-item.has-mega.mega-open .nav-trigger{color:var(--text-accent);}',
    /* mega panel */
    '.mega-menu{position:fixed;top:90px;left:50%;transform:translateX(-50%) translateY(-8px);width:calc(100% - 32px);max-width:1100px;background:#fff;border-radius:18px;border:1px solid var(--border-hairline);box-shadow:0 24px 64px rgba(31,32,32,0.14),0 4px 16px rgba(31,32,32,0.07);display:flex;overflow:hidden;opacity:0;pointer-events:none;transition:opacity .22s ease,transform .22s ease;z-index:49;}',
    '.nav-item.has-mega.mega-open .mega-menu{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0);}',
    /* featured left */
    '.mega-featured{position:relative;width:230px;min-width:230px;background:var(--olam-blue);padding:36px 28px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;}',
    '.mega-featured::before{content:"";position:absolute;inset:0;background:url("/assets/pixel8-hero.jpg") center/cover no-repeat;opacity:0.14;}',
    '.mega-eyebrow{position:relative;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--champagne);margin-bottom:10px;font-weight:700;}',
    '.mega-title{position:relative;font-family:"Fraunces",serif;font-size:1.55rem;line-height:1.2;color:#fff;margin-bottom:20px;font-weight:400;}',
    '.mega-title em{font-style:italic;color:var(--champagne);}',
    '.mega-cta{position:relative;font-size:13px;font-weight:600;color:var(--champagne);text-decoration:none;display:inline-flex;align-items:center;gap:6px;transition:gap .2s,color .2s;}',
    '.mega-cta:hover{gap:10px;color:#fff;}',
    /* columns */
    '.mega-cols{flex:1;display:grid;grid-template-columns:repeat(3,1fr);padding:24px 24px 24px 24px;gap:0;}',
    '.mega-col{padding:12px 16px;border-left:1px solid var(--border-hairline);}',
    '.mega-col:nth-child(3n+1){border-left:none;padding-left:4px;}',
    '.mega-col:nth-child(n+4){border-top:1px solid var(--border-hairline);padding-top:16px;}',
    '.mega-cat{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--champagne);font-weight:700;margin-bottom:10px;white-space:nowrap;}',
    '.mega-col a{display:block;font-size:13px;color:var(--text-body);text-decoration:none;padding:4px 0;transition:color .15s,padding-left .15s;line-height:1.4;}',
    '.mega-col a:hover{color:var(--text-accent);padding-left:4px;}',
    '.mega-col a.active{color:var(--text-accent);font-weight:600;padding-left:0;}',
    /* mobile hamburger */
    '.nav-burger{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:9999px;border:1px solid var(--border-soft);background:transparent;cursor:pointer;flex-direction:column;padding:0;flex-shrink:0;}',
    '.nav-burger span{display:block;width:18px;height:1.5px;background:var(--text-strong);border-radius:2px;transition:transform .3s,opacity .3s,width .3s;}',
    '.nav-burger span:nth-child(2){margin:4.5px 0;}',
    '.nav-burger.open span:nth-child(1){transform:translateY(6px) rotate(45deg);}',
    '.nav-burger.open span:nth-child(2){opacity:0;width:0;}',
    '.nav-burger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg);}',
    '@media(min-width:1040px){.nav-burger{display:none;}}',
    /* mobile overlay */
    '.mobile-nav{position:fixed;inset:0;z-index:200;background:rgba(250,247,242,0.96);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .42s cubic-bezier(.4,0,.2,1);overflow-y:auto;}',
    '.mobile-nav.open{transform:translateX(0);}',
    'body.mnav-open{overflow:hidden;}',
    '.mnav-head{display:flex;align-items:center;justify-content:space-between;padding:22px 24px;flex-shrink:0;}',
    '.mnav-logo{height:26px;}',
    '.mnav-close{background:none;border:1px solid var(--border-soft);border-radius:9999px;width:40px;height:40px;color:var(--text-strong);font-size:16px;cursor:pointer;display:grid;place-items:center;flex-shrink:0;line-height:1;}',
    '.mnav-body{flex:1;padding:4px 24px 24px;display:flex;flex-direction:column;}',
    '.mnav-link{display:block;font-family:var(--font-body);font-size:1.55rem;font-weight:300;color:var(--text-strong);text-decoration:none;padding:14px 0;border-bottom:1px solid var(--border-hairline);line-height:1.2;transition:color .2s;letter-spacing:-.01em;}',
    '.mnav-link:hover{color:var(--text-accent);}',
    '.mnav-has-sub{border-bottom:1px solid var(--border-hairline);}',
    '.mnav-strigger{background:none;border:none;width:100%;text-align:left;font-family:var(--font-body);font-size:1.55rem;font-weight:300;color:var(--text-strong);padding:14px 0;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;line-height:1.2;letter-spacing:-.01em;}',
    '.mnav-schevron{transition:transform .25s;flex-shrink:0;opacity:0.4;}',
    '.mnav-has-sub.sub-open .mnav-schevron{transform:rotate(180deg);}',
    '.mnav-sub{display:none;padding:4px 0 16px 2px;}',
    '.mnav-has-sub.sub-open .mnav-sub{display:block;}',
    '.mnav-cat{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--text-accent);font-weight:700;margin:16px 0 5px;}',
    '.mnav-cat:first-child{margin-top:6px;}',
    '.mnav-sub a{display:block;font-size:14px;color:var(--text-muted);text-decoration:none;padding:5px 0;transition:color .15s;}',
    '.mnav-sub a:hover,.mnav-sub a.active{color:var(--text-strong);}',
    '.mnav-foot{padding:20px 24px 44px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px solid var(--border-hairline);}',
    '.mnav-phone{font-size:15px;font-weight:600;color:var(--text-muted);text-decoration:none;transition:color .2s;}',
    '.mnav-phone:hover{color:var(--text-strong);}',
    '.mnav-book{background:var(--action);color:#fff;font-family:var(--font-body);font-weight:700;font-size:13px;padding:11px 22px;border-radius:9999px;text-decoration:none;white-space:nowrap;transition:background .2s;}',
    '.mnav-book:hover{background:var(--action-hover);}'
  ].join('');
  document.head.appendChild(style);

  // ── 2. Header HTML ─────────────────────────────────────────────────
  // TO ADD A NEW CATEGORY: add a <div class="mega-col"> block here.
  var headerHTML = '<header class="site">' +
    '<div class="wrap row">' +
      '<a href="/" aria-label="Olam Med Spa home"><img class="logo" src="/assets/logo-olam.png" alt="Olam Med Spa"></a>' +
      '<nav class="nav-links" aria-label="Primary">' +
        '<div class="nav-item has-mega">' +
          '<button class="nav-trigger" type="button" aria-haspopup="true" aria-expanded="false">' +
            '<span class="only-en">Services</span><span class="only-es">Servicios</span>' +
            '<svg class="nav-chevron" width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true"><path d="M1 1.5l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</button>' +
          '<div class="mega-menu" role="region" aria-label="Services menu">' +
            '<div class="mega-featured">' +
              '<span class="mega-eyebrow">Olam Med Spa</span>' +
              '<h3 class="mega-title">Explore All <em>Treatments</em></h3>' +
              '<a class="mega-cta" href="/#services"><span class="only-en">View All Services</span><span class="only-es">Ver Todos</span> →</a>' +
            '</div>' +
            '<div class="mega-cols">' +
              '<div class="mega-col">' +
                '<p class="mega-cat"><span class="only-en">Injectables</span><span class="only-es">Inyectables</span></p>' +
                '<a href="/services/injectables/botox-dysport">Botox &amp; Dysport</a>' +
                '<a href="/services/injectables/dermal-fillers"><span class="only-en">Dermal Fillers</span><span class="only-es">Rellenos Dérmicos</span></a>' +
                '<a href="/services/injectables/bioestimulator">Bioestimulator</a>' +
                '<a href="/services/injectables/prf">PRF</a>' +
              '</div>' +
              '<div class="mega-col">' +
                '<p class="mega-cat"><span class="only-en">Aesthetic Services</span><span class="only-es">Servicios Estéticos</span></p>' +
                '<a href="/services/aesthetic-services/chemical-peel"><span class="only-en">Chemical Peel</span><span class="only-es">Peeling Químico</span></a>' +
                '<a href="/services/aesthetic-services/hydrafacial">HydraFacial</a>' +
                '<a href="/services/aesthetic-services/microneedling">Microneedling</a>' +
                '<a href="/services/aesthetic-services/led-light-therapy"><span class="only-en">LED Light Therapy</span><span class="only-es">Terapia LED</span></a>' +
              '</div>' +
              '<div class="mega-col">' +
                '<p class="mega-cat"><span class="only-en">Skin Tightening</span><span class="only-es">Tensado de Piel</span></p>' +
                '<a href="/services/skin-tightening/agnes-rf">Agnes RF</a>' +
                '<a href="/services/skin-tightening/ultherapy">Ultherapy</a>' +
                '<a href="/services/skin-tightening/ipl-photofacial">IPL Photofacial</a>' +
                '<a href="/services/skin-tightening/advanced-microneedling">Olam Glow</a>' +
                '<a href="/services/skin-tightening/pixel8-rf-microneedling">PiXel8‑RF</a>' +
                '<a href="/services/laser-treatments/erbium-laser-resurfacing"><span class="only-en">Erbium Laser</span><span class="only-es">Láser Erbium</span></a>' +
              '</div>' +
              '<div class="mega-col">' +
                '<p class="mega-cat"><span class="only-en">Body Contouring</span><span class="only-es">Contorno Corporal</span></p>' +
                '<a href="/services/body-contouring/bodysculp">BodySculp</a>' +
                '<a href="/services/body-contouring/body-tone">Body Tone</a>' +
                '<a href="/services/body-contouring/mesotherapy">Mesotherapy</a>' +
              '</div>' +
              '<div class="mega-col">' +
                '<p class="mega-cat"><span class="only-en">Laser Hair Removal</span><span class="only-es">Depilación Láser</span></p>' +
                '<a href="/services/laser-hair-removal/laser-hair-removal"><span class="only-en">Laser Hair Removal</span><span class="only-es">Depilación Láser</span></a>' +
              '</div>' +
              '<div class="mega-col">' +
                '<p class="mega-cat"><span class="only-en">Wellness & Integrative</span><span class="only-es">Medicina Integrativa</span></p>' +
                '<a href="/services/wellness-integrative/medical-weight-loss"><span class="only-en">Medical Weight Loss</span><span class="only-es">Pérdida de Peso</span></a>' +
                '<a href="/services/wellness-integrative/hormone-replacement-therapy"><span class="only-en">Hormone Therapy</span><span class="only-es">Terapia Hormonal</span></a>' +
                '<a href="/services/wellness-integrative/laser-vein-removal"><span class="only-en">Laser Vein Removal</span><span class="only-es">Remoción de Venas</span></a>' +
                '<a href="/services/wellness-integrative/sclerotherapy">Sclerotherapy</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<a href="/about"><span class="only-en">About</span><span class="only-es">Nosotros</span></a>' +
        '<a href="/financing"><span class="only-en">Financing</span><span class="only-es">Financiamiento</span></a>' +
        '<a href="/contact"><span class="only-en">Contact</span><span class="only-es">Contacto</span></a>' +
        '<a href="https://olamskincare.com/" target="_blank" rel="noopener"><span class="only-en">Shop</span><span class="only-es">Tienda</span></a>' +
      '</nav>' +
      '<div class="actions">' +
        '<div class="lang" role="group" aria-label="Language">' +
          '<button type="button" data-lang-btn="en" aria-pressed="true">EN</button>' +
          '<button type="button" data-lang-btn="es" aria-pressed="false">ES</button>' +
        '</div>' +
        '<button class="nav-burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '<a class="btn btn-primary" href="/contact"><span class="only-en">Book My Consultation</span><span class="only-es">Agenda tu consulta</span> <span class="arr">→</span></a>' +
      '</div>' +
    '</div>' +
  '</header>';

  var placeholder = document.getElementById('g-header');
  if (placeholder) placeholder.outerHTML = headerHTML;

  // ── 3. Inject mobile overlay ──────────────────────────────────────
  var mobileHTML = '<div class="mobile-nav" id="mobile-nav" aria-hidden="true">' +
    '<div class="mnav-head">' +
      '<img class="mnav-logo" src="/assets/logo-olam.png" alt="Olam Med Spa">' +
      '<button class="mnav-close" aria-label="Close menu">&#x2715;</button>' +
    '</div>' +
    '<div class="mnav-body">' +
      '<div class="mnav-has-sub">' +
        '<button class="mnav-strigger" type="button">' +
          '<span class="only-en">Services</span><span class="only-es">Servicios</span>' +
          '<svg class="mnav-schevron" width="14" height="10" viewBox="0 0 10 7" fill="none" aria-hidden="true"><path d="M1 1.5l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
        '<div class="mnav-sub">' +
          '<p class="mnav-cat"><span class="only-en">Injectables</span><span class="only-es">Inyectables</span></p>' +
          '<a href="/services/injectables/botox-dysport">Botox &amp; Dysport</a>' +
          '<a href="/services/injectables/dermal-fillers"><span class="only-en">Dermal Fillers</span><span class="only-es">Rellenos Dérmicos</span></a>' +
          '<a href="/services/injectables/bioestimulator">Bioestimulator</a>' +
          '<a href="/services/injectables/prf">PRF</a>' +
          '<p class="mnav-cat"><span class="only-en">Aesthetic Services</span><span class="only-es">Servicios Estéticos</span></p>' +
          '<a href="/services/aesthetic-services/chemical-peel"><span class="only-en">Chemical Peel</span><span class="only-es">Peeling Químico</span></a>' +
          '<a href="/services/aesthetic-services/hydrafacial">HydraFacial</a>' +
          '<a href="/services/aesthetic-services/microneedling">Microneedling</a>' +
          '<a href="/services/aesthetic-services/led-light-therapy"><span class="only-en">LED Light Therapy</span><span class="only-es">Terapia LED</span></a>' +
          '<p class="mnav-cat"><span class="only-en">Skin Tightening</span><span class="only-es">Tensado de Piel</span></p>' +
          '<a href="/services/skin-tightening/agnes-rf">Agnes RF</a>' +
          '<a href="/services/skin-tightening/ultherapy">Ultherapy</a>' +
          '<a href="/services/skin-tightening/ipl-photofacial">IPL Photofacial</a>' +
          '<a href="/services/skin-tightening/advanced-microneedling">Olam Glow</a>' +
          '<a href="/services/skin-tightening/pixel8-rf-microneedling">PiXel8‑RF</a>' +
          '<a href="/services/laser-treatments/erbium-laser-resurfacing"><span class="only-en">Erbium Laser</span><span class="only-es">Láser Erbium</span></a>' +
          '<p class="mnav-cat"><span class="only-en">Body Contouring</span><span class="only-es">Contorno Corporal</span></p>' +
          '<a href="/services/body-contouring/bodysculp">BodySculp</a>' +
          '<a href="/services/body-contouring/body-tone">Body Tone</a>' +
          '<a href="/services/body-contouring/mesotherapy">Mesotherapy</a>' +
          '<a href="/services/laser-hair-removal/laser-hair-removal"><span class="only-en">Laser Hair Removal</span><span class="only-es">Depilación Láser</span></a>' +
          '<p class="mnav-cat"><span class="only-en">Wellness &amp; Integrative</span><span class="only-es">Medicina Integrativa</span></p>' +
          '<a href="/services/wellness-integrative/medical-weight-loss"><span class="only-en">Medical Weight Loss</span><span class="only-es">Pérdida de Peso</span></a>' +
          '<a href="/services/wellness-integrative/hormone-replacement-therapy"><span class="only-en">Hormone Therapy</span><span class="only-es">Terapia Hormonal</span></a>' +
          '<a href="/services/wellness-integrative/laser-vein-removal"><span class="only-en">Laser Vein Removal</span><span class="only-es">Remoción de Venas</span></a>' +
          '<a href="/services/wellness-integrative/sclerotherapy">Sclerotherapy</a>' +
        '</div>' +
      '</div>' +
      '<a class="mnav-link" href="/about"><span class="only-en">About</span><span class="only-es">Nosotros</span></a>' +
      '<a class="mnav-link" href="/financing"><span class="only-en">Financing</span><span class="only-es">Financiamiento</span></a>' +
      '<a class="mnav-link" href="/contact"><span class="only-en">Contact</span><span class="only-es">Contacto</span></a>' +
      '<a class="mnav-link" href="https://olamskincare.com/" target="_blank" rel="noopener"><span class="only-en">Shop</span><span class="only-es">Tienda</span></a>' +
    '</div>' +
    '<div class="mnav-foot">' +
      '<a class="mnav-phone" href="tel:19542370930">954.237.0930</a>' +
      '<a class="mnav-book" href="/contact"><span class="only-en">Book Consultation</span><span class="only-es">Agenda tu consulta</span></a>' +
    '</div>' +
  '</div>';
  document.body.insertAdjacentHTML('beforeend', mobileHTML);

  // ── 4. Mark active page in mega menu ──────────────────────────────
  var path = window.location.pathname;
  document.querySelectorAll('.mega-col a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // ── 4. Mega menu — delay-close bridges the pill→panel gap ─────────
  var item = document.querySelector('.nav-item.has-mega');
  if (item) {
    var menu = item.querySelector('.mega-menu');
    var timer;
    function openMenu()      { clearTimeout(timer); item.classList.add('mega-open'); }
    function scheduleClose() { timer = setTimeout(function () { item.classList.remove('mega-open'); }, 180); }
    item.addEventListener('mouseenter', openMenu);
    item.addEventListener('mouseleave', scheduleClose);
    menu.addEventListener('mouseenter', openMenu);
    menu.addEventListener('mouseleave', scheduleClose);
  }

  // ── 5. Language switcher ──────────────────────────────────────────
  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.langBtn === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('olam-lang', lang); } catch (e) {}
  }
  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.dataset.langBtn); });
  });
  try {
    var saved = localStorage.getItem('olam-lang');
    if (saved === 'es') applyLang('es');
  } catch (e) {}

  // ── 6. Mobile menu ────────────────────────────────────────────────
  var burger   = document.querySelector('.nav-burger');
  var mobileNav = document.getElementById('mobile-nav');
  var mClose   = mobileNav ? mobileNav.querySelector('.mnav-close') : null;
  var strigger = mobileNav ? mobileNav.querySelector('.mnav-strigger') : null;
  var hasSub   = mobileNav ? mobileNav.querySelector('.mnav-has-sub') : null;

  function openMNav() {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    if (burger) { burger.classList.add('open'); burger.setAttribute('aria-expanded', 'true'); }
    document.body.classList.add('mnav-open');
  }
  function closeMNav() {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    if (burger) { burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    document.body.classList.remove('mnav-open');
  }

  if (burger) burger.addEventListener('click', function () {
    mobileNav.classList.contains('open') ? closeMNav() : openMNav();
  });
  if (mClose) mClose.addEventListener('click', closeMNav);

  if (strigger && hasSub) {
    strigger.addEventListener('click', function () { hasSub.classList.toggle('sub-open'); });
  }

  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      if (a.getAttribute('href') === path) a.classList.add('active');
      if (!a.getAttribute('target')) a.addEventListener('click', closeMNav);
    });
  }

}());
