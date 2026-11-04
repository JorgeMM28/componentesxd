// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountCarouselSvgMorphShowcase(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const scenes=[['Descubrimiento','Explora nuevas ideas','60,10 110,60 60,110 10,60'],['Construcción','Convierte ideas en proyectos','20,20 100,20 100,100 20,100'],['Lanzamiento','Comparte el resultado','60,5 115,100 60,80 5,100']];let index=0;const shape=root.querySelector('[data-shape]');const render=()=>{const [title,copy,points]=scenes[index];root.querySelector('[data-title]').textContent=title;root.querySelector('[data-copy]').textContent=copy;shape.setAttribute('points',points);root.querySelector('[role=status]').textContent='Escena '+(index+1)+' de '+scenes.length;run(shape,{scale:[.75,1],rotate:[-30,0],duration:450,ease:'outCubic'});};root.querySelector('[data-prev]').addEventListener('click',()=>{index=(index+scenes.length-1)%scenes.length;render();},{signal});root.querySelector('[data-next]').addEventListener('click',()=>{index=(index+1)%scenes.length;render();},{signal});root.querySelector('[data-reset]').addEventListener('click',()=>{index=0;render();},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="carousel-svg-morph-showcase"]').forEach(mountCarouselSvgMorphShowcase);
// HTML:
/*
<div class="cxd-special" data-cxd-control="carousel-svg-morph-showcase"><h3>Carrusel de escenas SVG</h3><div class="cxd-special__scene"><svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true"><polygon data-shape points="60,10 110,60 60,110 10,60" fill="#9b82ff"></polygon></svg><strong data-title></strong><p data-copy></p></div><div class="cxd-special__actions"><button type="button" data-prev>Anterior</button><button type="button" data-next>Siguiente</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></div>
*/
