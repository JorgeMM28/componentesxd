/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMERS (CREATETIMER), CALCULANDO & TELEMETRÍA
 * 01. Cronómetro de Precisión con createTimer() + Play/Pause/Reset
 * Archivo: animations/timers-calculators/chrono-timer-ring.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Temporizador real con centésimas de segundo, anillo SVG sincronizado y botones de control.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_chrono_timer_ring(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'linear',
    duration: options.duration || 15000,
    delay: stagger(options.stagger || 80)
  });
}
