// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountQueryBuilder(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const filters=root.querySelector('[data-filters]');const sql=root.querySelector('[data-sql]');const status=root.querySelector('[role=status]');const render=()=>{const values=Array.from(filters.querySelectorAll('input:checked')).map(input=>input.value);sql.textContent='SELECT * FROM clientes'+(values.length?'\nWHERE '+values.join(' AND '):'')+';';status.textContent=values.length+' filtro(s) aplicados.';};filters.addEventListener('change',render,{signal});root.querySelector('[data-copy]').addEventListener('click',()=>{status.textContent='Consulta lista para ejecutar.';run(sql,{opacity:[.3,1],duration:260,ease:'outExpo'});},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="query-builder"]').forEach(mountQueryBuilder);
// HTML:
/*
<section class="cxd-special cxd-query" data-cxd-control="query-builder"><header><small>CONSULTA VISUAL</small><h3>Filtros de clientes</h3></header><fieldset data-filters><label><input type="checkbox" value="estado = 'activo'" checked /> Activos</label><label><input type="checkbox" value="plan = 'pro'" /> Plan Pro</label><label><input type="checkbox" value="pais = 'MX'" /> México</label></fieldset><pre data-sql></pre><button type="button" data-copy>Preparar consulta</button><span role="status"></span></section>
*/
