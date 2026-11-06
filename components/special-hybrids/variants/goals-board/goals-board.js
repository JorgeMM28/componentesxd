// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountGoalsBoard(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const goals=Array.from(root.querySelectorAll('[data-goals] input'));const progress=root.querySelector('[data-goal-progress]');const count=root.querySelector('[data-goal-count]');const status=root.querySelector('[role=status]');const render=()=>{const done=goals.filter(goal=>goal.checked).length;progress.value=done;count.textContent=done+' / '+goals.length+' completados';status.textContent=done===goals.length?'Todos los hitos completados.':'Siguiente hito disponible.';};root.querySelector('[data-goals]').addEventListener('change',render,{signal});root.querySelector('[data-complete]').addEventListener('click',()=>{const next=goals.find(goal=>!goal.checked);if(next)next.checked=true;render();},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="goals-board"]').forEach(mountGoalsBoard);
// HTML:
/*
<section class="cxd-special cxd-goals" data-cxd-control="goals-board"><header><small>OBJETIVOS · Q4</small><h3>Tablero de hitos</h3></header><div data-goals><label><input type="checkbox" checked /> Documentación</label><label><input type="checkbox" /> Onboarding</label><label><input type="checkbox" checked /> Accesibilidad</label></div><progress max="3" value="2" data-goal-progress></progress><footer><strong data-goal-count>2 / 3 completados</strong><button type="button" data-complete>Completar siguiente</button></footer><span role="status"></span></section>
*/
