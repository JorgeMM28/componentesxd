/**
 * ============================================================================
 * ANIME.JS v4 VAULT — BARRAS DE CARGA Y PULSOS INDETERMINADOS
 * Preset: 04. Quantized Step Progress Loader
 * Archivo: animations/loaders/stepped-quantized.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Avance escalonado por tramos del 20% con pausa técnica.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_stepped_quantized(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1800 / speed);
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
