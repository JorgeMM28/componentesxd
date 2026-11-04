/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — SVG: CREATEDRAWABLE, MORPHTO & CREATEMOTIONPATH
 * 04. Impulsos de Datos en Red de Circuitos SVG
 * Archivo: animations/svg-animations/svg-circuit-pulse.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Paquetes luminosos viajando por múltiples pistas vectoriales hacia un procesador central.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_svg_circuit_pulse(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutSine',
    duration: options.duration || 1500,
    delay: stagger(options.stagger || 80)
  });
}
