/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TARGETS, CSS TRANSFORMS & PROPIEDADES DOM
 * 04. Interpolación de Color, Sombras y Bordes
 * Archivo: animations/targets-properties/color-oklch-hex-morph.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Transición continua entre paletas cromáticas, box-shadow y border-radius.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_color_oklch_hex_morph(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutSine',
    duration: options.duration || 1600,
    delay: stagger(options.stagger || 80)
  });
}
