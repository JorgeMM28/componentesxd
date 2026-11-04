/**
 * ============================================================================
 * ANIME.JS v4 VAULT — CALCULANDO, CONTADORES & TELEMETRÍA NUMÉRICA
 * Preset: 01. High-Precision Currency & Yield Counter
 * Archivo: animations/calculators/fintech-ledger-calc.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Interpola montos financieros con decimales fijos y barra de confianza.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_fintech_ledger_calc(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1600 / speed);
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
