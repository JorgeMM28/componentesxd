/**
 * ============================================================================
 * COMPONENTESXD — 02. Conic Border Beam Button (VANILLA JS CONTROLLER)
 * Archivo: components/buttons/variants/conic-border-beam/conic-border-beam.js
 * ============================================================================
 */

export function initConicBorderBeam(selector = '.cxd-buttons-conic-border-beam') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
