// Copia también styles.css. Devuelve una función para retirar el listener.
export function mountStylelessTextLinks(root) {
  const handler = (event) => {
    const button = event.target.closest('[data-message]');
    if (!button || !root.contains(button)) return;
    root.querySelectorAll('[data-message]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    root.querySelector('[role="status"]').textContent = 'RUTA ACTIVA: ' + button.dataset.message;
  };
  root.addEventListener('click', handler);
  return () => root.removeEventListener('click', handler);
}
// Montaje: document.querySelectorAll('[data-cxd-text-links]').forEach(mountStylelessTextLinks);
// HTML para montar este módulo:
/*
<div class="cxd-text-links" data-cxd-text-links>
  <button type="button" class="cxd-text-links__button cxd-text-links__button--documentation" data-message="Abriendo especificación técnica v4.2..." aria-pressed="false">Explorar Documentación Técnica</button>
  <button type="button" class="cxd-text-links__button cxd-text-links__button--download" data-message="Descargando manifiesto raw (42 KB)..." aria-pressed="false">Descargar Especificación Raw</button>
  <span class="cxd-text-links__status" role="status">Selecciona una opción</span>
</div>
*/
