/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMELINES (CREATETIMELINE) & STEP-BY-STEP
 * 02. Wizard Step-by-Step Interactivo (Anterior / Siguiente / Auto)
 * Archivo: animations/timelines-workflows/step-by-step-wizard.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Controla manualmente cada paso del flujo o ejecuta la secuencia completa.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_step_by_step_wizard(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 700,
    delay: stagger(options.stagger || 80)
  });
}
