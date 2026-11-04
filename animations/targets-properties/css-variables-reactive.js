/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TARGETS, CSS TRANSFORMS & PROPIEDADES DOM
 * 02. Animación Directa de Variables CSS (--radius, --hue, --scale)
 * Archivo: animations/targets-properties/css-variables-reactive.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Interpola Custom Properties CSS nativas en tiempo real para transformar geometría y color.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_css_variables_reactive(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutCubic',
    duration: options.duration || 1500,
    delay: stagger(options.stagger || 80)
  });
}
