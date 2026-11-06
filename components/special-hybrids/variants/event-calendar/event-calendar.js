// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountEventCalendar(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const days=root.querySelector('[data-days]');const title=root.querySelector('[data-event-title]');const status=root.querySelector('[role=status]');let created=0;days.addEventListener('click',event=>{const day=event.target.closest('[data-event]');if(!day)return;days.querySelectorAll('[data-event]').forEach(item=>item.classList.toggle('is-selected',item===day));title.textContent=day.dataset.event;status.textContent='Evento seleccionado: '+day.dataset.event;},{signal});root.querySelector('[data-add]').addEventListener('click',()=>{created++;status.textContent='Evento '+created+' creado como borrador.';},{signal});root.querySelector('[data-clear]').addEventListener('click',()=>{days.querySelectorAll('[data-event]').forEach(item=>item.classList.remove('is-selected'));title.textContent='Calendario editorial';status.textContent='Selección limpiada.';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="event-calendar"]').forEach(mountEventCalendar);
// HTML:
/*
<section class="cxd-special cxd-calendar" data-cxd-control="event-calendar"><header><small>OCTUBRE 2026</small><h3 data-event-title>Calendario editorial</h3></header><div data-days><button type="button" data-event="Demo de producto">12<span>Demo</span></button><button type="button" data-event="Sync de diseño">16<span>Sync</span></button><button type="button" data-event="Lanzamiento">23<span>Launch</span></button></div><div class="cxd-special__actions"><button type="button" data-add>Crear evento</button><button type="button" data-clear>Limpiar selección</button></div><span role="status">Tres fechas destacadas.</span></section>
*/
