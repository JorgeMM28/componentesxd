/**
 * ============================================================================
 * COMPONENTESXD — 07. Segmented Action Bar with Active Pill (VANILLA JS CONTROLLER)
 * Archivo: components/buttons/variants/segmented-mode-group/segmented-mode-group.js
 * ============================================================================
 */

export function initSegmentedModeGroup(selector = '.cxd-buttons-segmented-mode-group') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
