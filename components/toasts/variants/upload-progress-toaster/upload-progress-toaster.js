// Copia styles.css. La función devuelve un desmontador.
export function mountUploadProgressToaster(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const progress=root.querySelector('[data-progress]'); const label=root.querySelector('[data-percent]'); const status=root.querySelector('[role="status"]'); let value=0;
  const stop=()=>{clearInterval(timer); timer=undefined;}; root.querySelector('[data-start]').addEventListener('click',()=>{stop(); if(value>=100)value=0; status.textContent='Subiendo'; timer=setInterval(()=>{value=Math.min(100,value+2); progress.value=value; label.textContent=value+'%'; if(value===100){stop();status.textContent='Subida completada';}},60);},{signal}); root.querySelector('[data-pause]').addEventListener('click',()=>{stop();status.textContent='Pausado';},{signal}); signal.addEventListener('abort',stop,{once:true});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="upload-progress-toaster"]').forEach(mountUploadProgressToaster);
// HTML:
/*
<div class="cxd-toast" data-cxd-control="upload-progress-toaster"><strong>Subiendo artefactos de producción</strong><span data-percent>0%</span><progress data-progress max="100" value="0" aria-label="Progreso de subida"></progress><button type="button" data-start>Simular subida</button><button type="button" data-pause>Pausar</button><span role="status">Listo</span></div>
*/
