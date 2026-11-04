/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 3D CARD STACKERS & CARRUSELES DE PROFUNDIDAD
 * Preset: 04. Expandable Notification Queue Stack
 * Archivo: animations/stackers/notification-Toast-stack.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Alterna entre pila compacta y lista expandida verticalmente.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_notification_Toast_stack(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(480 / speed);
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
