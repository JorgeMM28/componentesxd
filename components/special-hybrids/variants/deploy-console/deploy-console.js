// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountDeployConsole(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const log=root.querySelector('[data-log]');const status=root.querySelector('[role=status]');root.querySelector('[data-deploy]').addEventListener('click',()=>{const lines=['$ build ✓','$ test ✓','$ publish ✓'];let index=0;log.textContent='';const next=()=>{if(index===lines.length){status.textContent='Despliegue completado.';return;}log.textContent+=(index?'\n':'')+lines[index++];timer=setTimeout(next,280);};next();},{signal});root.querySelector('[data-clear]').addEventListener('click',()=>{clearTimeout(timer);log.textContent='$ consola limpia';status.textContent='Esperando comando.';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="deploy-console"]').forEach(mountDeployConsole);
// HTML:
/*
<section class="cxd-special cxd-deploy" data-cxd-control="deploy-console"><header><small>PRODUCTION</small><h3>Consola de despliegue</h3></header><pre data-log>$ listo para desplegar</pre><div class="cxd-special__actions"><button type="button" data-deploy>Desplegar versión</button><button type="button" data-clear>Limpiar</button></div><span role="status">Build #482 preparado.</span></section>
*/
