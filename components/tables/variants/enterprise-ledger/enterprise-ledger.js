/**
 * ============================================================================
 * COMPONENTESXD — 01. Enterprise Financial Ledger Grid (VANILLA JS CONTROLLER)
 * Archivo: components/tables/variants/enterprise-ledger/enterprise-ledger.js
 * ============================================================================
 */

export function initEnterpriseLedger(selector = '.cxd-tables-enterprise-ledger') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
