/**
 * ============================================================================
 * COMPONENTESXD — 08. Mechanical Hard-Offset Push Button (VANILLA JS CONTROLLER)
 * Archivo: components/buttons/variants/industrial-offset-trigger/industrial-offset-trigger.js
 * ============================================================================
 */

export function initIndustrialOffsetTrigger(selector = '.cxd-buttons-industrial-offset-trigger') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
