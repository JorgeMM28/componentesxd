/**
 * ============================================================================
 * ANIME.JS v4 VAULT — CALCULANDO, CONTADORES & TELEMETRÍA NUMÉRICA
 * Preset: 05. Stress-Test Benchmark Score Ticker
 * Archivo: animations/calculators/benchmark-fps-score.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Incremento acelerado con pulso de escala al alcanzar el máximo.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_benchmark_fps_score(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1700 / speed);
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
