/**
 * ============================================================================
 * COMPONENTESXD — 01. Magnetic Cursor-Tracking Button (VANILLA JS CONTROLLER)
 * Archivo: components/buttons/variants/magnetic-precision/magnetic-precision.js
 * ============================================================================
 */

export function initMagneticPrecision(selector = '.cxd-buttons-magnetic-precision') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
