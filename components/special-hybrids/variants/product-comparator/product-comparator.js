// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountProductComparator(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const plans=root.querySelector('[data-plans]');const title=root.querySelector('[data-plan-title]');const users=root.querySelector('[data-users]');const projects=root.querySelector('[data-projects]');const status=root.querySelector('[role=status]');const limits={Starter:[3,5],Studio:[12,30],Enterprise:['Ilimitados','Ilimitados']};plans.addEventListener('change',event=>{const value=event.target.value;const tier=value.split(' · ')[0];const [u,p]=limits[tier];title.textContent=value;users.textContent=u;projects.textContent=p;status.textContent=tier+' seleccionado.';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="product-comparator"]').forEach(mountProductComparator);
// HTML:
/*
<section class="cxd-special cxd-products" data-cxd-control="product-comparator"><header><small>PLANES</small><h3 data-plan-title>Compara tus opciones</h3></header><div data-plans><label><input type="radio" name="plan" value="Starter · $19" checked /> Starter · $19</label><label><input type="radio" name="plan" value="Studio · $49" /> Studio · $49</label><label><input type="radio" name="plan" value="Enterprise · $99" /> Enterprise · $99</label></div><dl><dt>Usuarios</dt><dd data-users>3</dd><dt>Proyectos</dt><dd data-projects>5</dd></dl><span role="status">Starter seleccionado.</span></section>
*/
