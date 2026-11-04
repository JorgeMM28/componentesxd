/**
 * ============================================================================
 * ANIME.JS v4 VAULT — STEP-BY-STEP TIMELINES & PIPELINES SECUENCIALES
 * Preset: 05. Automated Incident Response Chain
 * Archivo: animations/workflows/incident-escalation.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Secuencia Detect -> Isolate -> Failover -> Resolved.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_incident_escalation(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(520 / speed);
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
