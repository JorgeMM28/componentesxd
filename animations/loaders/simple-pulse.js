/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 01. CARGA SENCILLA (MORPHING BAR & PULSE)
 * Archivo: animations/loaders/simple-pulse.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Uso:
 *   import { createSimplePulseLoader } from './animations/loaders/simple-pulse.js';
 *   const ctrl = createSimplePulseLoader('#mi-loader');
 */
import { animate } from 'animejs';

export function createSimplePulseLoader(containerSelector) {
  const root = typeof containerSelector === 'string'
    ? document.querySelector(containerSelector)
    : containerSelector;
  if (!root) return null;

  const bar = root.querySelector('.cxd-loader-bar-fill') || root;

  return animate(bar, {
    scaleX: [0.12, 0.85, 0.25, 1],
    translateX: ['-35%', '15%', '-10%', '0%'],
    opacity: [0.65, 1, 0.8, 1],
    duration: 1600,
    ease: 'inOutQuad',
    loop: true,
    alternate: true
  });
}

