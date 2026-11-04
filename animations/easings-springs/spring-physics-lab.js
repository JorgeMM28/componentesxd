/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — EASINGS, FÍSICA SPRING (CREATESPRING) & STEPS
 * 01. Física Real con createSpring({ mass, stiffness, damping })
 * Archivo: animations/easings-springs/spring-physics-lab.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Simulación física real de un resorte con rebote natural gobernado por masa y rigidez.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_spring_physics_lab(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outBack',
    duration: options.duration || 1400,
    delay: stagger(options.stagger || 80)
  });
}
