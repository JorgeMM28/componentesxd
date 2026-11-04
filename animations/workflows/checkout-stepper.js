/**
 * ============================================================================
 * ANIME.JS v4 VAULT — STEP-BY-STEP TIMELINES & PIPELINES SECUENCIALES
 * Preset: 02. Transactional Verification Stepper
 * Archivo: animations/workflows/checkout-stepper.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Secuencia de validación de orden, firma criptográfica y recibo.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_checkout_stepper(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(500 / speed);
  const ease = options.ease || 'outExpo';

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
