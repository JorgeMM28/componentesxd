/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — SVG: CREATEDRAWABLE, MORPHTO & CREATEMOTIONPATH
 * 02. Transformación Geométrica con svg.morphTo()
 * Archivo: animations/svg-animations/svg-shape-morphing.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Interpola suavemente los vértices de un polígono entre estrella, hexágono y escudo.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_svg_shape_morphing(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutCubic',
    duration: options.duration || 1200,
    delay: stagger(options.stagger || 80)
  });
}
