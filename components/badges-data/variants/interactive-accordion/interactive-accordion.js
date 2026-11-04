// Copia styles.css. La función devuelve un desmontador.
export function mountInteractiveAccordion(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  root.addEventListener('click',event=>{const button=event.target.closest('[data-open]');if(!button||!root.contains(button))return;const close=button.getAttribute('aria-expanded')==='true';root.querySelectorAll('[data-open]').forEach(item=>item.setAttribute('aria-expanded',String(!close&&item===button)));root.querySelectorAll('[data-panel]').forEach(panel=>{panel.hidden=close||panel.dataset.panel!==button.dataset.open;});},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="interactive-accordion"]').forEach(mountInteractiveAccordion);
// HTML:
/*
<div class="cxd-data" data-cxd-control="interactive-accordion"><div class="cxd-data__list"><div class="cxd-data__item"><button type="button" data-open="one" aria-expanded="true">01 · Tokens CSS</button><p data-panel="one">Colores, radios y tipografías mediante variables.</p></div><div class="cxd-data__item"><button type="button" data-open="two" aria-expanded="false">02 · Arquitectura de islas</button><p data-panel="two" hidden>Hidratación selectiva de componentes interactivos.</p></div></div></div>
*/
