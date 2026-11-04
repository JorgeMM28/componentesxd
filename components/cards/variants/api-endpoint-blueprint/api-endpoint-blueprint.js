/**
 * ============================================================================
 * COMPONENTESXD — 03. REST / GraphQL Endpoint Spec Card (VANILLA JS CONTROLLER)
 * Archivo: components/cards/variants/api-endpoint-blueprint/api-endpoint-blueprint.js
 * ============================================================================
 */

export function initApiEndpointBlueprint(selector = '.cxd-cards-api-endpoint-blueprint') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
