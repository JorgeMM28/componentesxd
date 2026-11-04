// Copia styles.css. La función devuelve un desmontador.
export function mountFloatingFabRadial(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const trigger = root.querySelector('[data-fab]'); const actions = root.querySelector('[data-actions]'); const status = root.querySelector('[role="status"]');
  root.addEventListener('click', event => { const action = event.target.closest('[data-action]'); if (action && root.contains(action)) status.textContent = 'ACCIÓN: ' + action.dataset.action; if (event.target.closest('[data-fab]')) { actions.hidden = !actions.hidden; trigger.setAttribute('aria-expanded', String(!actions.hidden)); status.textContent = actions.hidden ? 'MENÚ CERRADO' : 'MENÚ ABIERTO'; } }, {signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="floating-fab-radial"]').forEach(mountFloatingFabRadial);
// HTML:
/*
<div class="cxd-control" data-cxd-control="floating-fab-radial"><button type="button" data-fab aria-expanded="true">Abrir / Cerrar menú flotante</button><span role="status">SATÉLITES ACTIVOS</span><div class="cxd-control__actions" data-actions><button type="button" data-action="Nuevo despliegue ejecutado">01. Nuevo despliegue</button><button type="button" data-action="Repositorio clonado">02. Clonar repositorio</button><button type="button" data-action="Logs exportados">03. Exportar logs</button></div></div>
*/
