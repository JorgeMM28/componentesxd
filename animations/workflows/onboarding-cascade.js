/**
 * ============================================================================
 * ANIME.JS v4 VAULT — STEP-BY-STEP TIMELINES & PIPELINES SECUENCIALES
 * Preset: 03. Progressive Workspace Setup Wizard
 * Archivo: animations/workflows/onboarding-cascade.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Anima simultáneamente la barra superior, el indicador y la tarjeta.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_onboarding_cascade(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(600 / speed);
  const ease = options.ease || 'outBack';

  return animate(targetSelector, {
    scale: options.scale || [0.94, 1.04, 1],
    opacity: options.opacity || [0.55, 1],
    duration: baseDuration,
    delay: stagger(options.staggerMs || 90),
    ease,
    loop: options.loop ?? true,
    alternate: true
  });
}
