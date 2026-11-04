/**
 * ============================================================================
 * COMPONENTESXD — 02. Hierarchical Tree & Sub-Row Table (VANILLA JS CONTROLLER)
 * Archivo: components/tables/variants/nested-tree-grid/nested-tree-grid.js
 * ============================================================================
 */

export function initNestedTreeGrid(selector = '.cxd-tables-nested-tree-grid') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
