/**
 * ============================================================================
 * COMPONENTESXD — 06. Technical Wireframe Empty State (VANILLA JS CONTROLLER)
 * Archivo: components/badges-data/variants/empty-state-blueprint/empty-state-blueprint.js
 * ============================================================================
 */

export function initEmptyStateBlueprint(selector = '.cxd-badges-data-empty-state-blueprint') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
