/**
 * ============================================================================
 * COMPONENTESXD — 03. Searchable Multi-Option Dropdown Select (VANILLA JS CONTROLLER)
 * Archivo: components/forms/variants/custom-command-select/custom-command-select.js
 * ============================================================================
 */

export function initCustomCommandSelect(selector = '.cxd-forms-custom-command-select') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
