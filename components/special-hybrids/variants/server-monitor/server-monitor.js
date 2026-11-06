// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountServerMonitor(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const meters=Array.from(root.querySelectorAll('meter'));const status=root.querySelector('[role=status]');let tick=0;root.querySelector('[data-refresh]').addEventListener('click',()=>{tick++;meters.forEach((meter,index)=>{const value=58+((tick*17+index*13)%39);meter.value=value;meter.nextElementSibling.textContent=value+'%';});status.textContent='Métricas actualizadas · ciclo '+tick;run(meters,{scaleX:[.8,1],duration:340,delay:stagger(55),ease:'outExpo'});},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="server-monitor"]').forEach(mountServerMonitor);
// HTML:
/*
<section class="cxd-special cxd-monitor" data-cxd-control="server-monitor"><header><small>NOC · SALUD</small><h3>Monitor de servidores</h3><button type="button" data-refresh>Actualizar</button></header><div data-metrics><label>API <meter min="0" max="100" value="98"></meter><b>98%</b></label><label>Worker <meter min="0" max="100" value="72"></meter><b>72%</b></label><label>Base de datos <meter min="0" max="100" value="64"></meter><b>64%</b></label></div><span role="status">Lectura estable.</span></section>
*/
