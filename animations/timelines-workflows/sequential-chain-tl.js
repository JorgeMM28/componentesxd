/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMELINES (CREATETIMELINE) & STEP-BY-STEP
 * 01. Cadena Secuencial con Solapamiento ("-=250")
 * Archivo: animations/timelines-workflows/sequential-chain-tl.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Cuatro etapas encadenadas donde cada nodo inicia 250ms antes de que termine el anterior.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_sequential_chain_tl(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outQuart',
    duration: options.duration || 1600,
    delay: stagger(options.stagger || 80)
  });
}
