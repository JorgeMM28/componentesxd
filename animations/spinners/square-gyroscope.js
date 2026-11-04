/**
 * ============================================================================
 * ANIME.JS v4 VAULT — SPINNERS ORBITALES, SVG & ROTORES TÉCNICOS
 * Preset: 02. Nested Isometric Gyroscope Frames
 * Archivo: animations/spinners/square-gyroscope.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Tres marcos cuadrados concéntricos rotando en ángulos alternados.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_square_gyroscope(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1800 / speed);
  const ease = options.ease || 'inOutCubic';

  return animate(targetSelector, {
    scale: options.scale || [0.94, 1.04, 1],
    opacity: options.opacity || [0.55, 1],
    duration: baseDuration,
    delay: stagger(options.staggerMs || 90),
    ease,
    loop: options.loop ?? true,
    alternate: true
  });
}
