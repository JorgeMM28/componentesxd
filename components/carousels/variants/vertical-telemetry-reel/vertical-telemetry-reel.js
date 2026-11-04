// Copia styles.css. La función devuelve un desmontador.
export function mountVerticalTelemetryReel(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let index=0;const slides=Array.from(root.querySelectorAll('[data-slide]'));const status=root.querySelector('[role="status"]');const move=delta=>{index=(index+delta+slides.length)%slides.length;render();};root.querySelector('[data-prev]').addEventListener('click',()=>move(-1),{signal});root.querySelector('[data-next]').addEventListener('click',()=>move(1),{signal});const render=()=>{slides.forEach((slide,i)=>{slide.style.setProperty('--position',String(i-index));slide.setAttribute('aria-hidden',String(i!==index));});status.textContent='Panel '+(index+1)+' de '+slides.length;};render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="vertical-telemetry-reel"]').forEach(mountVerticalTelemetryReel);
// HTML:
/*
<div class="cxd-carousel" data-cxd-control="vertical-telemetry-reel" aria-label="Reel vertical"><div class="cxd-carousel__viewport cxd-reel"><article class="cxd-carousel__item" data-slide><small>01 / 04</small><strong>Aurora</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>02 / 04</small><strong>Órbita</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>03 / 04</small><strong>Nébula</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>04 / 04</small><strong>Horizonte</strong><p>Una nueva perspectiva para explorar.</p></article></div><div class="cxd-carousel__controls"><button type="button" data-prev aria-label="Anterior">← Anterior</button><button type="button" data-next aria-label="Siguiente">Siguiente →</button></div><span role="status" aria-live="polite"></span></div>
*/
