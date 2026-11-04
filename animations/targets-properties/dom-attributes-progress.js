/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TARGETS, CSS TRANSFORMS & PROPIEDADES DOM
 * 03. Atributos DOM, Inputs & Barras de Valor
 * Archivo: animations/targets-properties/dom-attributes-progress.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Muta atributos HTML (value, max, data-progress, aria-valuenow) de forma sincronizada.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_dom_attributes_progress(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outQuart',
    duration: options.duration || 1400,
    delay: stagger(options.stagger || 80)
  });
}
