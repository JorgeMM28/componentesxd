/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 03. TRES PUNTOS ELÁSTICOS (STAGGER WAVE)
 * Archivo: animations/loaders/three-dots.js
 * ============================================================================
 * Utiliza `stagger()` para desfasar la onda vertical, escala y brillo entre
 * los tres nodos de carga.
 */
import { animate, stagger } from 'animejs';

export function createThreeDotsLoader(selector = '.cxd-dot-wave span') {
  return animate(selector, {
    y: ['0rem', '-0.85rem', '0rem'],
    scale: [1, 1.32, 1],
    opacity: [0.45, 1, 0.45],
    duration: 950,
    delay: stagger(140),
    ease: 'inOutCubic',
    loop: true
  });
}

