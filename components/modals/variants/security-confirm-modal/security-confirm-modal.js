// Copia styles.css. La función devuelve un desmontador.
export function mountSecurityConfirmModal(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const dialog=root.querySelector('dialog'); const trigger=root.querySelector('[data-open]'); const status=root.querySelector('[role="status"]'); trigger.addEventListener('click',()=>dialog.showModal(),{signal}); dialog.addEventListener('click',event=>{if(event.target.closest('[data-close]'))dialog.close();},{signal}); const input=dialog.querySelector('[data-confirm-input]');const button=dialog.querySelector('[data-delete]');input.addEventListener('input',()=>{button.disabled=input.value.trim().toUpperCase()!=='ELIMINAR';},{signal});button.addEventListener('click',()=>{status.textContent='Eliminación simulada';input.value='';button.disabled=true;dialog.close();},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="security-confirm-modal"]').forEach(mountSecurityConfirmModal);
// HTML:
/*
<div class="cxd-dialog" data-cxd-control="security-confirm-modal"><button type="button" data-open>Eliminar recurso</button><span role="status">Sin cambios</span><dialog aria-label="Confirmar eliminación"><h3>Confirmar eliminación</h3><p>Escribe ELIMINAR para habilitar la acción de demostración.</p><label>Confirmación <input type="text" data-confirm-input autocomplete="off" /></label><div class="cxd-dialog__actions"><button type="button" data-delete disabled>Eliminar</button><button type="button" data-close>Cancelar</button></div></dialog></div>
*/
