/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — EASINGS, FÍSICA SPRING (CREATESPRING) & STEPS
 * 05. Curva Cubic-Bezier de Precisión Arquitectónica
 * Archivo: animations/easings-springs/custom-cubic-bezier.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Aceleración inicial suave con frenado largo de alta elegancia para paneles UI.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_custom_cubic_bezier(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutCubic',
    duration: options.duration || 1300,
    delay: stagger(options.stagger || 80)
  });
}
