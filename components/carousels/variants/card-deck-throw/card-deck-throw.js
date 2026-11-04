// Copia styles.css. La función devuelve un desmontador.
export function mountCardDeckThrow(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const slides=Array.from(root.querySelectorAll('[data-slide]'));let index=0;const render=()=>{slides.forEach((slide,i)=>{const depth=i-index;slide.hidden=depth<0;slide.setAttribute('aria-hidden',String(depth!==0));slide.style.setProperty('--depth',String(depth));slide.style.setProperty('--layer',String(slides.length-depth));});root.querySelector('[data-dismiss]').disabled=index===slides.length;root.querySelector('[role="status"]').textContent=(slides.length-index)+' tarjetas restantes';};root.querySelector('[data-dismiss]').addEventListener('click',()=>{index=Math.min(slides.length,index+1);render();},{signal});root.querySelector('[data-reset]').addEventListener('click',()=>{index=0;render();},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="card-deck-throw"]').forEach(mountCardDeckThrow);
// HTML:
/*
<div class="cxd-carousel" data-cxd-control="card-deck-throw"><div class="cxd-deck"><article class="cxd-carousel__item" data-slide><small>01 / 04</small><strong>Aurora</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>02 / 04</small><strong>Órbita</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>03 / 04</small><strong>Nébula</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>04 / 04</small><strong>Horizonte</strong><p>Una nueva perspectiva para explorar.</p></article></div><div class="cxd-carousel__controls"><button type="button" data-dismiss>Descartar tarjeta</button><button type="button" data-reset>Restaurar mazo</button></div><span role="status"></span></div>
*/
