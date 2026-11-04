/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 3D CARD STACKERS & CARRUSELES DE PROFUNDIDAD
 * Preset: 03. Isometric Diagonal Layer Stacker
 * Archivo: animations/stackers/isometric-cascade-stack.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Tarjetas escalonadas en diagonal X/Y que ciclan su prioridad.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_isometric_cascade_stack(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(540 / speed);
  const ease = options.ease || 'outQuart';

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
