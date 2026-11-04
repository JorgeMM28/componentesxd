/**
 * ============================================================================
 * COMPONENTESXD — 05. Technical Documentation Scrollspy Rail (VANILLA JS CONTROLLER)
 * Archivo: components/navigation/variants/scrollspy-toc-rail/scrollspy-toc-rail.js
 * ============================================================================
 */

export function initScrollspyTocRail(selector = '.cxd-navigation-scrollspy-toc-rail') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
