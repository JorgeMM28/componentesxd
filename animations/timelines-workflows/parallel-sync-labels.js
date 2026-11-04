/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMELINES (CREATETIMELINE) & STEP-BY-STEP
 * 03. Sincronización Paralela con Etiquetas de Timeline (.label())
 * Archivo: animations/timelines-workflows/parallel-sync-labels.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Dispara barra superior, tarjetas laterales y contador exactamente en la misma marca temporal.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_parallel_sync_labels(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 1400,
    delay: stagger(options.stagger || 80)
  });
}
