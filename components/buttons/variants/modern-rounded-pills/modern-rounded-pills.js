// Copia también styles.css. Devuelve una función para retirar el listener.
export function mountModernRoundedPills(root) {
  const handler = (event) => {
    const button = event.target.closest('[data-message]');
    if (!button || !root.contains(button)) return;
    root.querySelectorAll('[data-message]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    root.querySelector('[role="status"]').textContent = 'ACCIÓN EJECUTADA: ' + button.dataset.message;
  };
  root.addEventListener('click', handler);
  return () => root.removeEventListener('click', handler);
}
// Montaje: document.querySelectorAll('[data-cxd-pills]').forEach(mountModernRoundedPills);
// HTML para montar este módulo:
/*
<div class="cxd-pills" data-cxd-pills>
  <button type="button" class="cxd-pills__button cxd-pills__button--primary" data-message="Despliegue Iniciado" aria-pressed="false">Botón Píldora Moderno</button>
  <button type="button" class="cxd-pills__button cxd-pills__button--soft" data-message="Modo Previsualización Activo" aria-pressed="false">Secundario Suave</button>
  <button type="button" class="cxd-pills__button cxd-pills__button--outline" data-message="Sincronizado con Éxito" aria-pressed="false">Contorno Redondeado</button>
  <span class="cxd-pills__status" role="status">Selecciona una acción</span>
</div>
*/
