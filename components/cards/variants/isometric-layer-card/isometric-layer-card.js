/**
 * ============================================================================
 * COMPONENTESXD — 07. 3D Isometric Perspective Hover Card (VANILLA JS CONTROLLER)
 * Archivo: components/cards/variants/isometric-layer-card/isometric-layer-card.js
 * ============================================================================
 */

export function initIsometricLayerCard(selector = '.cxd-cards-isometric-layer-card') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
