/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — LOADERS, SPINNERS, 3 PUNTOS & SKELETONS CARGANDO
 * 01. Carga Sencilla (Barra Elástica Indeterminada)
 * Archivo: animations/loaders-skeletons/loader-simple-morph.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Barra minimalista que estira y encoge su longitud mientras recorre el carril.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_loader_simple_morph(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutQuad',
    duration: options.duration || 1400,
    delay: stagger(options.stagger || 80)
  });
}
