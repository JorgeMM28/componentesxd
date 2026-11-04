/**
 * ============================================================================
 * ANIME.JS v4 VAULT — SPINNERS ORBITALES, SVG & ROTORES TÉCNICOS
 * Preset: 01. Dual-Ring SVG Dashoffset Rotor
 * Archivo: animations/spinners/dual-orbital-svg.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Anillo exterior con dashoffset variable y rotor interno invertido.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_dual_orbital_svg(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(2000 / speed);
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
