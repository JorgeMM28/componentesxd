/**
 * ============================================================================
 * ANIME.JS v4 VAULT — PREVISUALIZACIÓN DE CONTENIDO CARGANDO (SKELETONS)
 * Preset: 05. Analytics Chart Placeholder -> Bar Growth
 * Archivo: animations/skeletons/chart-bars-grow.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Transición desde bloques grises hacia barras de datos reales.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_chart_bars_grow(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1000 / speed);
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
