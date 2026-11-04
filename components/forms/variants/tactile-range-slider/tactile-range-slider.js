/**
 * ============================================================================
 * COMPONENTESXD — 06. Precision Numeric Range & Step Control (VANILLA JS CONTROLLER)
 * Archivo: components/forms/variants/tactile-range-slider/tactile-range-slider.js
 * ============================================================================
 */

export function initTactileRangeSlider(selector = '.cxd-forms-tactile-range-slider') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
