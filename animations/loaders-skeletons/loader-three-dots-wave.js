/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — LOADERS, SPINNERS, 3 PUNTOS & SKELETONS CARGANDO
 * 03. Tres Puntos Elásticos con Desfase Stagger
 * Archivo: animations/loaders-skeletons/loader-three-dots-wave.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Onda armónica vertical y de escala sobre tres nodos indicadores.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_loader_three_dots_wave(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutCubic',
    duration: options.duration || 900,
    delay: stagger(options.stagger || 80)
  });
}
