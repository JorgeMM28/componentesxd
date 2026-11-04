/**
 * ============================================================================
 * ANIME.JS v4 VAULT — CALCULANDO, CONTADORES & TELEMETRÍA NUMÉRICA
 * Preset: 04. Token Quota & Bandwidth Estimator
 * Archivo: animations/calculators/quota-burn-rate.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Calcula consumo proyectado y ajusta el medidor de capacidad.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_quota_burn_rate(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1350 / speed);
  const ease = options.ease || 'outCubic';

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
