/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 08. DESCOMPOSICIÓN DE COMPONENTE (EXPLODED VIEW + 2D GRID)
 * Archivo: animations/effects/component-decomposition.js
 * ============================================================================
 * Permite:
 *  A) Descomponer cualquier componente UI en sus capas estructurales (Chasis,
 *      Cristal, Telemetría, Acción) con separación en perspectiva 3D e isométrica.
 *  B) Ejecutar una onda de fragmentación 2D con `stagger(val, { grid: [cols, rows], from: 'center' })`.
 */
import { animate, stagger } from 'animejs';

export function toggleComponentDecomposition(container, decompose = true) {
  const root = typeof container === 'string' ? document.querySelector(container) : container;
  if (!root) return null;

  const layers = Array.from(root.querySelectorAll('[data-decompose-layer]'));

  if (decompose) {
    return animate(layers, {
      y: stagger([-36, 36]),
      x: stagger([-18, 18]),
      scale: stagger([0.92, 1.04]),
      rotateX: 18,
      rotateZ: -8,
      duration: 780,
      delay: stagger(75),
      ease: 'outBack'
    });
  } else {
    return animate(layers, {
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      rotateZ: 0,
      duration: 620,
      delay: stagger(55, { from: 'last' }),
      ease: 'outQuart'
    });
  }
}

export function triggerGridDecompositionWave(cellsSelector, cols = 6, rows = 4) {
  return animate(cellsSelector, {
    scale: [1, 0.25, 1.12, 1],
    rotate: ['0deg', '45deg', '0deg'],
    opacity: [1, 0.35, 1],
    duration: 950,
    delay: stagger(45, { grid: [cols, rows], from: 'center' }),
    ease: 'inOutQuad'
  });
}

