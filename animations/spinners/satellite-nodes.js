/**
 * ============================================================================
 * ANIME.JS v4 VAULT — SPINNERS ORBITALES, SVG & ROTORES TÉCNICOS
 * Preset: 04. Orbital Satellite Nodes
 * Archivo: animations/spinners/satellite-nodes.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Cuatro nodos orbitando un núcleo pulsante con desfase stagger.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_satellite_nodes(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(1700 / speed);
  const ease = options.ease || 'inOutQuad';

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
