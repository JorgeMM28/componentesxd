/**
 * ============================================================================
 * ANIME.JS v4 VAULT — SPINNERS ORBITALES, SVG & ROTORES TÉCNICOS
 * Preset: 05. Precision Clockwork Tick Spinner
 * Archivo: animations/spinners/clockwork-ticks.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Rotación discreta por impulsos de 45 grados con rebote mecánico.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_clockwork_ticks(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1200 / speed);
  const ease = options.ease || 'outBack';

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
