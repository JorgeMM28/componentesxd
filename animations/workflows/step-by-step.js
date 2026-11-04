/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 05. STEP-BY-STEP WIZARD TIMELINE
 * Archivo: animations/workflows/step-by-step.js
 * ============================================================================
 * Orquesta flujos paso a paso (Onboarding, Checkout, Deploy Pipeline):
 *  - Avanza la barra de progreso con física suave
 *  - Ilumina y escala el nodo del paso activo
 *  - Anima la entrada del panel de contenido correspondiente
 */
import { animate, createTimeline } from 'animejs';

export function animateToStep(container, stepIndex, totalSteps = 4) {
  const root = typeof container === 'string' ? document.querySelector(container) : container;
  if (!root) return null;

  const progressFill = root.querySelector('[data-step-progress]');
  const nodes = Array.from(root.querySelectorAll('[data-step-node]'));
  const panels = Array.from(root.querySelectorAll('[data-step-panel]'));

  const percentage = Math.min(100, Math.max(0, (stepIndex / (totalSteps - 1)) * 100));

  const tl = createTimeline({
    defaults: { ease: 'outQuart', duration: 480 }
  });

  if (progressFill) {
    tl.add(progressFill, {
      width: `${percentage}%`
    });
  }

  nodes.forEach((node, idx) => {
    const isCompleted = idx < stepIndex;
    const isCurrent = idx === stepIndex;
    node.classList.toggle('is-completed', isCompleted);
    node.classList.toggle('is-current', isCurrent);

    if (isCurrent) {
      animate(node, {
        scale: [0.82, 1.14, 1],
        duration: 520,
        ease: 'outBack'
      });
    }
  });

  panels.forEach((panel, idx) => {
    const active = idx === stepIndex;
    panel.style.display = active ? 'block' : 'none';
    if (active) {
      animate(panel, {
        opacity: [0, 1],
        y: ['12px', '0px'],
        duration: 420,
        ease: 'outCubic'
      });
    }
  });

  return tl;
}

