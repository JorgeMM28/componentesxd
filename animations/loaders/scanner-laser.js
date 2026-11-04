/**
 * ============================================================================
 * ANIME.JS v4 VAULT — BARRAS DE CARGA Y PULSOS INDETERMINADOS
 * Preset: 05. Horizontal Telemetry Scanner Beam
 * Archivo: animations/loaders/scanner-laser.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Barrido horizontal de ida y vuelta con estela de opacidad.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_scanner_laser(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1400 / speed);
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
