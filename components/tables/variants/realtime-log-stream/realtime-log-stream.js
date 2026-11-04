/**
 * ============================================================================
 * COMPONENTESXD — 03. Realtime Telemetry & Log Stream Table (VANILLA JS CONTROLLER)
 * Archivo: components/tables/variants/realtime-log-stream/realtime-log-stream.js
 * ============================================================================
 */

export function initRealtimeLogStream(selector = '.cxd-tables-realtime-log-stream') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
