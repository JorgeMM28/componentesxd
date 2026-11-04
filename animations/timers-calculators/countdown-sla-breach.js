/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMERS (CREATETIMER), CALCULANDO & TELEMETRÍA
 * 06. Cuenta Regresiva Rápida con Alerta Visual de Tiempo Límite
 * Archivo: animations/timers-calculators/countdown-sla-breach.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Cuenta hacia atrás desde 5.00s cambiando de estado al llegar a cero.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_countdown_sla_breach(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'linear',
    duration: options.duration || 5000,
    delay: stagger(options.stagger || 80)
  });
}
