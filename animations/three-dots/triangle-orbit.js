/**
 * ============================================================================
 * ANIME.JS v4 VAULT — TRES PUNTOS, ONDAS ARMÓNICAS & INDICADORES
 * Preset: 05. Triangular Vertex Permutation
 * Archivo: animations/three-dots/triangle-orbit.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Tres nodos rotando sus vértices en formación triangular.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_triangle_orbit(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1200 / speed);
  const ease = options.ease || 'inOutQuart';

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
