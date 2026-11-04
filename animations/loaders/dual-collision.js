/**
 * ============================================================================
 * ANIME.JS v4 VAULT — BARRAS DE CARGA Y PULSOS INDETERMINADOS
 * Preset: 03. Dual-Beam Collision Loader
 * Archivo: animations/loaders/dual-collision.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Dos haces opuestos que convergen en el centro y rebotan.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_dual_collision(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1300 / speed);
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
