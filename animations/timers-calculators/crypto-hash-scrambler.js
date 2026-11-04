/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMERS (CREATETIMER), CALCULANDO & TELEMETRÍA
 * 03. Desencriptador / Scramble de Texto y Hashes
 * Archivo: animations/timers-calculators/crypto-hash-scrambler.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Permuta caracteres técnicos a alta velocidad antes de fijar el texto definitivo.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_crypto_hash_scrambler(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'linear',
    duration: options.duration || 1300,
    delay: stagger(options.stagger || 80)
  });
}
