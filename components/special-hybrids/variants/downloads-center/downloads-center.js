// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountDownloadsCenter(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const progress=Array.from(root.querySelectorAll('progress'));const labels=Array.from(root.querySelectorAll('[data-downloads] b'));const status=root.querySelector('[role=status]');let download;root.querySelector('[data-start]').addEventListener('click',()=>{clearInterval(download);status.textContent='Descargando…';download=setInterval(()=>{let done=true;progress.forEach((bar,index)=>{bar.value=Math.min(100,bar.value+6+index*2);labels[index].textContent=bar.value+'%';if(bar.value<100)done=false;});if(done){clearInterval(download);status.textContent='Todas las descargas completadas.';}},360);},{signal});signal.addEventListener('abort',()=>clearInterval(download),{once:true});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="downloads-center"]').forEach(mountDownloadsCenter);
// HTML:
/*
<section class="cxd-special cxd-downloads" data-cxd-control="downloads-center"><header><small>TRANSFERENCIAS</small><h3>Centro de descargas</h3></header><div data-downloads><label>kit-ui.zip <progress max="100" value="64"></progress><b>64%</b></label><label>assets.mov <progress max="100" value="28"></progress><b>28%</b></label></div><button type="button" data-start>Iniciar / continuar</button><span role="status">2 transferencias en espera.</span></section>
*/
