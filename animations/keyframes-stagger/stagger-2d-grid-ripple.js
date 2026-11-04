/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — KEYFRAMES, VALORES FUNCIÓN & STAGGER 1D/2D
 * 06. Stagger Espacial en Cuadrícula 2D (grid: [8, 4], from: "center")
 * Archivo: animations/keyframes-stagger/stagger-2d-grid-ripple.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Calcula la distancia euclidiana en una matriz 2D para expandir una onda radial exacta.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_stagger_2d_grid_ripple(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutQuad',
    duration: options.duration || 1250,
    delay: stagger(options.stagger || 80)
  });
}
