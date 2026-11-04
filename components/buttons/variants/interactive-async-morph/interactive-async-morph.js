// Copia styles.css. La función devuelve un desmontador.
export function mountInteractiveAsyncMorph(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const button = root.querySelector('[data-async]'); const label = root.querySelector('[data-label]'); const status = root.querySelector('[role="status"]'); const magnetic = root.querySelector('[data-magnetic]');
  button.addEventListener('click', () => { button.disabled = true; button.setAttribute('aria-busy','true'); label.textContent = 'Procesando...'; status.textContent = 'CARGANDO'; timer = setTimeout(() => { button.disabled = false; button.setAttribute('aria-busy','false'); label.textContent = 'Completado · volver a probar'; status.textContent = 'ÉXITO'; }, 950); }, {signal});
  magnetic.addEventListener('pointermove', event => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const rect = magnetic.getBoundingClientRect(); magnetic.style.transform = 'translate(' + ((event.clientX - rect.left - rect.width / 2) * .12) + 'px,' + ((event.clientY - rect.top - rect.height / 2) * .12) + 'px)'; }, {signal});
  magnetic.addEventListener('pointerleave', () => { magnetic.style.transform = ''; }, {signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="interactive-async-morph"]').forEach(mountInteractiveAsyncMorph);
// HTML:
/*
<div class="cxd-control" data-cxd-control="interactive-async-morph"><button type="button" data-async aria-busy="false"><span data-spinner>◌ </span><span data-label>Haz clic para probar el ciclo asíncrono</span></button><button type="button" data-magnetic>Pasa el cursor · magnético</button><span role="status">LISTO</span></div>
*/
