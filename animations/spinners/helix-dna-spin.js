/**
 * ============================================================================
 * ANIME.JS v4 VAULT — SPINNERS ORBITALES, SVG & ROTORES TÉCNICOS
 * Preset: 06. Kinetic Phase-Shift Rotor
 * Archivo: animations/spinners/helix-dna-spin.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Nodos opuestos que intercambian posición y escala en bucle.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_helix_dna_spin(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1500 / speed);
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
