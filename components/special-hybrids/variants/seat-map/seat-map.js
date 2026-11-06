// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountSeatMap(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const grid=root.querySelector('[data-seat-grid]');const reserve=root.querySelector('[data-reserve]');const title=root.querySelector('[data-seat-title]');const status=root.querySelector('[role=status]');let seat=null;grid.addEventListener('click',event=>{const target=event.target.closest('button');if(!target||target.disabled)return;seat=target;grid.querySelectorAll('button').forEach(item=>item.classList.toggle('is-selected',item===seat));title.textContent='Asiento '+seat.textContent;reserve.disabled=false;status.textContent='Listo para reservar '+seat.textContent;},{signal});reserve.addEventListener('click',()=>{if(!seat)return;seat.disabled=true;seat.classList.remove('is-selected');seat.classList.add('is-reserved');status.textContent='Asiento '+seat.textContent+' reservado.';title.textContent='Reserva confirmada';reserve.disabled=true;seat=null;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="seat-map"]').forEach(mountSeatMap);
// HTML:
/*
<section class="cxd-special cxd-seats" data-cxd-control="seat-map"><header><small>SALA A · 12 DISPONIBLES</small><h3 data-seat-title>Elige un asiento</h3></header><div data-seat-grid><button type="button">A1</button><button type="button">A2</button><button type="button">A3</button><button type="button">B1</button><button type="button">B2</button><button type="button">B3</button><button type="button">C1</button><button type="button">C2</button><button type="button">C3</button></div><button type="button" data-reserve disabled>Reservar asiento</button><span role="status">9 asientos en el mapa.</span></section>
*/
