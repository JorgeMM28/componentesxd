/**
 * ============================================================================
 * COMPONENTESXD — 07. Keyboard Shortcut Chord Display (VANILLA JS CONTROLLER)
 * Archivo: components/badges-data/variants/keyboard-shortcut-matrix/keyboard-shortcut-matrix.js
 * ============================================================================
 */

export function initKeyboardShortcutMatrix(selector = '.cxd-badges-data-keyboard-shortcut-matrix') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
