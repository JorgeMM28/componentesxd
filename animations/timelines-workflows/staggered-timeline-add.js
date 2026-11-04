/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMELINES (CREATETIMELINE) & STEP-BY-STEP
 * 04. Timeline con Posición Stagger (tl.add(el, params, stagger(80)))
 * Archivo: animations/timelines-workflows/staggered-timeline-add.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Inserta múltiples elementos en la línea de tiempo desfasados automáticamente.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_staggered_timeline_add(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 1300,
    delay: stagger(options.stagger || 80)
  });
}
