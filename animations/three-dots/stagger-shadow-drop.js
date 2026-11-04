/**
 * ============================================================================
 * ANIME.JS v4 VAULT — TRES PUNTOS, ONDAS ARMÓNICAS & INDICADORES
 * Preset: 06. Tactile Elevation & Shadow Wave
 * Archivo: animations/three-dots/stagger-shadow-drop.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Elevación vertical sincronizada con proyección de sombra.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_stagger_shadow_drop(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(900 / speed);
  const ease = options.ease || 'inOutSine';

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
