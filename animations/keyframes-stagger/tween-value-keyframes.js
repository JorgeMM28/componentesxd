/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — KEYFRAMES, VALORES FUNCIÓN & STAGGER 1D/2D
 * 01. Keyframes de Propiedad (Arreglo de Valores Secuenciales)
 * Archivo: animations/keyframes-stagger/tween-value-keyframes.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Recorre múltiples puntos X e Y ([0, 140, 140, 0]) creando una trayectoria cuadrada cerrada.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_tween_value_keyframes(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'inOutQuad',
    duration: options.duration || 1800,
    delay: stagger(options.stagger || 80)
  });
}
