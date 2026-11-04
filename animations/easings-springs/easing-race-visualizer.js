/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — EASINGS, FÍSICA SPRING (CREATESPRING) & STEPS
 * 02. Carrera Comparativa de Curvas Easing (linear vs outExpo vs outBack)
 * Archivo: animations/easings-springs/easing-race-visualizer.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Observa en paralelo cómo aceleran y frenan 4 curvas distintas sobre la misma distancia.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_easing_race_visualizer(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 1500,
    delay: stagger(options.stagger || 80)
  });
}
