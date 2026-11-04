/**
 * ============================================================================
 * COMPONENTESXD — 02. Slide-Over Telemetry Inspector Drawer (VANILLA JS CONTROLLER)
 * Archivo: components/modals/variants/slide-over-inspector-drawer/slide-over-inspector-drawer.js
 * ============================================================================
 */

export function initSlideOverInspectorDrawer(selector = '.cxd-modals-slide-over-inspector-drawer') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
