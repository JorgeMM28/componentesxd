// Copia styles.css. La función devuelve un desmontador.
export function mountAccordionMultiBento(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const set=(button,open)=>{button.setAttribute('aria-expanded',String(open));root.querySelector('[data-panel="'+button.dataset.open+'"]').hidden=!open;};root.addEventListener('click',event=>{const button=event.target.closest('[data-open]');const all=event.target.closest('[data-all]');if(button)set(button,button.getAttribute('aria-expanded')!=='true');if(all)root.querySelectorAll('[data-open]').forEach(item=>set(item,all.dataset.all==='open'));},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="accordion-multi-bento"]').forEach(mountAccordionMultiBento);
// HTML:
/*
<div class="cxd-widget" data-cxd-control="accordion-multi-bento"><div class="cxd-widget__row"><button type="button" data-all="open">Expandir todo</button><button type="button" data-all="close">Colapsar todo</button></div><button type="button" data-open="one" aria-expanded="true">Módulo de red</button><div class="cxd-widget__panel" data-panel="one">Latencia: 8 ms</div><button type="button" data-open="two" aria-expanded="false">Módulo de datos</button><div class="cxd-widget__panel" data-panel="two" hidden>Uso: 42 GB</div></div>
*/
