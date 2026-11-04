/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — EASINGS, FÍSICA SPRING (CREATESPRING) & STEPS
 * 03. Movimiento Discreto por Pasos (steps(6) / Cuantizado)
 * Archivo: animations/easings-springs/stepped-quantized-motion.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Divide la interpolación en saltos mecánicos exactos estilo relojería o pixel-art.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_stepped_quantized_motion(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'linear',
    duration: options.duration || 1600,
    delay: stagger(options.stagger || 80)
  });
}
