// Copia styles.css. La función devuelve un desmontador.
export function mountSpaNginxAlpine(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const stages=Array.from(root.querySelectorAll('[data-stage]'));const status=root.querySelector('[role="status"]');let active=0;const render=(message)=>{stages.forEach((stage,index)=>stage.setAttribute('aria-current',String(index===active)));status.textContent=message;};root.querySelector('[data-run]').addEventListener('click',()=>{active=(active+1)%stages.length;render('Salto '+(active+1)+' de '+stages.length+': '+stages[active].textContent+'.');},{signal});root.querySelector('[data-reset]').addEventListener('click',()=>{active=0;render('Topología reiniciada: '+stages[0].textContent+'.');},{signal});render('Listo para simular la topología.');
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="spa-nginx-alpine"]').forEach(mountSpaNginxAlpine);
// HTML:
/*
<section class="cxd-docker-flow" data-cxd-control="spa-nginx-alpine"><h3>SPA + Nginx</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Generar bundle Vite</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Resolver rutas con try_files</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Servir assets inmutables</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>
*/
