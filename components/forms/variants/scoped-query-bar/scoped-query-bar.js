/**
 * ============================================================================
 * COMPONENTESXD — 05. Scoped Filter & Query Input Bar (VANILLA JS CONTROLLER)
 * Archivo: components/forms/variants/scoped-query-bar/scoped-query-bar.js
 * ============================================================================
 */

export function initScopedQueryBar(selector = '.cxd-forms-scoped-query-bar') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
