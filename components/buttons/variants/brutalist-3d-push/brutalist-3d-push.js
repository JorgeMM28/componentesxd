// Copia styles.css. La función devuelve un desmontador.
export function mountBrutalist3dPush(root) {
  const count = root.querySelector('[data-count]');
  const state = root.querySelector('[data-state]');
  const handler = event => {
    const push = event.target.closest('[data-push]');
    const toggle = event.target.closest('[data-toggle]');
    if (push && root.contains(push)) count.textContent = String(Number(count.textContent) + 1);
    if (toggle && root.contains(toggle)) {
      const on = toggle.getAttribute('aria-pressed') !== 'true';
      toggle.setAttribute('aria-pressed', String(on));
      state.textContent = on ? 'ON' : 'OFF';
    }
  };
  root.addEventListener('click', handler);
  return () => root.removeEventListener('click', handler);
}
// Montaje: document.querySelectorAll('[data-mechanical]').forEach(mountBrutalist3dPush);
// HTML:
/*
<div class="cxd-mechanical" data-mechanical>
  <button type="button" class="cxd-mechanical__button" data-push>Presión física 3D (<span data-count>0</span>)</button>
  <button type="button" class="cxd-mechanical__button cxd-mechanical__button--secondary" data-toggle aria-pressed="true">Interruptor mecánico: <span data-state>ON</span></button>
</div>
*/
