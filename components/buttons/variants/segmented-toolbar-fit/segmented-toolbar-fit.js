// Copia también styles.css. Devuelve una función para retirar el listener.
export function mountSegmentedToolbarFit(root) {
  const handler = (event) => {
    const button = event.target.closest('[data-message]');
    if (!button || !root.contains(button)) return;
    root.querySelectorAll('[data-message]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    root.querySelector('[role="status"]').textContent = 'MODO ACTIVO: ' + button.dataset.message;
  };
  root.addEventListener('click', handler);
  return () => root.removeEventListener('click', handler);
}
// Montaje: document.querySelectorAll('[data-cxd-segments]').forEach(mountSegmentedToolbarFit);
// HTML para montar este módulo:
/*
<div class="cxd-segments" data-cxd-segments>
  <button type="button" class="cxd-segments__button cxd-segments__button--one" data-message="Vista de Tabla Estructurada (10 Variantes)" aria-pressed="true">Vista Tabla</button>
  <button type="button" class="cxd-segments__button cxd-segments__button--two" data-message="Vista de Tarjetas Bento (8 Variantes)" aria-pressed="false">Vista Tarjetas</button>
  <button type="button" class="cxd-segments__button cxd-segments__button--three" data-message="Vista de Grafo Vectorial 3D" aria-pressed="false">Vista Grafo 3D</button>
  <button type="button" class="cxd-segments__button cxd-segments__button--four" data-message="Inspector JSON Raw en Vivo" aria-pressed="false">JSON Raw</button>
  <span class="cxd-segments__status" role="status">MODO ACTIVO: Vista de Tabla Estructurada (10 Variantes)</span>
</div>
*/
