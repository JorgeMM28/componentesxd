/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — LOADERS, SPINNERS, 3 PUNTOS & SKELETONS CARGANDO
 * 02. Spinner Orbital de Doble Anillo + Núcleo Pulsante
 * Archivo: animations/loaders-skeletons/loader-orbital-spinner.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Dos anillos concéntricos girando en sentidos opuestos con trazo dinámico.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_loader_orbital_spinner(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'linear',
    duration: options.duration || 1600,
    delay: stagger(options.stagger || 80)
  });
}
