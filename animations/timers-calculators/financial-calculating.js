/**
 * ============================================================================
 * ANIME.JS v4 DOCUMENTATION & VAULT — TIMERS (CREATETIMER), CALCULANDO & TELEMETRÍA
 * 02. Motor "Calculando..." de Cifras Financieras y Confianza
 * Archivo: animations/timers-calculators/financial-calculating.js
 * Documentación Oficial: https://animejs.com/documentation/getting-started
 * ============================================================================
 * Interpola propiedades de un objeto JS desde $0.00 hasta el balance final con formato de moneda.
 */
import { animate, stagger, createTimeline, createTimer, createSpring, svg } from 'animejs';

export function run_financial_calculating(target, options = {}) {
  return animate(target, {
    x: options.x ?? [0, 120, 0],
    scale: options.scale ?? [1, 1.15, 1],
    ease: options.ease || 'outExpo',
    duration: options.duration || 1600,
    delay: stagger(options.stagger || 80)
  });
}
