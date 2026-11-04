// Copia styles.css. La función devuelve un desmontador.
export function mountFloatingActionDock(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-destination]');if(!button||!root.contains(button))return;root.querySelectorAll('[data-destination]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));status.textContent='Vista activa: '+button.dataset.destination;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="floating-action-dock"]').forEach(mountFloatingActionDock);
// HTML:
/*
<div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-action-dock"><button type="button" data-destination="Consola" aria-pressed="true">⌘ Consola</button><button type="button" data-destination="Archivos" aria-pressed="false">▦ Archivos</button><button type="button" data-destination="Métricas" aria-pressed="false">◉ Métricas</button><span role="status">Vista activa: Consola</span></div>
*/
