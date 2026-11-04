/**
 * ============================================================================
 * ANIME.JS v4 VAULT — CALCULANDO, CONTADORES & TELEMETRÍA NUMÉRICA
 * Preset: 02. Cryptographic Hash & Matrix Compute
 * Archivo: animations/calculators/hash-scramble-compute.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Permuta caracteres hexadecimales antes de converger en el resultado.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_hash_scramble_compute(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1400 / speed);
  const ease = options.ease || 'linear';

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
