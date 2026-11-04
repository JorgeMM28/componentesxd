/**
 * ============================================================================
 * ANIME.JS v4 VAULT — PREVISUALIZACIÓN DE CONTENIDO CARGANDO (SKELETONS)
 * Preset: 02. Multi-Row Data Table Skeleton Wave
 * Archivo: animations/skeletons/table-rows-shimmer.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Filas de tabla parpadeando en fase antes de poblar registros.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_table_rows_shimmer(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(950 / speed);
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
