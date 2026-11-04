/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 3D CARD STACKERS & CARRUSELES DE PROFUNDIDAD
 * Preset: 05. RotateX Flip Card Queue
 * Archivo: animations/stackers/perspective-flip-stack.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Giro en eje X al cambiar la tarjeta activa de la pila.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_perspective_flip_stack(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(600 / speed);
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
