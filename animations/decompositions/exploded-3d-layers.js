/**
 * ============================================================================
 * ANIME.JS v4 VAULT — DESCOMPOSICIÓN DE COMPONENTES, 2D GRIDS & TIMERS
 * Preset: 01. 3D Isometric Component Layer Decomposition
 * Archivo: animations/decompositions/exploded-3d-layers.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Separa un componente en sus 4 capas (Chasis, Superficie, Datos, Acción).
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_exploded_3d_layers(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(750 / speed);
  const ease = options.ease || 'outBack';

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
