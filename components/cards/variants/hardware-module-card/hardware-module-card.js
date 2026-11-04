/**
 * ============================================================================
 * COMPONENTESXD — 08. Teenage-Style Hardware Synth Module Card (VANILLA JS CONTROLLER)
 * Archivo: components/cards/variants/hardware-module-card/hardware-module-card.js
 * ============================================================================
 */

export function initHardwareModuleCard(selector = '.cxd-cards-hardware-module-card') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
