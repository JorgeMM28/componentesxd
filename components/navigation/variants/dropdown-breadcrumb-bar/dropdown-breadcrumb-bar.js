/**
 * ============================================================================
 * COMPONENTESXD — 02. Multi-Tenant Breadcrumb + Context Switcher (VANILLA JS CONTROLLER)
 * Archivo: components/navigation/variants/dropdown-breadcrumb-bar/dropdown-breadcrumb-bar.js
 * ============================================================================
 */

export function initDropdownBreadcrumbBar(selector = '.cxd-navigation-dropdown-breadcrumb-bar') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
