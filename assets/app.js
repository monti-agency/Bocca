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
      navHome: 'الرئيسية', navAbout: 'من نحن', navCafe: 'الكافيه', navRest: 'المطعم', navBranches: 'فروعنا', navReviews: 'التقييمات', navContact: 'تواصل معنا', navOrder: 'اطلب الآن',
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
      sar: 'ر.س', kcal: 'سعرة',
      bestTitle: 'الأكثر طلباً', bestSub: 'أصناف يحبها ضيوفنا، اختر وأطلب.',
      title_reviews: 'آراء ضيوفنا | بوكا Bocca Di Caffè',
      desc_reviews: 'اقرأ آراء ضيوف بوكا في الباحة عن القهوة والحلويات والمطعم، وشاركنا رأيك على خرائط جوجل.',
      revTitle: 'آراء ضيوفنا', revSub: 'كلمات من ناس زاروا بوكا. رأيك يهمنا، ونقرأ كل تقييم.',
      revBtnGoogle: 'قيّمنا على خرائط جوجل', revBtnRead: 'اقرأ الآراء', revAll: 'الكل', revBoth: 'الكافيه والمطعم',
      revFilterAria: 'تصفية الآراء حسب القسم', revSortAria: 'ترتيب الآراء', revSortNew: 'الأحدث', revSortTop: 'الأعلى تقييماً',
      revStars: '{n} من ٥ نجوم', revMore: 'اقرأ المزيد', revLess: 'عرض أقل', revShowMore: 'عرض المزيد من الآراء',
      revEmpty: 'لا توجد آراء في هذا القسم بعد.', revNone: 'ستظهر آراء الضيوف هنا قريباً.',
      revSample: 'نموذج', revFeatured: 'رأي مميز', revPhotoAlt: 'صورة من زيارة الضيف',
      srcGoogle: 'خرائط جوجل', srcTiktok: 'تيك توك', srcSnap: 'سناب شات', srcWa: 'واتساب', srcDirect: 'زيارة مباشرة',
      revCtaTitle: 'جرّبت بوكا؟ شاركنا رأيك', revCtaSub: 'رأيك يساعد غيرك على الاختيار، ويساعدنا نتحسّن.',
      revCtaGoogle: 'قيّمنا على خرائط جوجل', revCtaGoogleSub: 'تقييم يستغرق دقيقة', revCtaWA: 'أرسل ملاحظتك', revCtaWAsub: 'عبر واتساب',
      waFeedback: 'السلام عليكم، عندي ملاحظة عن بوكا',
      revPhotoOpen: 'عرض صور الضيف', lbClose: 'إغلاق', lbPrev: 'الصورة السابقة', lbNext: 'الصورة التالية',
      placeTitle: 'زوروا بوكا في الباحة', placeSub: 'مكان هادئ بإطلالة جميلة، قهوة وفطور وحلويات ومطعم تحت سقف واحد.',
      placeImgAlt1: 'واجهة كافيه بوكا في الباحة', placeImgAlt2: 'مدخل بوكا دي كافيه والواجهة الزجاجية', placeBtn: 'الموقع على الخريطة', placeReviews: 'آراء ضيوفنا',
      ourPlace: 'مكاننا'
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
      navHome: 'Home', navAbout: 'About', navCafe: 'Café', navRest: 'Restaurant', navBranches: 'Branches', navReviews: 'Reviews', navContact: 'Contact', navOrder: 'Order now',
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
      sar: 'SAR', kcal: 'kcal',
      bestTitle: 'Best Sellers', bestSub: 'Guest favourites. Pick one and order.',
      title_reviews: 'Guest Reviews | Bocca Di Caffè',
      desc_reviews: 'Read what guests say about Bocca in Al-Baha: coffee, desserts and the restaurant. Share your own review on Google Maps.',
      revTitle: 'Guest reviews', revSub: 'Words from people who visited Bocca. Your opinion matters and we read every review.',
      revBtnGoogle: 'Review us on Google Maps', revBtnRead: 'Read the reviews', revAll: 'All', revBoth: 'Café & Restaurant',
      revFilterAria: 'Filter reviews by section', revSortAria: 'Sort reviews', revSortNew: 'Newest', revSortTop: 'Top rated',
      revStars: '{n} out of 5 stars', revMore: 'Read more', revLess: 'Show less', revShowMore: 'Show more reviews',
      revEmpty: 'No reviews in this section yet.', revNone: 'Guest reviews will appear here soon.',
      revSample: 'Sample', revFeatured: 'Featured review', revPhotoAlt: 'Photo from the guest visit',
      srcGoogle: 'Google Maps', srcTiktok: 'TikTok', srcSnap: 'Snapchat', srcWa: 'WhatsApp', srcDirect: 'In person',
      revCtaTitle: 'Visited Bocca? Share your thoughts', revCtaSub: 'Your review helps others choose and helps us improve.',
      revCtaGoogle: 'Review us on Google Maps', revCtaGoogleSub: 'Takes a minute', revCtaWA: 'Send feedback', revCtaWAsub: 'On WhatsApp',
      waFeedback: 'Hello, I have feedback about Bocca',
      revPhotoOpen: 'View guest photos', lbClose: 'Close', lbPrev: 'Previous photo', lbNext: 'Next photo',
      placeTitle: 'Visit Bocca in Al-Baha', placeSub: 'A calm spot with a lovely view: coffee, breakfast, desserts and a restaurant under one roof.',
      placeImgAlt1: 'Bocca café exterior in Al-Baha', placeImgAlt2: 'Bocca di Caffè entrance and glass facade', placeBtn: 'View on map', placeReviews: 'Guest reviews',
      ourPlace: 'Our place'
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
    $$('[data-wa]').forEach(function (a) { if (B.whatsapp) a.setAttribute('href', 'https://wa.me/' + B.whatsapp + '?text=' + encodeURIComponent(t(a.getAttribute('data-wa-msg') || 'waMsg'))); else a.hidden = true; });
    $$('[data-gr]').forEach(function (a) { if (B.googleReviews) a.setAttribute('href', B.googleReviews); else a.hidden = true; });
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

  /* ================= reviews page ================= */
  var rvRoot = $('#revRoot');
  if (rvRoot) {
    var RV = (window.BOCCA_REVIEWS || []).slice();
    var rvFilter = 'all', rvSort = 'new', rvShown = 9, RV_STEP = 9, rvAnimFrom = 0;
    var rvChips = $('#revChips'), rvSortEl = $('#revSort'), rvBar = $('#revBar'), rvFeat = $('#revFeat'), rvMoreWrap = $('#revMore'), rvEmpty = $('#revEmpty');
    var rvEsc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var rvBg = ['#3A1E12', '#8A5A33', '#4B2A1B', '#A9703F', '#6B3F25'];
    var rvSrc = { google: 'srcGoogle', tiktok: 'srcTiktok', snapchat: 'srcSnap', whatsapp: 'srcWa', direct: 'srcDirect' };
    var rvSec = { cafe: 'navCafe', rest: 'navRest', both: 'revBoth' };
    var rvName = function (r) { return (lang === 'en' && r.nameEn) ? r.nameEn : (r.name || ''); };
    var rvText = function (r) { return lang === 'en' ? (r.textEn || r.text || '') : (r.text || r.textEn || ''); };
    var rvPhotos = function (r) { return r.photos && r.photos.length ? r.photos : (r.photo ? [r.photo] : []); };
    var rvIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="11" r="2"/><path d="m21 16-5-4-8 7"/></svg>';
    var rvStars = function (r) { var n = Math.max(0, Math.min(5, Math.round(r.rating) || 0)); return '★★★★★'.slice(0, n) + '<span class="off">' + '★★★★★'.slice(0, 5 - n) + '</span>'; };
    var rvAria = function (r) { return t('revStars').replace('{n}', Math.max(0, Math.min(5, Math.round(r.rating) || 0))); };
    var rvDate = function (r) {
      if (!r.date) return '';
      var d = new Date(r.date + 'T00:00:00'); if (isNaN(d.getTime())) return '';
      try { return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA-u-ca-gregory' : 'en-US', { month: 'long', year: 'numeric' }).format(d); } catch (e) { return r.date; }
    };
    var rvMeta = function (r) { var p = []; if (r.source && rvSrc[r.source]) p.push(t(rvSrc[r.source])); var d = rvDate(r); if (d) p.push(d); return p.join(' · '); };
    var rvAvatar = function (r) {
      var n = rvName(r).trim(), ch = Array.from(n)[0] || '★', h = 0, i;
      for (i = 0; i < n.length; i++) h += n.charCodeAt(i);
      return '<span class="avatar" aria-hidden="true" style="--bg:' + rvBg[h % rvBg.length] + '">' + rvEsc(lang === 'en' ? ch.toUpperCase() : ch) + '</span>';
    };
    var rvInSec = function (r, k) { return k === 'all' || r.sec === k || r.sec === 'both'; };
    var rvPool = function () { var f = rvFeatured(); return RV.filter(function (r) { return r !== f; }); };
    var rvFeatured = function () { return RV.filter(function (r) { return r.featured; })[0] || null; };

    var renderReviews = function () {
      var feat = rvFeatured(), pool = rvPool();
      var cnt = function (k) { return pool.filter(function (r) { return rvInSec(r, k); }).length; };

      /* featured */
      if (feat) {
        rvFeat.hidden = false;
        rvFeat.innerHTML = '<figure class="feat"><svg class="orn-bg" aria-hidden="true" focusable="false"><rect width="100%" height="100%" fill="url(#pat-star)"/></svg>' +
          '<span class="feat-label">' + rvEsc(t('revFeatured')) + '</span>' +
          '<blockquote dir="auto">' + rvEsc(rvText(feat)) + '</blockquote>' +
          (rvPhotos(feat).length ? '<div class="feat-ph">' + rvPhotos(feat).slice(0, 3).map(function (p, pi) { return '<button type="button" data-ri="' + RV.indexOf(feat) + '" data-pi="' + pi + '" aria-label="' + rvEsc(t('revPhotoOpen')) + '"><img src="' + rvEsc(p) + '" alt="" loading="lazy" decoding="async"></button>'; }).join('') + '</div>' : '') +
          '<figcaption>' + rvAvatar(feat) + '<span class="rwho"><b>' + rvEsc(rvName(feat)) + '</b><small>' + rvEsc(rvMeta(feat)) + '</small></span>' +
          '<span class="rstars" role="img" aria-label="' + rvEsc(rvAria(feat)) + '">' + rvStars(feat) + '</span>' +
          (feat.sample ? '<span class="rtag sample">' + rvEsc(t('revSample')) + '</span>' : '') + '</figcaption></figure>';
      } else { rvFeat.hidden = true; rvFeat.innerHTML = ''; }

      /* nothing at all */
      if (!pool.length) {
        rvBar.hidden = true; rvRoot.innerHTML = ''; rvMoreWrap.hidden = true;
        rvEmpty.hidden = !!feat; rvEmpty.textContent = t('revNone'); return;
      }
      rvBar.hidden = false;

      /* chips */
      var defs = [['all', t('revAll')], ['cafe', t('navCafe')], ['rest', t('navRest')]];
      rvChips.innerHTML = defs.map(function (d) {
        return '<button class="chip' + (rvFilter === d[0] ? ' on' : '') + '" type="button" data-f="' + d[0] + '" aria-pressed="' + (rvFilter === d[0]) + '">' + rvEsc(d[1]) + '<small>' + cnt(d[0]) + '</small></button>';
      }).join('');
      rvSortEl.innerHTML = '<option value="new">' + rvEsc(t('revSortNew')) + '</option><option value="top">' + rvEsc(t('revSortTop')) + '</option>';
      rvSortEl.value = rvSort;

      /* list */
      var list = pool.filter(function (r) { return rvInSec(r, rvFilter); });
      list.sort(function (a, b) {
        var da = a.date || '', db = b.date || '';
        if (rvSort === 'top' && b.rating !== a.rating) return (b.rating || 0) - (a.rating || 0);
        return da < db ? 1 : da > db ? -1 : 0;
      });
      var vis = list.slice(0, rvShown);
      rvRoot.innerHTML = vis.map(function (r, idx) {
        var txt = rvText(r), long = txt.length > 210, tag = rvSec[r.sec] ? t(rvSec[r.sec]) : '';
        return '<article class="rcard' + (idx < rvAnimFrom ? ' still' : '') + '" style="--i:' + Math.max(0, idx - rvAnimFrom) + '">' +
          (rvPhotos(r).length ? '<button class="rphoto-btn" type="button" data-ri="' + RV.indexOf(r) + '" data-pi="0" aria-label="' + rvEsc(t('revPhotoOpen')) + '"><img class="rphoto" src="' + rvEsc(rvPhotos(r)[0]) + '" alt="" loading="lazy" decoding="async">' + (rvPhotos(r).length > 1 ? '<span class="rcount">' + rvIcon + rvPhotos(r).length + '</span>' : '') + '</button>' : '') +
          '<div class="rcard-b"><div class="rtop">' + rvAvatar(r) + '<span class="rwho"><b>' + rvEsc(rvName(r)) + '</b><small>' + rvEsc(rvMeta(r)) + '</small></span></div>' +
          '<div class="rstars" role="img" aria-label="' + rvEsc(rvAria(r)) + '">' + rvStars(r) + '</div>' +
          '<p class="rtext' + (long ? ' clamp' : '') + '" dir="auto">' + rvEsc(txt) + '</p>' +
          (long ? '<button class="rmore" type="button" aria-expanded="false">' + rvEsc(t('revMore')) + '</button>' : '') +
          ((tag || r.sample) ? '<div class="rfoot">' + (tag ? '<span class="rtag">' + rvEsc(tag) + '</span>' : '') + (r.sample ? '<span class="rtag sample">' + rvEsc(t('revSample')) + '</span>' : '') + '</div>' : '') +
          '</div></article>';
      }).join('');
      rvEmpty.hidden = list.length > 0; rvEmpty.textContent = t('revEmpty');
      rvMoreWrap.hidden = list.length <= rvShown;
      var mb = $('button', rvMoreWrap); if (mb) mb.textContent = t('revShowMore');
      rvAnimFrom = 1e9;   /* re-renders (language switch) don't replay the entrance */
    };
    renderMenu = renderReviews;

    /* ---- photo viewer ---- */
    var lb = null, lbImg, lbCap, lbPrev, lbNext, lbClose, lbR = 0, lbI = 0, lbFrom = null, lbX = null;
    var lbShow = function () {
      var ph = rvPhotos(RV[lbR]);
      lbImg.src = ph[lbI]; lbImg.alt = t('revPhotoAlt');
      lbCap.textContent = (ph.length > 1 ? (lbI + 1) + ' / ' + ph.length + ' · ' : '') + rvName(RV[lbR]);
      lbPrev.hidden = lbNext.hidden = ph.length < 2;
      lbClose.setAttribute('aria-label', t('lbClose')); lbPrev.setAttribute('aria-label', t('lbPrev')); lbNext.setAttribute('aria-label', t('lbNext'));
    };
    var lbStep = function (d) { var n = rvPhotos(RV[lbR]).length; if (n < 2) return; lbI = (lbI + d + n) % n; lbShow(); };
    var lbOff = function () { if (!lb || lb.hidden) return; lb.hidden = true; document.body.style.overflow = ''; if (lbFrom && lbFrom.focus) lbFrom.focus(); };
    var lbOpen = function (ri, pi, from) {
      if (!lb) {
        lb = document.createElement('div'); lb.className = 'lb'; lb.hidden = true; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
        lb.innerHTML = '<button class="lb-x" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>' +
          '<button class="lb-nav lb-prev" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg></button>' +
          '<figure class="lb-fig"><img alt=""><figcaption></figcaption></figure>' +
          '<button class="lb-nav lb-next" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></button>';
        document.body.appendChild(lb);
        lbImg = $('img', lb); lbCap = $('figcaption', lb); lbPrev = $('.lb-prev', lb); lbNext = $('.lb-next', lb); lbClose = $('.lb-x', lb);
        lbClose.addEventListener('click', lbOff);
        lbPrev.addEventListener('click', function () { lbStep(-1); }); lbNext.addEventListener('click', function () { lbStep(1); });
        lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb-fig')) lbOff(); });
        lb.addEventListener('touchstart', function (e) { lbX = e.touches[0].clientX; }, { passive: true });
        lb.addEventListener('touchend', function (e) {
          if (lbX === null) return; var dx = e.changedTouches[0].clientX - lbX; lbX = null;
          if (Math.abs(dx) > 50) lbStep((dx < 0) === (document.documentElement.dir !== 'rtl') ? 1 : -1);
        });
        document.addEventListener('keydown', function (e) {
          if (lb.hidden) return;
          if (e.key === 'Escape') { lbOff(); return; }
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { var s = e.key === 'ArrowRight' ? 1 : -1; lbStep(document.documentElement.dir === 'rtl' ? -s : s); return; }
          if (e.key === 'Tab') {
            var f = [lbClose, lbPrev, lbNext].filter(function (b) { return !b.hidden; }), i = f.indexOf(document.activeElement);
            e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
          }
        });
      }
      lbR = ri; lbI = pi; lbFrom = from; lbShow(); lb.hidden = false; document.body.style.overflow = 'hidden'; lbClose.focus();
    };
    var lbClick = function (e) {
      var b = e.target.closest ? e.target.closest('[data-ri]') : null; if (!b) return;
      lbOpen(+b.getAttribute('data-ri'), +b.getAttribute('data-pi') || 0, b);
    };
    rvRoot.addEventListener('click', lbClick); rvFeat.addEventListener('click', lbClick);

    rvChips.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('.chip') : null; if (!b) return;
      rvFilter = b.getAttribute('data-f'); rvShown = RV_STEP; rvAnimFrom = 0; renderReviews();
    });
    rvSortEl.addEventListener('change', function () { rvSort = rvSortEl.value; rvShown = RV_STEP; rvAnimFrom = 0; renderReviews(); });
    $('button', rvMoreWrap).addEventListener('click', function () { rvAnimFrom = rvShown; rvShown += RV_STEP; renderReviews(); });
    rvRoot.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('.rmore') : null; if (!b) return;
      var p = b.previousElementSibling, open = p.classList.toggle('clamp') === false;
      b.setAttribute('aria-expanded', open); b.textContent = t(open ? 'revLess' : 'revMore');
    });
  }

  /* ================= home: reviews strip + best sellers ================= */
  var proofEl = $('#proofQuotes'), bestEl = $('#bestRow');
  if (proofEl || bestEl) {
    var hEsc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var hFmt = function (p) { return (Math.round(p * 100) % 100 === 0) ? String(Math.round(p)) : p.toFixed(1); };
    var hFind = function (img) {
      var r = null;
      ['cafe', 'rest'].forEach(function (k) { ((M && M[k]) || []).forEach(function (c) { c.items.forEach(function (it) { if (!r && it.img === img) r = { it: it, sec: k }; }); }); });
      return r;
    };
    renderMenu = function () {
      if (proofEl) {
        var all = (window.BOCCA_REVIEWS || []).filter(function (r) { return !r.sample && r.rating >= 4; });
        var pick = all.filter(function (r) { return r.strip; }).slice(0, 3);
        if (!pick.length) pick = all.slice().sort(function (a, b) { return (a.text || '').length - (b.text || '').length; }).slice(0, 3);
        proofEl.hidden = !pick.length;
        proofEl.innerHTML = pick.map(function (r) {
          var txt = lang === 'en' ? (r.textEn || r.text || '') : (r.text || r.textEn || ''), nm = (lang === 'en' && r.nameEn) ? r.nameEn : (r.name || '');
          return '<figure class="q"><blockquote dir="auto">' + hEsc(txt) + '</blockquote><figcaption><span class="st" aria-hidden="true">★★★★★</span><span>' + hEsc(nm) + '</span></figcaption></figure>';
        }).join('');
      }
      if (bestEl) {
        var list = ((B.bestSellers || []).map(hFind)).filter(Boolean), sec = $('#best');
        if (sec) sec.hidden = !list.length;
        bestEl.innerHTML = list.map(function (o) {
          var it = o.it, name = lang === 'ar' ? it.ar : (it.en || it.ar);
          return '<a class="card best-card" href="' + (o.sec === 'cafe' ? 'cafe.html' : 'restaurant.html') + '"><div class="ph"><img src="' + it.img + '" alt="' + hEsc(name) + '" loading="lazy" decoding="async" width="640" height="640"></div>' +
            '<div class="card-b"><h3>' + hEsc(name) + '</h3><div class="card-f"><span class="price">' + hFmt(it.price) + '<small>' + hEsc(t('sar')) + '</small></span></div></div></a>';
        }).join('');
      }
    };
  }

  applyLang(); if (renderMenu) renderMenu();
})();
