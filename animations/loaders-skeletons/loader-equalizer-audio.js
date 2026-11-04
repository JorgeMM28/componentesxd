/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — LOADERS, SPINNERS, 3 PUNTOS & SKELETONS CARGANDO
 * 06. Columnas de Telemetría / Ecualizador de Alta Frecuencia
 * Archivo: animations/loaders-skeletons/loader-equalizer-audio.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Barras verticales modulando su altura continuamente para indicar procesamiento de voz o IA.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_loader_equalizer_audio(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutSine',
    duration: options.duration || 750,
    delay: stagger(options.stagger || 80)
  });
}
