
(function () {
  'use strict';

  const EMAILJS_PUBLIC_KEY  = '1L_ZgbyHWUcnf4zTo';
  const EMAILJS_SERVICE_ID  = 'service_mi15fta';   
  const EMAILJS_TEMPLATE_ID = 'template_p3douhs';

  if (
    EMAILJS_PUBLIC_KEY  === '1L_ZgbyHWUcnf4zTo' ||
    EMAILJS_SERVICE_ID  === 'service_mi15fta' ||
    EMAILJS_TEMPLATE_ID === 'template_p3douhs'
  ) {
    console.warn('[Tracker] EmailJS config not set — tracking disabled.');
    return;
  }

  if (sessionStorage.getItem('vt_sent')) return;

  function parseBrowser(ua) {
    if (/SamsungBrowser/i.test(ua)) return 'Samsung Browser';
    if (/OPR|Opera/i.test(ua))      return 'Opera';
    if (/Edg\//i.test(ua))          return 'Microsoft Edge';
    if (/Firefox/i.test(ua))        return 'Firefox';
    if (/Chrome/i.test(ua))         return 'Chrome';
    if (/Safari/i.test(ua))         return 'Safari';
    return 'Unknown';
  }

  function parseOS(ua) {
    if (/Windows NT 10/i.test(ua))  return 'Windows 10/11';
    if (/Windows NT/i.test(ua))     return 'Windows (older)';
    if (/iPhone/i.test(ua))         return 'iOS (iPhone)';
    if (/iPad/i.test(ua))           return 'iOS (iPad)';
    if (/Android/i.test(ua))        return 'Android';
    if (/Mac OS X/i.test(ua))       return 'macOS';
    if (/Linux/i.test(ua))          return 'Linux';
    return 'Unknown';
  }

  function deviceType() {
    const ua = navigator.userAgent;
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) {
      return /iPad/i.test(ua) ? 'Tablet' : 'Mobile';
    }
    return 'Desktop';
  }

  async function fetchIPInfo() {
    try {
      const ctrl = new AbortController();
      const timeout = setTimeout(() => ctrl.abort(), 5000);
      const res = await fetch('https://ipapi.co/json/', { signal: ctrl.signal });
      clearTimeout(timeout);
      if (res.ok) return await res.json();
    } catch (_) { /* network error or timeout — no problem */ }
    return null;
  }

  async function trackVisit() {
    const ua   = navigator.userAgent;
    const now  = new Date();
    const ipInfo = await fetchIPInfo();

    const data = {
      // Time
      visit_time : now.toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }) + ' (Istanbul)',
      timezone   : Intl.DateTimeFormat().resolvedOptions().timeZone,

      // Browser / Device
      browser    : parseBrowser(ua),
      os         : parseOS(ua),
      device     : deviceType(),
      language   : navigator.language || 'Unknown',
      screen     : `${screen.width} × ${screen.height} @ ${screen.colorDepth}bit`,
      viewport   : `${window.innerWidth} × ${window.innerHeight}`,
      user_agent : ua,

      // Navigation
      page       : window.location.href,
      referrer   : document.referrer || '(direct)',

      // IP / Geo  — provided by ipapi.co (free, no personal account needed)
      ip         : ipInfo?.ip          || 'N/A',
      city       : ipInfo?.city        || 'N/A',
      region     : ipInfo?.region      || 'N/A',
      country    : ipInfo?.country_name|| 'N/A',
      isp        : ipInfo?.org         || 'N/A',
    };

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data);
      sessionStorage.setItem('vt_sent', '1');
    } catch (err) {
      console.error('[Tracker] Failed to send visit notification:', err);
    }
  }

  const sdkScript  = document.createElement('script');
  sdkScript.src    = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  sdkScript.async  = true;
  sdkScript.onload = function () {
    window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    trackVisit();
  };
  document.head.appendChild(sdkScript);

})();
