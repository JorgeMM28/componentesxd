// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountTableBulkExplosion(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const initial=[['API','Activo'],['Base de datos','Activo'],['Worker','En espera'],['Caché','Activo']];const rows=root.querySelector('[data-rows]');const status=root.querySelector('[role=status]');const update=()=>{const n=rows.querySelectorAll('input:checked').length;root.querySelector('[data-purge]').disabled=!n;status.textContent=n+' seleccionados · '+rows.children.length+' recursos';};const restore=()=>{rows.replaceChildren();initial.forEach(([name,state])=>{const row=document.createElement('tr');const first=document.createElement('td');const input=document.createElement('input');input.type='checkbox';input.setAttribute('aria-label','Seleccionar '+name);first.append(input);const title=document.createElement('td');title.textContent=name;const value=document.createElement('td');value.textContent=state;row.append(first,title,value);rows.append(row);});update();run(rows.children,{opacity:[0,1],y:[-10,0],delay:stagger(60),duration:350});};rows.addEventListener('change',update,{signal});root.querySelector('[data-purge]').addEventListener('click',()=>{rows.querySelectorAll('input:checked').forEach(input=>input.closest('tr').remove());update();},{signal});root.querySelector('[data-reset]').addEventListener('click',restore,{signal});restore();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="table-bulk-explosion"]').forEach(mountTableBulkExplosion);
// HTML:
/*
<div class="cxd-special" data-cxd-control="table-bulk-explosion"><h3>Selección masiva</h3><table><thead><tr><th>Seleccionar</th><th>Recurso</th><th>Estado</th></tr></thead><tbody data-rows></tbody></table><div class="cxd-special__actions"><button type="button" data-purge>Eliminar selección</button><button type="button" data-reset>Restaurar todo</button></div><span role="status"></span></div>
*/
