// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountFlowEditor(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const flow=root.querySelector('[data-flow]');const output=root.querySelector('[data-flow-output]');const status=root.querySelector('[role=status]');let selected=null;flow.addEventListener('click',event=>{const node=event.target.closest('[data-node]');if(!node)return;selected=node;flow.querySelectorAll('[data-node]').forEach(item=>item.classList.toggle('is-selected',item===node));status.textContent='Paso activo: '+node.dataset.node;},{signal});root.querySelector('[data-add]').addEventListener('click',()=>{const node=document.createElement('li');node.dataset.node='Aprobación '+(flow.children.length+1);node.textContent=node.dataset.node;flow.append(node);output.textContent=flow.children.length+' pasos · flujo ampliado';run(node,{opacity:[0,1],x:[-18,0],duration:320,ease:'outExpo'});},{signal});root.querySelector('[data-link]').addEventListener('click',()=>{output.textContent=selected?'Conexión creada desde '+selected.dataset.node:'Selecciona un paso antes de conectar';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="flow-editor"]').forEach(mountFlowEditor);
// HTML:
/*
<section class="cxd-special cxd-flow" data-cxd-control="flow-editor"><header><small>WORKFLOW</small><h3>Editor de flujo</h3></header><ol data-flow><li data-node="Capturar lead">Capturar lead</li><li data-node="Validar datos">Validar datos</li><li data-node="Notificar equipo">Notificar equipo</li></ol><div class="cxd-special__actions"><button type="button" data-add>Añadir aprobación</button><button type="button" data-link>Conectar nodos</button></div><output data-flow-output>3 pasos · sin conexión activa</output><span role="status">Selecciona un paso para inspeccionarlo.</span></section>
*/
