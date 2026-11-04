/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TARGETS, CSS TRANSFORMS & PROPIEDADES DOM
 * 01. Transformaciones Abreviadas (x, y, rotate, scale, skew)
 * Archivo: animations/targets-properties/css-transforms-xyz.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Anima simultáneamente traslación, rotación en grados, escala y sesgado sin escribir cadenas transform largas.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_css_transforms_xyz(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 1200,
    delay: stagger(options.stagger || 80)
  });
}
