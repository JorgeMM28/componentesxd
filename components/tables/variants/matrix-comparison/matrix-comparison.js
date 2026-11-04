/**
 * ============================================================================
 * COMPONENTESXD — 04. Sticky Spec & Feature Comparison Matrix (VANILLA JS CONTROLLER)
 * Archivo: components/tables/variants/matrix-comparison/matrix-comparison.js
 * ============================================================================
 */

export function initMatrixComparison(selector = '.cxd-tables-matrix-comparison') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
