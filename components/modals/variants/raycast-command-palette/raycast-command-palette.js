/**
 * ============================================================================
 * COMPONENTESXD — 01. Command Palette (Cmd+K) Action Center (VANILLA JS CONTROLLER)
 * Archivo: components/modals/variants/raycast-command-palette/raycast-command-palette.js
 * ============================================================================
 */

export function initRaycastCommandPalette(selector = '.cxd-modals-raycast-command-palette') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
