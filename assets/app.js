(function () {
  'use strict';
  var B = window.BOCCA || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = window.__B_LANG === 'en' ? 'en' : 'ar';
  var page = document.body.getAttribute('data-pg') || 'home';

  /* ================= dictionary (Arabic / English) ================= */
  var D = {
    ar: {
      title_home: 'بوكا | Bocca Di Caffè - كافيه ومطعم في الباحة',
      desc_home: 'بوكا في الباحة: قهوة مختصة، فطور، حلويات وسوشي في الكافيه، وباستا وبيتزا وأطباق رئيسية في المطعم. شاهد القوائم بالصور والأسعار.',
      title_about: 'من نحن | بوكا Bocca Di Caffè',
      desc_about: 'تعرّف على بوكا في الباحة: كافيه للقهوة المختصة والحلويات والفطور، ومطعم عائلي للباستا والبيتزا والستيك والسوشي.',
      title_cafe: 'قائمة الكافيه | بوكا',
      desc_cafe: 'قهوة مختصة، مشروبات باردة وساخنة، فطور، مخبوزات وحلويات.',
      title_rest: 'قائمة المطعم | بوكا',
      desc_rest: 'سلطات ومقبلات، باستا وبيتزا وريزوتو، ستيك وسوشي وحلويات.',
      brand: 'بوكا', skip: 'انتقل إلى المحتوى', logoAria: 'بوكا - الصفحة الرئيسية', navAria: 'التنقل الرئيسي',
      navAbout: 'من نحن', navCafe: 'الكافيه', navRest: 'المطعم', navBranches: 'فروعنا', navContact: 'تواصل معنا', navOrder: 'اطلب الآن',
      menuOpen: 'فتح القائمة', langAria: 'Switch to English', waFloat: 'اطلب عبر واتساب',
      waMsg: 'السلام عليكم، أرغب بالطلب من بوكا',
      openBadge: 'مفتوح حتى ١٢ منتصف الليل',
      tagline: 'منبع القهوة في الباحة',
      heroIntro: 'قهوة مختصة وفطور وحلويات وسوشي في الكافيه، وباستا وبيتزا وأطباق رئيسية في المطعم.',
      heroOrder: 'اطلب الآن', heroMenu: 'تصفّح القوائم',
      ratingG: 'خرائط جوجل', ratingGsub: ' · +3,700 تقييم', heroImgAlt: 'مشروب بارد من كافيه بوكا',
      f1t: 'قهوة مختصة', f1s: 'تقطير وإسبرسو ومشروبات باردة وساخنة',
      f2t: 'حلويات وفطور', f2s: 'كريب وتشيز كيك وفطور ومخبوزات',
      f3t: 'مطعم عائلي', f3s: 'باستا وبيتزا وستيك وسوشي',
      f4t: 'درايف ثرو وجلسات', f4s: 'دورين وقسم للعائلات، وجلسات داخلية وخارجية',
      secTitle: 'اختر قسمك', secSub: 'قسمين في مكان واحد: كافيه للقهوة والحلويات والفطور، ومطعم للأطباق الكاملة.',
      cafeSmall: 'Café', cafeName: 'الكافيه', cafeDesc: 'قهوة مختصة وتقطير، مشروبات باردة وساخنة، فطور ومخبوزات وحلويات.',
      restSmall: 'Restaurant', restName: 'المطعم', restDesc: 'باستا وبيتزا وريزوتو وستيك وسوشي، مع سلطات ومقبلات وحلويات.',
      tc1: 'المشروبات الساخنة', tc2: 'القهوة الباردة', tc3: 'الحلويات', tc4: 'الفطور', tc5: 'المخبوزات', tc6: 'متجر بوكا',
      tr1: 'السلطات', tr2: 'الشوربات', tr3: 'المقبلات', tr4: 'الأطباق الرئيسية', tr5: 'الأطباق الجانبية', tr6: 'الريزوتو واللازانيا', tr7: 'التاكو',
      items: 'صنف', browse: 'تصفح القائمة ←',
      brTitle: 'فروعنا', mapBtn: 'الموقع على الخريطة',
      br1t: 'الفرع الرئيسي · الباهر', br1p: 'حي الباهر، على طريق الإمام محمد بن سعود قبل السيف جاليري، الباحة.', br1a: 'دورين مع قسم للعائلات في الدور العلوي', br1b: 'جلسات داخلية وخارجية',
      br2t: 'كشك الهاوية · درايف ثرو', br2p: 'الهاوية، طريق غابة شحبها، الباحة.', br2a: 'خدمة درايف ثرو', br2b: 'استلام سريع',
      br3t: 'رغدان', br3p: 'داخل غابة رغدان، في حديقة اللافندر خلف كوفي هافن.', br3a: 'تيك أواي بدون جلسات', br3b: 'أجواء الغابة',
      orderTitle: 'اطلب الآن', orderSub: 'اطلب عبر واتساب أو اتصل بنا أو اطلب عبر هنقرستيشن.',
      optWA: 'واتساب', optWAsub: 'راسلنا', optCall: 'اتصال', optHS: 'هنقرستيشن', optHSsub: 'توصيل لباب البيت',
      footHours: 'ساعات العمل', hoursText: 'نغلق الساعة ١٢ منتصف الليل', footSections: 'الأقسام', footContact: 'تواصل معنا',
      tkCafe: 'تيك توك الكافيه', tkRest: 'تيك توك المطعم', snap: 'سناب شات',
      copy: '© 2026 بوكا / Bocca Di Caffè · الباحة، المملكة العربية السعودية',
      storyTitle: 'عن بوكا', storyImgAlt: 'طبق ستيك من مطعم بوكا',
      storyP1: 'بوكا (Bocca Di Caffè) منبع القهوة في الباحة: كافيه يقدّم قهوة مختصة وتقطير وإسبرسو، ومشروبات باردة وساخنة، مع فطور ومخبوزات وحلويات وسوشي.',
      storyP2: 'وبجانب الكافيه مطعم عائلي يقدّم الباستا والبيتزا والريزوتو والستيك والسوشي، مع السلطات والمقبلات والحلويات. الفرع الرئيسي في الباهر من دورين مع قسم للعائلات، ولنا كشك درايف ثرو في الهاوية وفرع في غابة رغدان.',
      stItems: 'صنف في قوائمنا', stBranches: 'فروع في الباحة', stReviews: 'تقييم على خرائط جوجل', stRating: 'تقييم خرائط جوجل',
      crumbHome: 'الرئيسية', switchAria: 'تبديل القسم', searchPh: 'ابحث في القائمة…', searchAria: 'ابحث في القائمة', chipsAria: 'أقسام القائمة',
      cafeTitle: 'قائمة الكافيه', restTitle: 'قائمة المطعم',
      cafeSub: 'قهوة مختصة، مشروبات باردة وساخنة، فطور، مخبوزات وحلويات.',
      restSub: 'سلطات ومقبلات، باستا وبيتزا وريزوتو، ستيك وسوشي وحلويات.',
      cafeNote: 'الأسعار بالريال السعودي وتشمل ضريبة القيمة المضافة 15%.',
      restNote: 'الأسعار بالريال السعودي. السعرات الحرارية كما هي معروضة في قائمة المطعم.',
      empty: 'ما لقينا صنف بهذا الاسم. جرّب كلمة ثانية.',
      readyTitle: 'جاهز تطلب؟', readySub: 'اطلب عبر واتساب أو اتصل بنا أو اطلب عبر هنقرستيشن.',
      sar: 'ر.س', kcal: 'سعرة'
    },
    en: {
      title_home: 'Bocca Di Caffè | Café & Restaurant in Al-Baha',
      desc_home: 'Bocca in Al-Baha: specialty coffee, breakfast, desserts and sushi at the café, plus pasta, pizza and main dishes at the restaurant. Browse the menus with photos and prices.',
      title_about: 'About | Bocca Di Caffè',
      desc_about: 'Meet Bocca in Al-Baha: a café for specialty coffee, desserts and breakfast, and a family restaurant for pasta, pizza, steak and sushi.',
      title_cafe: 'Café Menu | Bocca',
      desc_cafe: 'Specialty coffee, hot and iced drinks, breakfast, bakery and desserts.',
      title_rest: 'Restaurant Menu | Bocca',
      desc_rest: 'Salads and starters, pasta, pizza and risotto, steak, sushi and desserts.',
      brand: 'Bocca', skip: 'Skip to content', logoAria: 'Bocca - Home', navAria: 'Main navigation',
      navAbout: 'About', navCafe: 'Café', navRest: 'Restaurant', navBranches: 'Branches', navContact: 'Contact', navOrder: 'Order now',
      menuOpen: 'Open menu', langAria: 'التحويل إلى العربية', waFloat: 'Order on WhatsApp',
      waMsg: 'Hello, I would like to order from Bocca',
      openBadge: 'Open until midnight',
      tagline: 'The coffee source in Al-Baha',
      heroIntro: 'Specialty coffee, breakfast, desserts and sushi at the café, plus pasta, pizza and main dishes at the restaurant.',
      heroOrder: 'Order now', heroMenu: 'Browse the menus',
      ratingG: 'Google Maps', ratingGsub: ' · 3,700+ reviews', heroImgAlt: 'Iced coffee from Bocca café',
      f1t: 'Specialty coffee', f1s: 'Filter brews, espresso, hot and iced drinks',
      f2t: 'Desserts & breakfast', f2s: 'Crêpes, cheesecake, breakfast and bakery',
      f3t: 'Family restaurant', f3s: 'Pasta, pizza, steak and sushi',
      f4t: 'Drive-thru & seating', f4s: 'Two floors with a family section, indoor and outdoor seating',
      secTitle: 'Choose your section', secSub: 'Two venues in one place: a café for coffee, desserts and breakfast, and a restaurant for full meals.',
      cafeSmall: 'Café', cafeName: 'The Café', cafeDesc: 'Specialty coffee and filter brews, hot and iced drinks, breakfast, bakery and desserts.',
      restSmall: 'Restaurant', restName: 'The Restaurant', restDesc: 'Pasta, pizza, risotto, steak and sushi, with salads, starters and desserts.',
      tc1: 'Hot drinks', tc2: 'Iced coffee', tc3: 'Desserts', tc4: 'Breakfast', tc5: 'Bakery', tc6: 'Bocca store',
      tr1: 'Salads', tr2: 'Soups', tr3: 'Appetizers', tr4: 'Main dishes', tr5: 'Sides', tr6: 'Risotto & lasagna', tr7: 'Tacos',
      items: 'items', browse: 'Browse the menu →',
      brTitle: 'Our branches', mapBtn: 'View on map',
      br1t: 'Main branch · Al-Baher', br1p: 'Al-Baher district, on Imam Muhammad bin Saud Road before Saif Gallery, Al-Baha.', br1a: 'Two floors with a family section upstairs', br1b: 'Indoor and outdoor seating',
      br2t: 'Al-Hawiya kiosk · Drive-thru', br2p: 'Al-Hawiya, Ghabat Shahba road, Al-Baha.', br2a: 'Drive-thru service', br2b: 'Quick pickup',
      br3t: 'Raghdan', br3p: 'Inside Raghdan forest, in the Lavender Garden behind Coffee Haven.', br3a: 'Takeaway only, no seating', br3b: 'Forest atmosphere',
      orderTitle: 'Order now', orderSub: 'Order on WhatsApp, give us a call, or use HungerStation.',
      optWA: 'WhatsApp', optWAsub: 'Message us', optCall: 'Call', optHS: 'HungerStation', optHSsub: 'Delivery to your door',
      footHours: 'Opening hours', hoursText: 'We close at 12 midnight', footSections: 'Sections', footContact: 'Contact us',
      tkCafe: 'Café TikTok', tkRest: 'Restaurant TikTok', snap: 'Snapchat',
      copy: '© 2026 Bocca Di Caffè · Al-Baha, Saudi Arabia',
      storyTitle: 'About Bocca', storyImgAlt: 'A steak dish from Bocca restaurant',
      storyP1: 'Bocca Di Caffè is a coffee source in Al-Baha: a café serving specialty coffee, filter brews and espresso, hot and iced drinks, along with breakfast, bakery, desserts and sushi.',
      storyP2: 'Alongside the café is a family restaurant serving pasta, pizza, risotto, steak and sushi, plus salads, starters and desserts. The main branch in Al-Baher has two floors and a family section, and we also have a drive-thru kiosk in Al-Hawiya and a branch in Raghdan forest.',
      stItems: 'Items on our menus', stBranches: 'Branches in Al-Baha', stReviews: 'Google Maps reviews', stRating: 'Google Maps rating',
      crumbHome: 'Home', switchAria: 'Switch section', searchPh: 'Search the menu…', searchAria: 'Search the menu', chipsAria: 'Menu sections',
      cafeTitle: 'Café Menu', restTitle: 'Restaurant Menu',
      cafeSub: 'Specialty coffee, hot and iced drinks, breakfast, bakery and desserts.',
      restSub: 'Salads and starters, pasta, pizza and risotto, steak, sushi and desserts.',
      cafeNote: 'Prices are in Saudi riyals and include 15% VAT.',
      restNote: 'Prices are in Saudi riyals. Calories are shown as listed on the restaurant menu.',
      empty: 'No items match your search. Try another word.',
      readyTitle: 'Ready to order?', readySub: 'Order on WhatsApp, give us a call, or use HungerStation.',
      sar: 'SAR', kcal: 'kcal'
    }
  };
  function t(k) { var v = D[lang][k]; return v == null ? (D.ar[k] == null ? '' : D.ar[k]) : v; }

  /* ================= apply language + contact links ================= */
  var M = window.BOCCA_MENU || null;
  var renderMenu = null;
  function countOf(k) { var n = 0; ((M && M[k]) || []).forEach(function (c) { n += c.items.length; }); return n; }
  function fillCounts() {
    $$('[data-count]').forEach(function (e) { var k = e.getAttribute('data-count'); e.textContent = k === 'all' ? countOf('cafe') + countOf('rest') : countOf(k); });
  }
  function setMeta() {
    var ti = t('title_' + page), de = t('desc_' + page);
    if (ti) document.title = ti;
    var md = $('meta[name="description"]'); if (md && de) md.setAttribute('content', de);
    [['og:title', ti], ['og:description', de]].forEach(function (p) { var m = $('meta[property="' + p[0] + '"]'); if (m && p[1]) m.setAttribute('content', p[1]); });
    var ol = $('meta[property="og:locale"]'); if (ol) ol.setAttribute('content', lang === 'ar' ? 'ar_SA' : 'en_US');
  }
  function setLinks() {
    $$('[data-call]').forEach(function (a) { if (B.phone) a.setAttribute('href', 'tel:' + B.phone); else a.hidden = true; });
    $$('[data-phone-text]').forEach(function (e) { e.textContent = B.phoneDisplay || ''; });
    $$('[data-hs]').forEach(function (a) { if (B.hungerStation) a.setAttribute('href', B.hungerStation); else a.hidden = true; });
    $$('[data-wa]').forEach(function (a) { if (B.whatsapp) a.setAttribute('href', 'https://wa.me/' + B.whatsapp + '?text=' + encodeURIComponent(t('waMsg'))); else a.hidden = true; });
    $$('[data-social]').forEach(function (li) {
      var k = li.getAttribute('data-social'), a = $('a', li), u = $('[data-user]', li);
      if (B[k]) { a.setAttribute('href', B[k]); if (u) u.textContent = B[k + 'User'] || ''; } else li.hidden = true;
    });
  }
  function applyLang() {
    var d = document.documentElement; d.lang = lang; d.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(function (e) { var v = t(e.getAttribute('data-i18n')); if (v !== '') e.textContent = v; });
    $$('[data-i18n-aria]').forEach(function (e) { e.setAttribute('aria-label', t(e.getAttribute('data-i18n-aria'))); });
    $$('[data-i18n-alt]').forEach(function (e) { e.setAttribute('alt', t(e.getAttribute('data-i18n-alt'))); });
    $$('[data-i18n-ph]').forEach(function (e) { e.setAttribute('placeholder', t(e.getAttribute('data-i18n-ph'))); });
    var lb = $('#langBtn'); if (lb) { lb.textContent = lang === 'ar' ? 'EN' : 'عربي'; lb.setAttribute('aria-label', t('langAria')); lb.setAttribute('lang', lang === 'ar' ? 'en' : 'ar'); }
    var bg = $('#burger'); if (bg) bg.setAttribute('aria-label', t('menuOpen'));
    setMeta(); setLinks(); fillCounts();
  }
  function setLang(l) {
    lang = l; try { localStorage.setItem('bocca_lang', l); } catch (e) {}
    try { var u = new URL(location.href); u.searchParams.set('lang', l); history.replaceState(null, '', u); } catch (e) {}
    applyLang(); if (renderMenu) renderMenu();
  }
  var lbtn = $('#langBtn'); if (lbtn) lbtn.addEventListener('click', function () { setLang(lang === 'ar' ? 'en' : 'ar'); });

  /* ================= nav, progress, preloader ================= */
  var nav = $('#nav'), burger = $('#burger'), mnav = $('#mnav'), prog = $('#progress');
  function onScroll() {
    if (nav) nav.classList.toggle('solid', window.scrollY > 30);
    if (prog) { var h = document.documentElement.scrollHeight - window.innerHeight; prog.style.transform = 'scaleX(' + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ')'; }
  }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  function setMenu(o) { burger.setAttribute('aria-expanded', o); mnav.classList.toggle('open', o); nav.classList.toggle('open', o); mnav.setAttribute('aria-hidden', !o); document.body.style.overflow = o ? 'hidden' : ''; }
  if (burger && mnav) {
    burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
    $$('a', mnav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }
  function endLoading() { document.body.classList.remove('loading'); try { sessionStorage.setItem('bocca_pre', '1'); } catch (e) {} }
  if (document.readyState === 'complete') setTimeout(endLoading, 500); else window.addEventListener('load', function () { setTimeout(endLoading, 500); });
  setTimeout(endLoading, 2500);

  /* ================= reveal, stagger, counters ================= */
  function runCount(el) {
    var target = parseFloat(el.getAttribute('data-target')) || 0, dec = +el.getAttribute('data-decimals') || 0, suf = el.getAttribute('data-suffix') || '', t0 = null;
    function fmtN(v) { return dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-US'); }
    if (reduce) { el.textContent = fmtN(target) + suf; return; }
    function step(ts) { if (t0 === null) t0 = ts; var p = Math.min((ts - t0) / 1400, 1), e = 1 - Math.pow(1 - p, 3); el.textContent = fmtN(target * e) + (p === 1 ? suf : ''); if (p < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  $$('.count[data-total]').forEach(function (c) { c.setAttribute('data-target', countOf('cafe') + countOf('rest')); });
  $$('[data-stagger]').forEach(function (g) { [].forEach.call(g.children, function (c, i) { c.classList.add('reveal'); c.style.transitionDelay = (i * 80) + 'ms'; }); });
  $$('.sec-card,.branch').forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); $$('.count', e.target).forEach(runCount); io.unobserve(e.target); } });
    }, { threshold: .12 });
    $$('.reveal').forEach(function (el) { io.observe(el); });
  } else { $$('.reveal').forEach(function (el) { el.classList.add('in'); }); $$('.count').forEach(runCount); }

  /* ================= hero particles ================= */
  (function () {
    var cv = $('#particles'); if (!cv || reduce || !cv.getContext) return;
    var ctx = cv.getContext('2d'), w = 0, h = 0, dots = [], run = true;
    function size() { var r = cv.parentNode.getBoundingClientRect(); w = cv.width = r.width; h = cv.height = r.height; }
    size(); window.addEventListener('resize', size);
    for (var i = 0; i < 36; i++) dots.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.8 + .6, v: Math.random() * .00035 + .00012, a: Math.random() * .5 + .2 });
    function loop() {
      if (!run) return; ctx.clearRect(0, 0, w, h);
      dots.forEach(function (d) { d.y -= d.v * 16; if (d.y < -.02) { d.y = 1.02; d.x = Math.random(); } ctx.beginPath(); ctx.arc(d.x * w, d.y * h, d.r, 0, 6.2832); ctx.fillStyle = 'rgba(227,197,165,' + d.a + ')'; ctx.fill(); });
      requestAnimationFrame(loop);
    }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { var on = es[0].isIntersecting; if (on && !run) { run = true; loop(); } run = on; }).observe(cv.parentNode);
    loop();
  })();

  /* ================= menu pages ================= */
  var root = $('#menuRoot');
  if (root && M) {
    var key = document.body.getAttribute('data-menu'), cats = M[key] || [];
    var chipsEl = $('#chips'), empty = $('#empty'), search = $('#menuSearch'), spy = null;
    var norm = function (s) { return String(s || '').toLowerCase().replace(/[\u064B-\u065F\u0670\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/ڤ/g, 'ف'); };
    var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var fmt = function (p) { return (Math.round(p * 100) % 100 === 0) ? String(Math.round(p)) : p.toFixed(1); };
    var isAr = function () { return lang === 'ar'; };
    var chipEls = function () { return $$('.chip'); };
    var setOn = function (id) {
      chipEls().forEach(function (b) {
        var on = b.getAttribute('data-t') === id; b.classList.toggle('on', on);
        if (on) { var bar = b.parentNode; bar.scrollTo({ left: b.offsetLeft - bar.clientWidth / 2 + b.clientWidth / 2, behavior: 'smooth' }); }
      });
    };
    var observeSpy = function () {
      if (!('IntersectionObserver' in window)) return; if (spy) spy.disconnect();
      spy = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting && !(search && search.value)) setOn(e.target.getAttribute('data-cat')); }); }, { rootMargin: '-35% 0px -60% 0px' });
      $$('.cat').forEach(function (s) { spy.observe(s); });
    };
    var filter = function () {
      var q = norm(search.value.trim()), shown = 0;
      $$('.cat').forEach(function (s) {
        var n = 0;
        $$('.card', s).forEach(function (c) { var m = !q || c.getAttribute('data-q').indexOf(q) > -1; c.hidden = !m; if (m) n++; });
        s.hidden = n === 0; shown += n;
      });
      empty.hidden = shown > 0;
    };
    renderMenu = function () {
      var html = '', chips = '', priceUnit = t('sar');
      cats.forEach(function (c, ci) {
        var main = isAr() ? c.ar : (c.en || c.ar), sub = isAr() ? c.en : c.ar;
        chips += '<button class="chip' + (ci === 0 ? ' on' : '') + '" type="button" data-t="' + c.id + '">' + esc(main) + '</button>';
        html += '<section class="cat" id="cat-' + c.id + '" data-cat="' + c.id + '"><div class="cat-head"><h2>' + esc(main) + '</h2><small dir="' + (isAr() ? 'ltr' : 'rtl') + '">' + esc(sub) + '</small><span class="n">' + c.items.length + ' ' + esc(t('items')) + '</span></div><div class="grid">';
        c.items.forEach(function (it) {
          var name = isAr() ? it.ar : (it.en || it.ar), sub2 = isAr() ? (it.en || '') : it.ar;
          var q = norm(it.ar + ' ' + (it.en || '') + ' ' + (it.desc || ''));
          html += '<article class="card" data-q="' + esc(q) + '"><div class="ph' + (it.img ? '' : ' none') + '">' + (it.img ? '<img src="' + it.img + '" alt="' + esc(name) + '" loading="lazy" decoding="async" width="640" height="480">' : '') + '</div><div class="card-b"><h3>' + esc(name) + '</h3>' +
            (sub2 && sub2.trim() !== name.trim() ? '<span class="en" dir="' + (isAr() ? 'ltr' : 'rtl') + '">' + esc(sub2) + '</span>' : '') +
            (it.desc && isAr() ? '<p class="desc">' + esc(it.desc) + '</p>' : '') +
            '<div class="card-f"><span class="price">' + fmt(it.price) + '<small>' + esc(priceUnit) + '</small></span>' + (it.cal ? '<span class="cal">' + it.cal + ' ' + esc(t('kcal')) + '</span>' : '') + '</div></div></article>';
        });
        html += '</div></section>';
      });
      root.innerHTML = html; chipsEl.innerHTML = chips;
      if (search && search.value) filter();
      observeSpy();
    };
    chipsEl.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('.chip') : null; if (!b) return;
      var tg = $('#cat-' + b.getAttribute('data-t')); if (!tg) return;
      var bar = $('#menuBar'), off = (nav ? nav.offsetHeight : 0) + (bar ? bar.offsetHeight : 0) + 12;
      window.scrollTo({ top: tg.getBoundingClientRect().top + window.pageYOffset - off, behavior: 'instant' });
    });
    if (search) search.addEventListener('input', filter);
  }

  applyLang(); if (renderMenu) renderMenu();
})();
