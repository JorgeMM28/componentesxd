/**
 * ============================================================================
 * COMPONENTESXD — 02. Telemetry KPI + SVG Sparkline Card (VANILLA JS CONTROLLER)
 * Archivo: components/cards/variants/telemetry-sparkline-kpi/telemetry-sparkline-kpi.js
 * ============================================================================
 */

export function initTelemetrySparklineKpi(selector = '.cxd-cards-telemetry-sparkline-kpi') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
