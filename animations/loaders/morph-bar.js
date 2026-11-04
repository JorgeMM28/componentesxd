/**
 * ============================================================================
 * ANIME.JS v4 VAULT — BARRAS DE CARGA Y PULSOS INDETERMINADOS
 * Preset: 01. Morphing Elastic Progress Bar
 * Archivo: animations/loaders/morph-bar.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Barra que estira su factor de escala X mientras recorre el carril.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_morph_bar(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1500 / speed);
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
