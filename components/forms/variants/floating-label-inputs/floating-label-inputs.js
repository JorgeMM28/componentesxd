// Copia styles.css. La función devuelve un desmontador.
export function mountFloatingLabelInputs(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const input=root.querySelector('[data-input]'); const status=root.querySelector('[role="status"]'); input.addEventListener('input',()=>{status.textContent=input.value?'Nombre: '+input.value:'Escribe un nombre';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="floating-label-inputs"]').forEach(mountFloatingLabelInputs);
// HTML:
/*
<div class="cxd-form" data-cxd-control="floating-label-inputs"><label class="cxd-form__float"><span>Nombre del cluster</span><input type="text" data-input value="us-east-production-01" /></label><span role="status">Etiqueta flotante</span></div>
*/
