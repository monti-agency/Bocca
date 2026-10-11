/* Bocca: loads the menu that the admin page published (Supabase) and replaces the built-in menu-data.js.
   If Supabase is not set up, is slow, or is offline, the site keeps using menu-data.js (or the last menu this device saw).
   Load order on every page: config.js, menu-data.js, supabase-config.js, menu-live.js, app.js */
(function () {
  'use strict';
  var C = window.BOCCA_SUPABASE || {};
  var ok = !!(C.url && C.anonKey && !/YOUR_/.test(C.url + C.anonKey)) && typeof fetch === 'function';
  var CK = 'bocca_menu_cache';

  function valid(m) {
    return !!m && Array.isArray(m.cafe) && Array.isArray(m.rest) &&
      [].concat(m.cafe, m.rest).every(function (c) { return c && c.id && Array.isArray(c.items); });
  }
  /* hides items marked hidden (sold out) and sections left empty */
  function clean(m) {
    var out = {};
    ['cafe', 'rest'].forEach(function (k) {
      out[k] = m[k].map(function (c) {
        var o = {}; for (var p in c) o[p] = c[p];
        o.items = c.items.filter(function (it) { return it && !it.hidden && typeof it.price === 'number' && isFinite(it.price); });
        return o;
      }).filter(function (c) { return c.items.length; });
    });
    return out;
  }

  window.BOCCA_MENU_READY = new Promise(function (resolve) {
    if (!ok) { resolve(); return; }
    var done = false, fin = function () { if (!done) { done = true; resolve(); } };
    var timer = setTimeout(fin, 2000);
    fetch(C.url + '/rest/v1/site_data?key=eq.menu&select=value', {
      headers: { apikey: C.anonKey, Authorization: 'Bearer ' + C.anonKey }, cache: 'no-store'
    }).then(function (r) { if (!r.ok) throw new Error('load'); return r.json(); })
      .then(function (rows) {
        if (rows && rows[0] && valid(rows[0].value)) {
          window.BOCCA_MENU = clean(rows[0].value);
          try { localStorage.setItem(CK, JSON.stringify(rows[0].value)); } catch (e) {}
        }
      })
      .catch(function () {
        try { var c = JSON.parse(localStorage.getItem(CK) || 'null'); if (valid(c) && !done) window.BOCCA_MENU = clean(c); } catch (e) {}
      })
      .then(function () { clearTimeout(timer); fin(); });
  });
})();
