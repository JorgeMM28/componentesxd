/**
 * ============================================================================
 * COMPONENTESXD — 04. Async 3-State Morph Button (Idle -> Run -> Done) (VANILLA JS CONTROLLER)
 * Archivo: components/buttons/variants/async-state-morph/async-state-morph.js
 * ============================================================================
 */

export function initAsyncStateMorph(selector = '.cxd-buttons-async-state-morph') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
