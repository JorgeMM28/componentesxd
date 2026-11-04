// Copia styles.css. La función devuelve un desmontador.
export function mountActionToolbarCard(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const count=root.querySelector('[data-count]');const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const star=event.target.closest('[data-star]');const action=event.target.closest('[data-action]');if(star){const active=star.getAttribute('aria-pressed')==='true';star.setAttribute('aria-pressed',String(!active));count.textContent=String(Number(count.textContent)+(active?-1:1));}if(action)status.textContent=action.dataset.action;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="action-toolbar-card"]').forEach(mountActionToolbarCard);
// HTML:
/*
<div class="cxd-card" data-cxd-control="action-toolbar-card"><span>REPOSITORIO // CORE-UI</span><h3>Paquete de componentes</h3><p>Una tarjeta con acciones independientes.</p><div class="cxd-card__actions"><button type="button" data-star aria-pressed="false">Estrella (<span data-count>142</span>)</button><button type="button" data-action="Enlace listo para compartir">Compartir</button><button type="button" data-action="Repositorio preparado">Clonar</button></div><span role="status">Listo</span></div>
*/
