/**
 * ============================================================================
 * COMPONENTESXD — 03. Destructive Hold-to-Confirm Button (VANILLA JS CONTROLLER)
 * Archivo: components/buttons/variants/hold-to-confirm/hold-to-confirm.js
 * ============================================================================
 */

export function initHoldToConfirm(selector = '.cxd-buttons-hold-to-confirm') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
