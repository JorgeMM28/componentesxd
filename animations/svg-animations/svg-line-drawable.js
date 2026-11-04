/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — SVG: CREATEDRAWABLE, MORPHTO & CREATEMOTIONPATH
 * 01. Dibujo de Trazos SVG con svg.createDrawable() (draw: "0 1")
 * Archivo: animations/svg-animations/svg-line-drawable.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Dibuja progresivamente circuitos y firmas vectoriales animando la propiedad draw de 0 a 1.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_svg_line_drawable(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutQuad',
    duration: options.duration || 1800,
    delay: stagger(options.stagger || 80)
  });
}
