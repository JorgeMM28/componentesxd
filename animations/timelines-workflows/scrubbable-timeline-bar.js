/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMELINES (CREATETIMELINE) & STEP-BY-STEP
 * 06. Timeline Interactiva Controlada por Slider (seek / progress)
 * Archivo: animations/timelines-workflows/scrubbable-timeline-bar.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Arrastra el control deslizante para avanzar o retroceder cuadro por cuadro la línea de tiempo.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_scrubbable_timeline_bar(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'linear',
    duration: options.duration || 2000,
    delay: stagger(options.stagger || 80)
  });
}
