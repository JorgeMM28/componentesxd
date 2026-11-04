/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 3D CARD STACKERS & CARRUSELES DE PROFUNDIDAD
 * Preset: 01. 3D Vertical Depth Card Stacker
 * Archivo: animations/stackers/vertical-wallet-stack.js
 * Documentación: https://animejs.com
 * ============================================================================
 * La tarjeta frontal desciende y pasa al fondo mientras las demás avanzan.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_vertical_wallet_stack(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(520 / speed);
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
