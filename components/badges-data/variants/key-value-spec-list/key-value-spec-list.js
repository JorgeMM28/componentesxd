/**
 * ============================================================================
 * COMPONENTESXD — 04. Architectural Key-Value Description Grid (VANILLA JS CONTROLLER)
 * Archivo: components/badges-data/variants/key-value-spec-list/key-value-spec-list.js
 * ============================================================================
 */

export function initKeyValueSpecList(selector = '.cxd-badges-data-key-value-spec-list') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
