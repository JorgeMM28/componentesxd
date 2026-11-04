/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — STACKERS 3D, DESCOMPOSICIÓN DE COMPONENTE & FÍSICA
 * 04. Fragmentación y Reensamblado de Componente en Bloques
 * Archivo: animations/stackers-decomposition/fragment-shatter-grid.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Descompone un panel en 16 fragmentos dispersos y los vuelve a unir con precisión.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_fragment_shatter_grid(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutCubic',
    duration: options.duration || 1100,
    delay: stagger(options.stagger || 80)
  });
}
