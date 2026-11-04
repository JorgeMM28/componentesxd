// Copia styles.css. La función devuelve un desmontador.
export function mountFormCreationModal(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const dialog=root.querySelector('dialog'); const trigger=root.querySelector('[data-open]'); const status=root.querySelector('[role="status"]'); trigger.addEventListener('click',()=>dialog.showModal(),{signal}); dialog.addEventListener('click',event=>{if(event.target.closest('[data-close]'))dialog.close();},{signal}); dialog.querySelector('[data-form]').addEventListener('submit',event=>{event.preventDefault();const name=dialog.querySelector('[data-name]').value.trim();if(!name)return;status.textContent='Instancia '+name+' preparada en '+dialog.querySelector('[data-region]').value;dialog.close();},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="form-creation-modal"]').forEach(mountFormCreationModal);
// HTML:
/*
<div class="cxd-dialog" data-cxd-control="form-creation-modal"><button type="button" data-open>Crear instancia</button><span role="status">Listo</span><dialog aria-label="Crear instancia"><h3>Crear instancia</h3><form data-form><label>Nombre <input type="text" data-name required value="edge-analytics" /></label><label>Región <select data-region><option>us-east-1</option><option>eu-central-1</option><option>ap-northeast-1</option></select></label><div class="cxd-dialog__actions"><button type="submit">Crear</button><button type="button" data-close>Cancelar</button></div></form></dialog></div>
*/
