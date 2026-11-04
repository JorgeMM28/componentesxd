/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 3D CARD STACKERS & CARRUSELES DE PROFUNDIDAD
 * Preset: 06. Z-Axis Tunnel Zoom Stacker
 * Archivo: animations/stackers/scale-tunnel-stack.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Efecto de cámara avanzando por un túnel de tarjetas.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_scale_tunnel_stack(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(500 / speed);
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
