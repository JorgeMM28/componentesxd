/**
 * ============================================================================
 * COMPONENTESXD — 06. Tactical KBD Shortcut Command Button (VANILLA JS CONTROLLER)
 * Archivo: components/buttons/variants/kbd-shortcut-trigger/kbd-shortcut-trigger.js
 * ============================================================================
 */

export function initKbdShortcutTrigger(selector = '.cxd-buttons-kbd-shortcut-trigger') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
