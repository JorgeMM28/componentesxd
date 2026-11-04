// Copia styles.css. La función devuelve un desmontador.
export function mountStylelessMinimalNav(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-destination]');if(!button||!root.contains(button))return;root.querySelectorAll('[data-destination]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));status.textContent='Vista activa: '+button.dataset.destination;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="styleless-minimal-nav"]').forEach(mountStylelessMinimalNav);
// HTML:
/*
<div class="cxd-nav cxd-nav--bare" data-cxd-control="styleless-minimal-nav"><button type="button" data-destination="Resumen" aria-pressed="true">Resumen</button><button type="button" data-destination="Actividad" aria-pressed="false">Actividad</button><button type="button" data-destination="Ajustes" aria-pressed="false">Ajustes</button><span role="status">Vista activa: Resumen</span></div>
*/
