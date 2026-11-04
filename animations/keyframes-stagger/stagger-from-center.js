/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — KEYFRAMES, VALORES FUNCIÓN & STAGGER 1D/2D
 * 04. Stagger Lineal desde el Centro (from: "center" | "first" | "last")
 * Archivo: animations/keyframes-stagger/stagger-from-center.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Propaga una onda simétrica desde el elemento central hacia los extremos.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_stagger_from_center(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 1100,
    delay: stagger(options.stagger || 80)
  });
}
