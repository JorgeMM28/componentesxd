/**
 * ============================================================================
 * COMPONENTESXD — 03. Floating Bottom Command Dock (VANILLA JS CONTROLLER)
 * Archivo: components/navigation/variants/floating-command-dock/floating-command-dock.js
 * ============================================================================
 */

export function initFloatingCommandDock(selector = '.cxd-navigation-floating-command-dock') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
