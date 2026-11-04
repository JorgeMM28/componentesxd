/**
 * ============================================================================
 * ANIME.JS v4 VAULT — SPINNERS ORBITALES, SVG & ROTORES TÉCNICOS
 * Preset: 03. Avionics Radar Sweep Spinner
 * Archivo: animations/spinners/radar-sweep.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Barrido angular continuo de 360 grados con pulso de detección.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_radar_sweep(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1600 / speed);
  const ease = options.ease || 'linear';

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
