/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — KEYFRAMES, VALORES FUNCIÓN & STAGGER 1D/2D
 * 02. Keyframes de Animación por Tramos (0% -> 50% -> 100%)
 * Archivo: animations/keyframes-stagger/percentage-keyframes.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Define estados completos de transformación y escala en cada fotograma clave.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_percentage_keyframes(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outCubic',
    duration: options.duration || 1600,
    delay: stagger(options.stagger || 80)
  });
}
