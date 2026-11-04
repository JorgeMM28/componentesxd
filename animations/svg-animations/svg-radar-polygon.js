/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — SVG: CREATEDRAWABLE, MORPHTO & CREATEMOTIONPATH
 * 06. Gráfica Radar Poligonal Dinámica en SVG
 * Archivo: animations/svg-animations/svg-radar-polygon.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Recalcula y anima los vértices de una gráfica de rendimiento multidimensional.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_svg_radar_polygon(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 1000,
    delay: stagger(options.stagger || 80)
  });
}
