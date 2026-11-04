/**
 * ============================================================================
 * COMPONENTESXD — 03. Critical Action Verification Modal (VANILLA JS CONTROLLER)
 * Archivo: components/modals/variants/destructive-confirm-dialog/destructive-confirm-dialog.js
 * ============================================================================
 */

export function initDestructiveConfirmDialog(selector = '.cxd-modals-destructive-confirm-dialog') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
