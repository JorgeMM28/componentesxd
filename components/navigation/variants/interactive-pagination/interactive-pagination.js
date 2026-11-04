// Copia styles.css. La función devuelve un desmontador.
export function mountInteractivePagination(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let page=1;const status=root.querySelector('[role="status"]');const sync=()=>{root.querySelectorAll('[data-page]').forEach(item=>{if(Number(item.dataset.page)===page)item.setAttribute('aria-current','page');else item.removeAttribute('aria-current');});status.textContent='Página '+page+' de 3';};root.addEventListener('click',event=>{const step=event.target.closest('[data-step]');const target=event.target.closest('[data-page]');if(step)page=Math.max(1,Math.min(3,page+Number(step.dataset.step)));if(target)page=Number(target.dataset.page);sync();},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="interactive-pagination"]').forEach(mountInteractivePagination);
// HTML:
/*
<div class="cxd-nav" data-cxd-control="interactive-pagination"><button type="button" data-step="-1">Anterior</button><button type="button" data-page="1" aria-current="page">1</button><button type="button" data-page="2">2</button><button type="button" data-page="3">3</button><button type="button" data-step="1">Siguiente</button><span role="status">Página 1 de 3</span></div>
*/
