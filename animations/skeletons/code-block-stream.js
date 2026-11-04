/**
 * ============================================================================
 * ANIME.JS v4 VAULT — PREVISUALIZACIÓN DE CONTENIDO CARGANDO (SKELETONS)
 * Preset: 06. Source Code AST Skeleton Stream
 * Archivo: animations/skeletons/code-block-stream.js
 * Documentación: https://animejs.com
 * ============================================================================
 * Simula la carga progresiva de líneas de código identadas.
 */
import { animate, stagger, createTimeline, createTimer } from 'animejs';

export function mount_code_block_stream(targetSelector, options = {}) {
  const speed = Number(options.speed || 1);
  const baseDuration = Math.round(900 / speed);
  const ease = options.ease || 'outCubic';

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
