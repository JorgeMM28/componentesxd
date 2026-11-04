/**
 * ============================================================================
 * COMPONENTESXD — 05. Inline Editable Data Sheet (VANILLA JS CONTROLLER)
 * Archivo: components/tables/variants/inline-editable-sheet/inline-editable-sheet.js
 * ============================================================================
 */

export function initInlineEditableSheet(selector = '.cxd-tables-inline-editable-sheet') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
