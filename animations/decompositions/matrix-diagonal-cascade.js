/**
 * ============================================================================
 * ANIME.JS v4 VAULT — DESCOMPOSICIÓN DE COMPONENTES, 2D GRIDS & TIMERS
 * Preset: 05. 2D Grid Diagonal Stagger Cascade
 * Archivo: animations/decompositions/matrix-diagonal-cascade.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Fragmentación y reensamblado desde el primer nodo hasta el último.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_matrix_diagonal_cascade(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(880 / speed);
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
