/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — KEYFRAMES, VALORES FUNCIÓN & STAGGER 1D/2D
 * 03. Valores Basados en Función (el, index, total)
 * Archivo: animations/keyframes-stagger/function-based-values.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Cada elemento calcula su propio desplazamiento, ángulo y escala según su índice i.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_function_based_values(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 1200,
    delay: stagger(options.stagger || 80)
  });
}
