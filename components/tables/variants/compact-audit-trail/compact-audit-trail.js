/**
 * ============================================================================
 * COMPONENTESXD — 06. Security Audit & Diff History Table (VANILLA JS CONTROLLER)
 * Archivo: components/tables/variants/compact-audit-trail/compact-audit-trail.js
 * ============================================================================
 */

export function initCompactAuditTrail(selector = '.cxd-tables-compact-audit-trail') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
