/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — EASINGS, FÍSICA SPRING (CREATESPRING) & STEPS
 * 06. Bucles, Alternate, Reverse & Control de Velocidad
 * Archivo: animations/easings-springs/loop-alternate-direction.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Inversión dinámica del sentido de reproducción y multiplicador de playbackRate.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_loop_alternate_direction(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutSine',
    duration: options.duration || 1200,
    delay: stagger(options.stagger || 80)
  });
}
