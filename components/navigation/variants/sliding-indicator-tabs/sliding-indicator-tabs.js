/**
 * ============================================================================
 * COMPONENTESXD — 04. Precision Tab Bar with Sliding Hairline (VANILLA JS CONTROLLER)
 * Archivo: components/navigation/variants/sliding-indicator-tabs/sliding-indicator-tabs.js
 * ============================================================================
 */

export function initSlidingIndicatorTabs(selector = '.cxd-navigation-sliding-indicator-tabs') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
