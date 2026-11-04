/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Tree Sidebar Navigation (VANILLA JS CONTROLLER)
 * Archivo: components/navigation/variants/collapsible-tree-sidebar/collapsible-tree-sidebar.js
 * ============================================================================
 */

export function initCollapsibleTreeSidebar(selector = '.cxd-navigation-collapsible-tree-sidebar') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
