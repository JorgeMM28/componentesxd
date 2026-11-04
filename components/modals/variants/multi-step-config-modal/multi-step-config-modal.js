/**
 * ============================================================================
 * COMPONENTESXD — 04. Stepped Configuration Wizard Modal (VANILLA JS CONTROLLER)
 * Archivo: components/modals/variants/multi-step-config-modal/multi-step-config-modal.js
 * ============================================================================
 */

export function initMultiStepConfigModal(selector = '.cxd-modals-multi-step-config-modal') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
