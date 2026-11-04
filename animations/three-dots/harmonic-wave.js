/**
 * ============================================================================
 * ANIME.JS v4 VAULT — TRES PUNTOS, ONDAS ARMÓNICAS & INDICADORES
 * Preset: 01. Harmonic Vertical Sine Wave
 * Archivo: animations/three-dots/harmonic-wave.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Onda sinusoidal clásica con stagger(130) y cambio de escala.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_harmonic_wave(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(900 / speed);
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
