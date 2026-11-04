/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — SVG: CREATEDRAWABLE, MORPHTO & CREATEMOTIONPATH
 * 03. Seguimiento de Trayectoria con svg.createMotionPath()
 * Archivo: animations/svg-animations/svg-motion-path-orbit.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Hace que un nodo recorra exactamente una curva Bézier SVG orientando su ángulo automáticamente.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_svg_motion_path_orbit(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'linear',
    duration: options.duration || 2600,
    delay: stagger(options.stagger || 80)
  });
}
