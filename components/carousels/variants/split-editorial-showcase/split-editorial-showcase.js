// Copia styles.css. La función devuelve un desmontador.
export function mountSplitEditorialShowcase(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const scenes=[['Aurora','Luz y color para una interfaz expresiva.','#a465ff','✦'],['Órbita','Sistemas en movimiento y equilibrio.','#0d9f9d','◉'],['Nébula','Profundidad y contraste en cada detalle.','#e65e91','✳']];let index=0;const art=root.querySelector('[data-art]');const render=()=>{const scene=scenes[index];art.style.setProperty('--tone',scene[2]);art.textContent=scene[3];root.querySelector('[data-title]').textContent=scene[0];root.querySelector('[data-description]').textContent=scene[1];root.querySelector('[role="status"]').textContent='Escena '+(index+1)+' de '+scenes.length;};root.querySelector('[data-prev]').addEventListener('click',()=>{index=(index+scenes.length-1)%scenes.length;render();},{signal});root.querySelector('[data-next]').addEventListener('click',()=>{index=(index+1)%scenes.length;render();},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="split-editorial-showcase"]').forEach(mountSplitEditorialShowcase);
// HTML:
/*
<div class="cxd-carousel" data-cxd-control="split-editorial-showcase"><div class="cxd-split"><div data-art aria-hidden="true">✦</div><div><small>COLECCIÓN EDITORIAL</small><h3 data-title>Aurora</h3><p data-description>Luz y color para una interfaz expresiva.</p></div></div><div class="cxd-carousel__controls"><button type="button" data-prev aria-label="Anterior">← Anterior</button><button type="button" data-next aria-label="Siguiente">Siguiente →</button></div><span role="status" aria-live="polite"></span></div>
*/
