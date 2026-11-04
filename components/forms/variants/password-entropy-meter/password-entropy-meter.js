/**
 * ============================================================================
 * COMPONENTESXD — 04. Password Input + Live Entropy Analyzer (VANILLA JS CONTROLLER)
 * Archivo: components/forms/variants/password-entropy-meter/password-entropy-meter.js
 * ============================================================================
 */

export function initPasswordEntropyMeter(selector = '.cxd-forms-password-entropy-meter') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
