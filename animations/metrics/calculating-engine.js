/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 07. CALCULANDO / TELEMETRÍA Y CONTADOR DE ALTA PRECISIÓN
 * Archivo: animations/metrics/calculating-engine.js
 * ============================================================================
 * Anima objetos JavaScript puros con `animate(stateObj, { ... })` para interpolar
 * cifras financieras, porcentajes de precisión, hashes de cálculo y barras.
 */
import { animate } from 'animejs';

export function runCalculationAnimation({
  valueEl,
  subValueEl,
  barEl,
  targetValue = 98420.75,
  prefix = '$',
  suffix = '',
  decimals = 2,
  duration = 1650
}) {
  const state = {
    current: 0,
    confidence: 0
  };

  if (barEl) {
    animate(barEl, {
      width: ['0%', '94%'],
      duration,
      ease: 'outExpo'
    });
  }

  return animate(state, {
    current: targetValue,
    confidence: 99.4,
    duration,
    ease: 'outExpo',
    onUpdate: () => {
      if (valueEl) {
        valueEl.textContent = `${prefix}${state.current.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        })}${suffix}`;
      }
      if (subValueEl) {
        subValueEl.textContent = `CONFIDENCE ${state.confidence.toFixed(1)}% · CONVERGED`;
      }
    }
  });
}

