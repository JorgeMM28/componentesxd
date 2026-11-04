/**
 * ============================================================================
 * COMPONENTESXD — 08. Industrial Toggle Switch & Radio Cards (VANILLA JS CONTROLLER)
 * Archivo: components/forms/variants/toggle-switch-matrix/toggle-switch-matrix.js
 * ============================================================================
 */

export function initToggleSwitchMatrix(selector = '.cxd-forms-toggle-switch-matrix') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
