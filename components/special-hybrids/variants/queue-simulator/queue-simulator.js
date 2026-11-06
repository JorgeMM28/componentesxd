// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountQueueSimulator(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const queue=root.querySelector('[data-queue]');const status=root.querySelector('[role=status]');const initial=['exportar-reporte','indexar-búsqueda','enviar-resumen'];const render=()=>{status.textContent=queue.children.length?queue.children.length+' trabajos pendientes.':'Cola vacía.';root.querySelector('[data-process]').disabled=!queue.children.length;};root.querySelector('[data-process]').addEventListener('click',()=>{const current=queue.firstElementChild;if(!current)return;const name=current.textContent;current.remove();status.textContent='Completado: '+name;render();},{signal});root.querySelector('[data-reset]').addEventListener('click',()=>{queue.replaceChildren(...initial.map(name=>{const item=document.createElement('li');item.textContent=name;return item;}));render();},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="queue-simulator"]').forEach(mountQueueSimulator);
// HTML:
/*
<section class="cxd-special cxd-queue" data-cxd-control="queue-simulator"><header><small>WORKER · 1 DISPONIBLE</small><h3>Simulador de cola</h3></header><ol data-queue><li>exportar-reporte</li><li>indexar-búsqueda</li><li>enviar-resumen</li></ol><div class="cxd-special__actions"><button type="button" data-process>Procesar siguiente</button><button type="button" data-reset>Restaurar cola</button></div><span role="status"></span></section>
*/
