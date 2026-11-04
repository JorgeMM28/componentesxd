/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 02. SPINNER ORBITAL CINÉTICO (SVG + DUAL RING)
 * Archivo: animations/loaders/orbital-spinner.js
 * ============================================================================
 * Combina rotación continua con mutación de `strokeDashoffset` para crear un
 * spinner de precisión estilo telemetría espacial.
 */
import { animate, createTimeline } from 'animejs';

export function createOrbitalSpinner(containerSelector) {
  const root = typeof containerSelector === 'string'
    ? document.querySelector(containerSelector)
    : containerSelector;
  if (!root) return null;

  const outerRing = root.querySelector('[data-spinner-outer]');
  const innerRing = root.querySelector('[data-spinner-inner]');
  const coreDot = root.querySelector('[data-spinner-core]');

  const tl = createTimeline({ loop: true });

  if (outerRing) {
    animate(outerRing, {
      rotate: '1turn',
      strokeDashoffset: [180, 45, 180],
      duration: 2200,
      ease: 'inOutSine',
      loop: true
    });
  }

  if (innerRing) {
    animate(innerRing, {
      rotate: '-1turn',
      duration: 1400,
      ease: 'linear',
      loop: true
    });
  }

  if (coreDot) {
    animate(coreDot, {
      scale: [0.75, 1.25],
      opacity: [0.5, 1],
      duration: 900,
      ease: 'inOutQuad',
      alternate: true,
      loop: true
    });
  }

  return tl;
}

