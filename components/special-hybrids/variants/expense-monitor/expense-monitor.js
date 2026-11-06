// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountExpenseMonitor(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const fields=Array.from(root.querySelectorAll('[data-expenses] input'));const total=root.querySelector('[data-total]');const remaining=root.querySelector('[data-remaining]');const status=root.querySelector('[role=status]');const render=()=>{const spent=fields.reduce((sum,input)=>sum+(Number(input.value)||0),0);total.textContent='Gastado: $'+spent.toLocaleString('es-MX');const left=18000-spent;remaining.textContent='Disponible: $'+left.toLocaleString('es-MX');status.textContent=left>=0?'Presupuesto saludable.':'Presupuesto excedido.';};fields.forEach(field=>field.addEventListener('input',render,{signal}));render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="expense-monitor"]').forEach(mountExpenseMonitor);
// HTML:
/*
<section class="cxd-special cxd-expenses" data-cxd-control="expense-monitor"><header><small>PRESUPUESTO · OCT</small><h3>Monitor de gastos</h3></header><div data-expenses><label>Infraestructura <input type="number" min="0" value="7200" /></label><label>Marketing <input type="number" min="0" value="3100" /></label><label>Operación <input type="number" min="0" value="2180" /></label></div><footer><strong data-total></strong><output data-remaining></output></footer><span role="status"></span></section>
*/
