/**
 * ============================================================================
 * ANIME.JS v4 VAULT — DESCOMPOSICIÓN DE COMPONENTES, 2D GRIDS & TIMERS
 * Preset: 06. SLA Breach Countdown & Alert Timer
 * Archivo: animations/decompositions/sla-countdown-pulse.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Cuenta regresiva rápida con pulsos visuales cada segundo.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_sla_countdown_pulse(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(10000 / speed);
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
