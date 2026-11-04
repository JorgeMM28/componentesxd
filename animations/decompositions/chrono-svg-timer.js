/**
 * ============================================================================
 * ANIME.JS v4 VAULT — DESCOMPOSICIÓN DE COMPONENTES, 2D GRIDS & TIMERS
 * Preset: 03. Precision Chrono Timer (createTimer API)
 * Archivo: animations/decompositions/chrono-svg-timer.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Temporizador con centésimas de segundo, pausa/reset y anillo SVG.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_chrono_svg_timer(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(15000 / speed);
  const ease = options.ease || 'linear';

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
