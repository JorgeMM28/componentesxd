/**
 * ============================================================================
 * COMPONENTESXD — 05. Full-Width Incident & Maintenance Strip (VANILLA JS CONTROLLER)
 * Archivo: components/toasts/variants/system-banner-strip/system-banner-strip.js
 * ============================================================================
 */

export function initSystemBannerStrip(selector = '.cxd-toasts-system-banner-strip') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
