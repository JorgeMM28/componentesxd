/**
 * ============================================================================
 * COMPONENTESXD — 06. Full Pagination + Page Size Selector Bar (VANILLA JS CONTROLLER)
 * Archivo: components/navigation/variants/pagination-matrix-bar/pagination-matrix-bar.js
 * ============================================================================
 */

export function initPaginationMatrixBar(selector = '.cxd-navigation-pagination-matrix-bar') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
