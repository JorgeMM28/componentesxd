/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — LOADERS, SPINNERS, 3 PUNTOS & SKELETONS CARGANDO
 * 05. Bloques de Progreso Cuantizados en Cascada
 * Archivo: animations/loaders-skeletons/loader-segmented-blocks.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Ocho módulos de memoria que se encienden progresivamente.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_loader_segmented_blocks(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 1100,
    delay: stagger(options.stagger || 80)
  });
}
