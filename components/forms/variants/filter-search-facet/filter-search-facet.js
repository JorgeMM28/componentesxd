// Copia styles.css. La función devuelve un desmontador.
export function mountFilterSearchFacet(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]'); root.addEventListener('click',event=>{const button=event.target.closest('[data-filter]');if(!button||!root.contains(button))return;button.setAttribute('aria-pressed',String(button.getAttribute('aria-pressed')!=='true'));status.textContent=root.querySelectorAll('[data-filter][aria-pressed="true"]').length+' filtros activos';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="filter-search-facet"]').forEach(mountFilterSearchFacet);
// HTML:
/*
<div class="cxd-form" data-cxd-control="filter-search-facet"><button type="button" data-filter aria-pressed="true">SSR activo</button><button type="button" data-filter aria-pressed="true">Edge ready</button><button type="button" data-filter aria-pressed="false">TypeScript strict</button><button type="button" data-filter aria-pressed="false">Dockerizado</button><span role="status">2 filtros activos</span></div>
*/
