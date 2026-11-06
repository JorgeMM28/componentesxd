// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountOrderTracker(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const stages=Array.from(root.querySelectorAll('[data-stages] li'));const title=root.querySelector('[data-order-title]');const status=root.querySelector('[role=status]');let stage=1;const render=()=>{stages.forEach((item,index)=>item.classList.toggle('is-current',index===stage)||item.classList.toggle('is-complete',index<stage));title.textContent=stages[stage].textContent;status.textContent='Estado '+(stage+1)+' de '+stages.length+': '+title.textContent;};root.querySelector('[data-next]').addEventListener('click',()=>{stage=Math.min(stages.length-1,stage+1);render();},{signal});root.querySelector('[data-reset]').addEventListener('click',()=>{stage=1;render();},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="order-tracker"]').forEach(mountOrderTracker);
// HTML:
/*
<section class="cxd-special cxd-order" data-cxd-control="order-tracker"><header><small>PEDIDO #CX-2048</small><h3 data-order-title>Preparación</h3></header><ol data-stages><li>Pagado</li><li>Preparación</li><li>En ruta</li><li>Entregado</li></ol><div class="cxd-special__actions"><button type="button" data-next>Avanzar pedido</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></section>
*/
