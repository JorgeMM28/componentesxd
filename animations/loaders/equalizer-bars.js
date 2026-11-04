/**
 * ============================================================================
 * ANIME.JS v4 VAULT — BARRAS DE CARGA Y PULSOS INDETERMINADOS
 * Preset: 06. High-Frequency Equalizer Loader
 * Archivo: animations/loaders/equalizer-bars.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Barras verticales modulando scaleY de forma asíncrona.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_equalizer_bars(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(900 / speed);
  const ease = options.ease || 'inOutQuad';

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
