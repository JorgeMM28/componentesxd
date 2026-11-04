/**
 * ============================================================================
 * ANIME.JS v4 VAULT — STEP-BY-STEP TIMELINES & PIPELINES SECUENCIALES
 * Preset: 06. Zero-Downtime DB Migration Steps
 * Archivo: animations/workflows/schema-migration.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Orquesta Snapshot, Shadow Table, Sync y Cutover.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_schema_migration(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(580 / speed);
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
