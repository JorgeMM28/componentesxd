/**
 * ============================================================================
 * ANIME.JS v4 VAULT — CALCULANDO, CONTADORES & TELEMETRÍA NUMÉRICA
 * Preset: 03. Synchronized Triple KPI Telemetry
 * Archivo: animations/calculators/multi-metric-sync.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Actualiza RPS, Latencia ms y Error Rate en un único tick.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_multi_metric_sync(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1500 / speed);
  const ease = options.ease || 'outQuart';

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
