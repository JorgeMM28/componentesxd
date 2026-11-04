/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TARGETS, CSS TRANSFORMS & PROPIEDADES DOM
 * 05. Múltiples Targets Heterogéneos en una Sola Llamada
 * Archivo: animations/targets-properties/multi-target-array.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Coordina nodos DOM distintos dentro de un arreglo como primer argumento de animate().
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_multi_target_array(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 1100,
    delay: stagger(options.stagger || 80)
  });
}
