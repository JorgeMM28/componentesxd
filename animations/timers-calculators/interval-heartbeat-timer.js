/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMERS (CREATETIMER), CALCULANDO & TELEMETRÍA
 * 05. Pulso de Latido (Heartbeat Tick) con Callbacks onUpdate / onLoop
 * Archivo: animations/timers-calculators/interval-heartbeat-timer.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Contador de ciclos completados disparando ondas visuales en cada iteración del timer.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_interval_heartbeat_timer(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 1000,
    delay: stagger(options.stagger || 80)
  });
}
