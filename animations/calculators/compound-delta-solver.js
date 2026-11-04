/**
 * ============================================================================
 * ANIME.JS v4 VAULT — CALCULANDO, CONTADORES & TELEMETRÍA NUMÉRICA
 * Preset: 06. Algorithmic Delta Convergence Readout
 * Archivo: animations/calculators/compound-delta-solver.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Muestra iteraciones de algoritmo y error residual tendiendo a cero.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_compound_delta_solver(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1500 / speed);
  const ease = options.ease || 'outExpo';

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
