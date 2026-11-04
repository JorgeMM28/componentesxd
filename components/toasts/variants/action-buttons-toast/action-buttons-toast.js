// Copia styles.css. La función devuelve un desmontador.
export function mountActionButtonsToast(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]'); root.addEventListener('click',event=>{const button=event.target.closest('[data-action]'); if(button && root.contains(button)) status.textContent='Estado: '+button.dataset.action;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="action-buttons-toast"]').forEach(mountActionButtonsToast);
// HTML:
/*
<div class="cxd-toast" data-cxd-control="action-buttons-toast"><strong>Solicitud de fusión en rama principal (#409)</strong><p role="status">¿Deseas aprobar y desplegar los cambios?</p><button type="button" data-action="Aprobado y desplegado">Aprobar</button><button type="button" data-action="Pospuesto por 1 hora">Posponer</button><button type="button" data-action="Operación deshecha">Deshacer</button></div>
*/
