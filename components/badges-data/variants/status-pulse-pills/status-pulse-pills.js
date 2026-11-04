/**
 * ============================================================================
 * COMPONENTESXD — 01. Semantic Status Badges & Live Pulse Dots (VANILLA JS CONTROLLER)
 * Archivo: components/badges-data/variants/status-pulse-pills/status-pulse-pills.js
 * ============================================================================
 */

export function initStatusPulsePills(selector = '.cxd-badges-data-status-pulse-pills') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
