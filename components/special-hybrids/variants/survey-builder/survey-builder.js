// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountSurveyBuilder(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const questions=root.querySelector('[data-questions]');const status=root.querySelector('[role=status]');questions.addEventListener('click',event=>{const up=event.target.closest('[data-up]');if(!up)return;const item=up.closest('li');const previous=item.previousElementSibling;if(previous)questions.insertBefore(item,previous);status.textContent='Pregunta movida: '+item.firstChild.textContent.trim();},{signal});root.querySelector('[data-add]').addEventListener('click',()=>{const item=document.createElement('li');item.append('Nueva pregunta '+(questions.children.length+1)+' ');const up=document.createElement('button');up.type='button';up.dataset.up='';up.textContent='↑';item.append(up);questions.append(item);status.textContent=questions.children.length+' preguntas activas.';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="survey-builder"]').forEach(mountSurveyBuilder);
// HTML:
/*
<section class="cxd-special cxd-survey" data-cxd-control="survey-builder"><header><small>ENCUESTA</small><h3>Prioriza las preguntas</h3></header><ol data-questions><li>Experiencia de búsqueda <button type="button" data-up>↑</button></li><li>Velocidad de carga <button type="button" data-up>↑</button></li><li>Documentación <button type="button" data-up>↑</button></li></ol><button type="button" data-add>Añadir pregunta</button><span role="status">3 preguntas activas.</span></section>
*/
