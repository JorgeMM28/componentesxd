/**
 * ============================================================================
 * COMPONENTESXD — 03. Radial SVG Telemetry Gauges (VANILLA JS CONTROLLER)
 * Archivo: components/badges-data/variants/circular-svg-gauges/circular-svg-gauges.js
 * ============================================================================
 */

export function initCircularSvgGauges(selector = '.cxd-badges-data-circular-svg-gauges') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
