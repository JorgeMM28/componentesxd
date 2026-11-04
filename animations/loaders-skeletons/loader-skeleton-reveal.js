/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — LOADERS, SPINNERS, 3 PUNTOS & SKELETONS CARGANDO
 * 04. Previsualización de Contenido Cargando (Skeleton -> Contenido Real)
 * Archivo: animations/loaders-skeletons/loader-skeleton-reveal.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Alterna en vivo entre el esqueleto pulsante de carga y la tarjeta hidratada con datos.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_loader_skeleton_reveal(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 800,
    delay: stagger(options.stagger || 80)
  });
}
