/**
 * ============================================================================
 * COMPONENTESXD — 06. Raw JSON / Schema Diff Modal Inspector (VANILLA JS CONTROLLER)
 * Archivo: components/modals/variants/json-payload-lightbox/json-payload-lightbox.js
 * ============================================================================
 */

export function initJsonPayloadLightbox(selector = '.cxd-modals-json-payload-lightbox') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
