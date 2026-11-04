// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountAccordionAnimatedMetrics(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});let count=0;const scene=root.querySelector('[data-scene]');const value=root.querySelector('[data-value]');const progress=root.querySelector('[data-progress]');const status=root.querySelector('[role="status"]');const render=(message)=>{value.textContent=count+' / 3';progress.style.setProperty('--progress',(count/3*100)+'%');root.querySelector('[data-phase]').textContent=count===3?'COMPLETO':'EN CURSO';status.textContent=message;run(scene.children,{opacity:[0,1],y:[16,0],delay:stagger(55),duration:380,ease:'outCubic'});};root.querySelector('[data-run]').addEventListener('click',()=>{count=count===3?1:count+1;render(count===3?'Métrica expandida': 'Expandir métrica: paso '+count+' de 3');},{signal});root.querySelector('[data-reset]').addEventListener('click',()=>{count=0;render('Métricas contraídas');},{signal});render('Métricas contraídas');
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="accordion-animated-metrics"]').forEach(mountAccordionAnimatedMetrics);
// HTML:
/*
<div class="cxd-special" data-cxd-control="accordion-animated-metrics"><h3>Métricas de servicio</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Expandir métrica</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Métricas contraídas</span></div>
*/
