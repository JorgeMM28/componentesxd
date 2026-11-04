// Copia styles.css. La función devuelve un desmontador.
export function mountModernGlassModal(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const dialog=root.querySelector('dialog'); const trigger=root.querySelector('[data-open]'); const status=root.querySelector('[role="status"]'); trigger.addEventListener('click',()=>dialog.showModal(),{signal}); dialog.addEventListener('click',event=>{if(event.target.closest('[data-close]'))dialog.close();},{signal}); dialog.querySelector('[data-confirm]').addEventListener('click',()=>{status.textContent='Actualización aplicada';dialog.close();},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="modern-glass-modal"]').forEach(mountModernGlassModal);
// HTML:
/*
<div class="cxd-dialog" data-cxd-control="modern-glass-modal"><button type="button" data-open>Abrir diálogo</button><span role="status">Listo</span><dialog aria-label="Actualizar interfaz"><h3>Actualizar interfaz</h3><p>Aplica la configuración seleccionada a la demostración.</p><div class="cxd-dialog__actions"><button type="button" data-confirm>Confirmar</button><button type="button" data-close>Cancelar</button></div></dialog></div>
*/
