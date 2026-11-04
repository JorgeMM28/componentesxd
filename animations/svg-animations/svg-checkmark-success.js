/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — SVG: CREATEDRAWABLE, MORPHTO & CREATEMOTIONPATH
 * 05. Trazado Secuencial de Escudo + Checkmark de Verificación
 * Archivo: animations/svg-animations/svg-checkmark-success.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Dibuja primero el perímetro circular y enseguida traza la paloma de confirmación.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_svg_checkmark_success(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 1100,
    delay: stagger(options.stagger || 80)
  });
}
