/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — STACKERS 3D, DESCOMPOSICIÓN DE COMPONENTE & FÍSICA
 * 02. Descomposición 3D de Componente en 4 Capas Estructurales
 * Archivo: animations/stackers-decomposition/component-3d-explode.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Separa en el espacio 3D el Chasis, la Superficie Glass, los Datos y la Capa de Acción.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_component_3d_explode(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 780,
    delay: stagger(options.stagger || 80)
  });
}
