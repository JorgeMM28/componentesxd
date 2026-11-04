/**
 * ============================================================================
 * ANIME.JS v4 VAULT — DESCOMPOSICIÓN DE COMPONENTES, 2D GRIDS & TIMERS
 * Preset: 04. UI-to-Wireframe Structural Split
 * Archivo: animations/decompositions/wireframe-blueprint-split.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Desplaza los elementos internos dejando visible la retícula base.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_wireframe_blueprint_split(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(700 / speed);
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
