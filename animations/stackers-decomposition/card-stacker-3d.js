/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — STACKERS 3D, DESCOMPOSICIÓN DE COMPONENTE & FÍSICA
 * 01. Stacker 3D Interactivo de Tarjetas (Rotar Pila al Frente/Fondo)
 * Archivo: animations/stackers-decomposition/card-stacker-3d.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Haz clic para enviar la tarjeta frontal al fondo mientras las demás avanzan en perspectiva 3D.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_card_stacker_3d(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 550,
    delay: stagger(options.stagger || 80)
  });
}
