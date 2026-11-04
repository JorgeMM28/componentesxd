// Copia styles.css. La función devuelve un desmontador.
export function mountVerticalEventTimeline(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const list=root.querySelector('[data-list]');let count=0;root.querySelector('[data-add]').addEventListener('click',()=>{const item=document.createElement('div');item.className='cxd-data__item';item.textContent='Evento de demostración '+(++count);list.prepend(item);},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="vertical-event-timeline"]').forEach(mountVerticalEventTimeline);
// HTML:
/*
<div class="cxd-data" data-cxd-control="vertical-event-timeline"><strong>Cronología de eventos</strong><button type="button" data-add>+ Agregar evento</button><div class="cxd-data__list" data-list aria-live="polite"><div class="cxd-data__item">Despliegue completado</div><div class="cxd-data__item">Archivos sincronizados</div></div></div>
*/
