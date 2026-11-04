/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 3D CARD STACKERS & CARRUSELES DE PROFUNDIDAD
 * Preset: 02. Horizontal Fan Deck Shuffle
 * Archivo: animations/stackers/horizontal-deck-shuffle.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Desplazamiento lateral en abanico con rotación Z y reordenamiento.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_horizontal_deck_shuffle(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(560 / speed);
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
