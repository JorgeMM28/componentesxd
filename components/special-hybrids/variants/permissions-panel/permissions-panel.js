// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountPermissionsPanel(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const permissions=root.querySelector('[data-permissions]');const count=root.querySelector('[data-count]');const status=root.querySelector('[role=status]');const render=()=>{const total=permissions.querySelectorAll('input:checked').length;count.textContent=total+' permiso'+(total===1?'':'s');status.textContent='Cambios pendientes: '+total;};permissions.addEventListener('change',render,{signal});root.querySelector('[data-save]').addEventListener('click',()=>{status.textContent='Permisos guardados correctamente.';},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="permissions-panel"]').forEach(mountPermissionsPanel);
// HTML:
/*
<section class="cxd-special cxd-permissions" data-cxd-control="permissions-panel"><header><small>ROL · EDITOR</small><h3>Permisos del equipo</h3></header><fieldset data-permissions><label><input type="checkbox" checked /> Editar proyectos</label><label><input type="checkbox" checked /> Publicar contenido</label><label><input type="checkbox" /> Gestionar equipo</label></fieldset><footer><strong data-count>2 permisos</strong><button type="button" data-save>Guardar cambios</button></footer><span role="status">Cambios sin guardar.</span></section>
*/
