/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TARGETS, CSS TRANSFORMS & PROPIEDADES DOM
 * 06. Sintaxis Explícita { from, to, duration, delay } por Propiedad
 * Archivo: animations/targets-properties/from-to-explicit.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Cada propiedad define su propio rango from/to, curva easing y duración independiente.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_from_to_explicit(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 1300,
    delay: stagger(options.stagger || 80)
  });
}
