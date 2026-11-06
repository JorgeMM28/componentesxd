// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountChartEditor(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const chart=root.querySelector('[data-chart]');const type=root.querySelector('[data-chart-type]');const status=root.querySelector('[role=status]');let seed=1;const render=()=>{chart.dataset.type=type.value;status.textContent='Visualización de '+(type.value==='bars'?'barras.':'línea.');};type.addEventListener('change',render,{signal});root.querySelector('[data-random]').addEventListener('click',()=>{seed++;chart.querySelectorAll('i').forEach((bar,index)=>bar.style.setProperty('--height',(25+((seed*19+index*23)%68))+'%'));status.textContent='Datos actualizados.';run(chart.children,{scaleY:[.25,1],delay:stagger(70),duration:380,ease:'outExpo'});},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="chart-editor"]').forEach(mountChartEditor);
// HTML:
/*
<section class="cxd-special cxd-chart" data-cxd-control="chart-editor"><header><small>INGRESOS</small><h3>Editor de gráfico</h3><select data-chart-type><option value="bars">Barras</option><option value="line">Línea</option></select></header><div class="cxd-chart__canvas" data-chart><i style="--height:42%"></i><i style="--height:78%"></i><i style="--height:56%"></i><i style="--height:91%"></i></div><button type="button" data-random>Generar datos</button><span role="status">Visualización de barras.</span></section>
*/
