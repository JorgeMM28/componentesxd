/**
 * ============================================================================
 * COMPONENTESXD — 01. Dynamic Island Morphing Capsule (VANILLA JS CONTROLLER)
 * Archivo: components/toasts/variants/dynamic-island-capsule/dynamic-island-capsule.js
 * ============================================================================
 */

export function initDynamicIslandCapsule(selector = '.cxd-toasts-dynamic-island-capsule') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
