/**
 * ============================================================================
 * COMPONENTESXD — 05. Anchored Context Menu & Quick Popover (VANILLA JS CONTROLLER)
 * Archivo: components/modals/variants/anchored-context-popover/anchored-context-popover.js
 * ============================================================================
 */

export function initAnchoredContextPopover(selector = '.cxd-modals-anchored-context-popover') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
