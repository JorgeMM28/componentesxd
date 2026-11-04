/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Floating-Label Input (VANILLA JS CONTROLLER)
 * Archivo: components/forms/variants/floating-precision-input/floating-precision-input.js
 * ============================================================================
 */

export function initFloatingPrecisionInput(selector = '.cxd-forms-floating-precision-input') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
