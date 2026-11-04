// Copia styles.css. La función devuelve un desmontador.
export function mountAccordionExclusive(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  root.addEventListener('click',event=>{const button=event.target.closest('[data-open]');if(!button)return;const close=button.getAttribute('aria-expanded')==='true';root.querySelectorAll('[data-open]').forEach(item=>item.setAttribute('aria-expanded',String(!close&&item===button)));root.querySelectorAll('[data-panel]').forEach(panel=>{panel.hidden=close||panel.dataset.panel!==button.dataset.open;});},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="accordion-exclusive"]').forEach(mountAccordionExclusive);
// HTML:
/*
<div class="cxd-widget" data-cxd-control="accordion-exclusive"><button type="button" data-open="one" aria-expanded="true">01 · Tokens</button><div class="cxd-widget__panel" data-panel="one">Colores y tipografía.</div><button type="button" data-open="two" aria-expanded="false">02 · Componentes</button><div class="cxd-widget__panel" data-panel="two" hidden>Bloques reutilizables.</div><button type="button" data-open="three" aria-expanded="false">03 · Animaciones</button><div class="cxd-widget__panel" data-panel="three" hidden>Movimiento e interacción.</div></div>
*/
