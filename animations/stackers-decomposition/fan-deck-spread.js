/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — STACKERS 3D, DESCOMPOSICIÓN DE COMPONENTE & FÍSICA
 * 03. Despliegue de Tarjetas en Abanico Radial
 * Archivo: animations/stackers-decomposition/fan-deck-spread.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Abre y cierra un mazo de tarjetas aplicando rotación y traslación proporcional.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_fan_deck_spread(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 650,
    delay: stagger(options.stagger || 80)
  });
}
