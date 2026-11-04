/**
 * ============================================================================
 * COMPONENTESXD — 01. Cursor-Tracking Radial Spotlight Card (VANILLA JS CONTROLLER)
 * Archivo: components/cards/variants/spotlight-radial-bento/spotlight-radial-bento.js
 * ============================================================================
 */

export function initSpotlightRadialBento(selector = '.cxd-cards-spotlight-radial-bento') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
