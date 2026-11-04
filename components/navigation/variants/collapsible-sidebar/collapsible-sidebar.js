// Copia styles.css. La función devuelve un desmontador.
export function mountCollapsibleSidebar(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');const collapse=root.querySelector('[data-collapse]');root.addEventListener('click',event=>{const button=event.target.closest('[data-destination]');if(button){root.querySelectorAll('[data-destination]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));status.textContent='Vista activa: '+button.dataset.destination;}if(event.target.closest('[data-collapse]')){root.classList.toggle('is-collapsed');collapse.setAttribute('aria-expanded',String(!root.classList.contains('is-collapsed')));collapse.setAttribute('aria-label',root.classList.contains('is-collapsed')?'Expandir navegación':'Colapsar navegación');}},{signal});root.querySelector('[data-env]').addEventListener('change',event=>{status.textContent='Entorno: '+event.target.value;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="collapsible-sidebar"]').forEach(mountCollapsibleSidebar);
// HTML:
/*
<div class="cxd-nav cxd-nav--sidebar" data-cxd-control="collapsible-sidebar"><button type="button" data-collapse aria-label="Colapsar navegación" aria-expanded="true">☰ <span data-label>Colapsar</span></button><label>Entorno <select data-env><option>Producción</option><option>Staging</option></select></label><button type="button" data-destination="Resumen" aria-label="Resumen" aria-pressed="true">◉ <span data-label>Resumen</span></button><button type="button" data-destination="Despliegues" aria-label="Despliegues" aria-pressed="false">▦ <span data-label>Despliegues</span></button><button type="button" data-destination="Seguridad" aria-label="Seguridad" aria-pressed="false">◇ <span data-label>Seguridad</span></button><span role="status">Vista activa: Resumen</span></div>
*/
