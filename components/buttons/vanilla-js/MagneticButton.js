/**
 * ============================================================================
 * COMPONENTESXD — MAGNETIC & ASYNC BUTTON (VANILLA JS)
 * Archivo: components/buttons/vanilla-js/MagneticButton.js
 * ============================================================================
 */
export function initMagneticButtons(selector = '[data-cxd-magnetic]') {
  const buttons = document.querySelectorAll(selector);

  buttons.forEach((btn) => {
    const strength = Number(btn.dataset.magneticStrength || 0.28);

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      btn.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}

export function bindAsyncButton(btn, asyncCallback) {
  btn.addEventListener('click', async () => {
    if (btn.classList.contains('is-loading')) return;
    const labelEl = btn.querySelector('[data-btn-label]');
    const originalText = labelEl ? labelEl.textContent : '';
    btn.classList.add('is-loading');
    if (labelEl) labelEl.textContent = 'Procesando...';

    try {
      await asyncCallback();
      if (labelEl) labelEl.textContent = '¡Completado!';
      setTimeout(() => {
        if (labelEl) labelEl.textContent = originalText;
      }, 1500);
    } finally {
      btn.classList.remove('is-loading');
    }
  });
}

