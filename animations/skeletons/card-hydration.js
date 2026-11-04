/**
 * ============================================================================
 * ANIME.JS v4 VAULT — PREVISUALIZACIÓN DE CONTENIDO CARGANDO (SKELETONS)
 * Preset: 01. Telemetry Card Skeleton -> Real Reveal
 * Archivo: animations/skeletons/card-hydration.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Pulso de líneas placeholder seguido de cascada stagger del contenido real.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_card_hydration(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(750 / speed);
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
