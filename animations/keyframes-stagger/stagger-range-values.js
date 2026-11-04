/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — KEYFRAMES, VALORES FUNCIÓN & STAGGER 1D/2D
 * 05. Stagger de Rango de Valores (stagger([-45, 45]))
 * Archivo: animations/keyframes-stagger/stagger-range-values.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Distribuye ángulos y alturas progresivamente entre el mínimo y el máximo del rango.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_stagger_range_values(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutSine',
    duration: options.duration || 1300,
    delay: stagger(options.stagger || 80)
  });
}
