/**
 * ============================================================================
 * ANIME.JS v4 VAULT — TRES PUNTOS, ONDAS ARMÓNICAS & INDICADORES
 * Preset: 02. Concentric Scale & Opacity Pulse
 * Archivo: animations/three-dots/elastic-scale-pulse.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Expansión elástica en el sitio sin desplazamiento vertical.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_elastic_scale_pulse(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(850 / speed);
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
