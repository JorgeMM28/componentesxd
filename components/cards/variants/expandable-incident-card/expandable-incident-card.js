/**
 * ============================================================================
 * COMPONENTESXD — 06. Expandable Postmortem & Diagnostics Card (VANILLA JS CONTROLLER)
 * Archivo: components/cards/variants/expandable-incident-card/expandable-incident-card.js
 * ============================================================================
 */

export function initExpandableIncidentCard(selector = '.cxd-cards-expandable-incident-card') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
