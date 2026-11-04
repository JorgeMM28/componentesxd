/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — STACKERS 3D, DESCOMPOSICIÓN DE COMPONENTE & FÍSICA
 * 05. Giro 3D de 180 Grados (Frente / Reverso de Tarjeta)
 * Archivo: animations/stackers-decomposition/flip-card-180.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Rota la tarjeta sobre su eje Y para alternar entre vista frontal y especificaciones traseras.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_flip_card_180(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 700,
    delay: stagger(options.stagger || 80)
  });
}
