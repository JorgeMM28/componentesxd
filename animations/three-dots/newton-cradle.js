/**
 * ============================================================================
 * ANIME.JS v4 VAULT — TRES PUNTOS, ONDAS ARMÓNICAS & INDICADORES
 * Preset: 03. Newton Pendulum Impulse Dots
 * Archivo: animations/three-dots/newton-cradle.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Transferencia de momento horizontal entre los nodos extremos.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_newton_cradle(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1000 / speed);
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
