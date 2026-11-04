/**
 * ============================================================================
 * ANIME.JS v4 VAULT — PREVISUALIZACIÓN DE CONTENIDO CARGANDO (SKELETONS)
 * Preset: 04. Avatar + Metadata Shimmer Sweep
 * Archivo: animations/skeletons/profile-header-load.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Previsualización de cabecera de usuario y métricas con revelación.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_profile_header_load(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(850 / speed);
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
