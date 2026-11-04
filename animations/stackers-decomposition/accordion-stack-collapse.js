/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — STACKERS 3D, DESCOMPOSICIÓN DE COMPONENTE & FÍSICA
 * 06. Colapso y Expansión de Pila de Notificaciones
 * Archivo: animations/stackers-decomposition/accordion-stack-collapse.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Agrupa 4 notificaciones en una pila compacta o las despliega en lista completa.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_accordion_stack_collapse(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outQuart',
    duration: options.duration || 520,
    delay: stagger(options.stagger || 80)
  });
}
