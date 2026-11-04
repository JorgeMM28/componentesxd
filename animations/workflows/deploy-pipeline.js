/**
 * ============================================================================
 * ANIME.JS v4 VAULT — STEP-BY-STEP TIMELINES & PIPELINES SECUENCIALES
 * Preset: 01. 4-Stage CI/CD Deployment Pipeline
 * Archivo: animations/workflows/deploy-pipeline.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Avanza entre Build, Test, Security Scan y Edge Deploy con rebote.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_deploy_pipeline(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(550 / speed);
  const ease = options.ease || 'outQuart';

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
