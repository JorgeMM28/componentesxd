// Copia styles.css. La función devuelve un desmontador.
export function mountHoldConfirmSafety(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const button = root.querySelector('[data-hold]'); const status = root.querySelector('[role="status"]'); let start = 0; let completed = false; let armed = false; let frame = 0;
  const reset = () => { cancelAnimationFrame(frame); frame = 0; button.style.setProperty('--progress','0%'); };
  const update = now => { const pct = Math.min(100, Math.round((now - start) / 850 * 100)); button.style.setProperty('--progress', pct + '%'); status.textContent = 'PROGRESO DE SEGURIDAD: ' + pct + '%'; if (pct < 100) frame = requestAnimationFrame(update); else { completed = true; status.textContent = 'PURGA CONFIRMADA'; } };
  button.addEventListener('pointerdown', event => { if (event.button !== 0) return; reset(); armed = false; completed = false; start = performance.now(); frame = requestAnimationFrame(update); }, {signal});
  button.addEventListener('pointerleave', () => { if (!completed) reset(); }, {signal});
  button.addEventListener('pointerup', () => { if (!completed) reset(); }, {signal});
  button.addEventListener('pointercancel', reset, {signal});
  button.addEventListener('click', event => { if (event.detail !== 0) return; if (!armed) { armed = true; status.textContent = 'PULSA DE NUEVO PARA CONFIRMAR'; } else { armed = false; completed = true; button.style.setProperty('--progress','100%'); status.textContent = 'PURGA CONFIRMADA'; } }, {signal});
  button.addEventListener('blur', () => { armed = false; }, {signal});
  signal.addEventListener('abort', reset, {once:true});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="hold-confirm-safety"]').forEach(mountHoldConfirmSafety);
// HTML:
/*
<div class="cxd-control" data-cxd-control="hold-confirm-safety"><button type="button" data-hold>Mantén presionado para purgar; con teclado pulsa dos veces</button><span role="status">PROGRESO DE SEGURIDAD: 0%</span></div>
*/
