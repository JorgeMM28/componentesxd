/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMELINES (CREATETIMELINE) & STEP-BY-STEP
 * 05. Coreografía de Entrada de Dashboard Completo
 * Archivo: animations/timelines-workflows/ui-choreography-sequence.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Secuencia ordenada: 1. Chasis -> 2. Cabecera -> 3. Gráficas -> 4. Indicadores.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_ui_choreography_sequence(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outQuart',
    duration: options.duration || 1500,
    delay: stagger(options.stagger || 80)
  });
}
