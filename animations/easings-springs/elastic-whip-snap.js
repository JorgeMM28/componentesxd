/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — EASINGS, FÍSICA SPRING (CREATESPRING) & STEPS
 * 04. Latigazo Elástico de Alta Velocidad (outElastic / outBack)
 * Archivo: animations/easings-springs/elastic-whip-snap.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Sobrepasa el punto final y oscila antes de estabilizarse en su coordenada.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_elastic_whip_snap(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 1100,
    delay: stagger(options.stagger || 80)
  });
}
