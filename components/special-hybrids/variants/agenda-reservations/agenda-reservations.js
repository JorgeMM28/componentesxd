// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountAgendaReservations(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});let selected='';const slots=root.querySelector('[data-slots]');const book=root.querySelector('[data-book]');const output=root.querySelector('[data-selection]');const status=root.querySelector('[role=status]');slots.addEventListener('click',event=>{const slot=event.target.closest('[data-slot]');if(!slot)return;selected=slot.dataset.slot;slots.querySelectorAll('[data-slot]').forEach(item=>item.setAttribute('aria-pressed',String(item===slot)));output.textContent='Reserva pendiente · '+selected;book.disabled=false;status.textContent='Franja '+selected+' seleccionada.';run(slot,{scale:[.92,1],duration:260,ease:'outBack'});},{signal});book.addEventListener('click',()=>{if(!selected)return;output.textContent='Confirmada · '+selected;status.textContent='Reserva creada para '+selected+'.';book.disabled=true;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="agenda-reservations"]').forEach(mountAgendaReservations);
// HTML:
/*
<section class="cxd-special cxd-agenda" data-cxd-control="agenda-reservations"><header><small>JUEVES 14 · ESTUDIO A</small><h3>Reservas disponibles</h3></header><div class="cxd-agenda__slots" data-slots><button type="button" data-slot="09:00">09:00</button><button type="button" data-slot="10:30">10:30</button><button type="button" data-slot="12:00">12:00</button><button type="button" data-slot="16:00">16:00</button></div><footer><strong data-selection>Sin reserva</strong><button type="button" data-book disabled>Confirmar reserva</button></footer><span role="status">Elige una franja disponible.</span></section>
*/
