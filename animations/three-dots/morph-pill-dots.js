/**
 * ============================================================================
 * ANIME.JS v4 VAULT — TRES PUNTOS, ONDAS ARMÓNICAS & INDICADORES
 * Preset: 04. Width-Morphing Pill Dots
 * Archivo: animations/three-dots/morph-pill-dots.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Cada punto se alarga horizontalmente en una cápsula al activarse.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_morph_pill_dots(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(950 / speed);
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
