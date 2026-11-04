// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountCarouselSpringPhysicsDeck(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const cards=[['Infraestructura',14800,'Capacidad de cómputo'],['Red',9200,'Conectividad global'],['Almacenamiento',6100,'Datos disponibles']];let index=0;const card=root.querySelector('[data-card]');const render=()=>{const [label,value,copy]=cards[index];root.querySelector('[data-label]').textContent=label;root.querySelector('[data-value]').textContent=new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(value);root.querySelector('[data-copy]').textContent=copy;root.querySelector('[role=status]').textContent='Tarjeta '+(index+1)+' de '+cards.length;run(card,{rotate:[-8,0],scale:[.9,1],ease:createSpring({stiffness:180,damping:14})});};root.querySelector('[data-prev]').addEventListener('click',()=>{index=(index+cards.length-1)%cards.length;render();},{signal});root.querySelector('[data-next]').addEventListener('click',()=>{index=(index+1)%cards.length;render();},{signal});root.querySelector('[data-reset]').addEventListener('click',()=>{index=0;render();},{signal});render();
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="carousel-spring-physics-deck"]').forEach(mountCarouselSpringPhysicsDeck);
// HTML:
/*
<div class="cxd-special" data-cxd-control="carousel-spring-physics-deck"><h3>Mazo de inversiones</h3><div class="cxd-special__scene" data-card><small data-label></small><strong data-value></strong><p data-copy></p></div><div class="cxd-special__actions"><button type="button" data-prev>Anterior</button><button type="button" data-next>Siguiente</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></div>
*/
