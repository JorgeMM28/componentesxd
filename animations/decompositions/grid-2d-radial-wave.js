/**
 * ============================================================================
 * ANIME.JS v4 VAULT — DESCOMPOSICIÓN DE COMPONENTES, 2D GRIDS & TIMERS
 * Preset: 02. 2D Matrix Radial Ripple (grid: [6, 4])
 * Archivo: animations/decompositions/grid-2d-radial-wave.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Onda expansiva desde el centro de una cuadrícula de 24 celdas.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_grid_2d_radial_wave(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(920 / speed);
  const ease = options.ease || 'inOutQuad';

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
