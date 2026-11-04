/**
 * ============================================================================
 * ANIME.JS v4 VAULT — PREVISUALIZACIÓN DE CONTENIDO CARGANDO (SKELETONS)
 * Preset: 03. Bento Dashboard Staggered Hydration
 * Archivo: animations/skeletons/bento-grid-cascade.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Cuatro módulos de dashboard que emergen desde estado wireframe.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_bento_grid_cascade(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1100 / speed);
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
