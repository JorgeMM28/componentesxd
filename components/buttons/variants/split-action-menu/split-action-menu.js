/**
 * ============================================================================
 * COMPONENTESXD — 05. Split Primary + Context Dropdown Button (VANILLA JS CONTROLLER)
 * Archivo: components/buttons/variants/split-action-menu/split-action-menu.js
 * ============================================================================
 */

export function initSplitActionMenu(selector = '.cxd-buttons-split-action-menu') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
