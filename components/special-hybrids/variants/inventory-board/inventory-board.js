// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountInventoryBoard(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const stock=root.querySelector('[data-stock]');const status=root.querySelector('[role=status]');stock.addEventListener('click',event=>{const action=event.target.closest('[data-delta]');if(!action)return;const row=action.closest('tr');const next=Math.max(0,Number(row.dataset.qty)+Number(action.dataset.delta));row.dataset.qty=String(next);row.querySelector('output').textContent=next;status.textContent=row.dataset.item+': '+next+' unidades.';run(row,{scale:[.97,1],duration:220,ease:'outBack'});},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="inventory-board"]').forEach(mountInventoryBoard);
// HTML:
/*
<section class="cxd-special cxd-inventory" data-cxd-control="inventory-board"><header><small>INVENTARIO</small><h3>Reabastecimiento</h3></header><table><thead><tr><th>Artículo</th><th>Unidades</th><th>Ajuste</th></tr></thead><tbody data-stock><tr data-item="Cables USB-C" data-qty="4"><td>Cables USB-C</td><td><output>4</output></td><td><button type="button" data-delta="-1">−</button><button type="button" data-delta="1">+</button></td></tr><tr data-item="Adaptadores" data-qty="18"><td>Adaptadores</td><td><output>18</output></td><td><button type="button" data-delta="-1">−</button><button type="button" data-delta="1">+</button></td></tr></tbody></table><span role="status">2 artículos controlados.</span></section>
*/
