// Copia styles.css. La función devuelve un desmontador.
export function mountStylelessUnderlineInputs(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const input=root.querySelector('[data-input]'); const status=root.querySelector('[role="status"]'); input.addEventListener('input',()=>{status.textContent=input.value.length+' caracteres';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="styleless-underline-inputs"]').forEach(mountStylelessUnderlineInputs);
// HTML:
/*
<div class="cxd-form cxd-form--bare" data-cxd-control="styleless-underline-inputs"><label>Título del documento <input type="text" data-input value="Manifiesto de Diseño Industrial" /></label><span role="status">Edición en vivo</span></div>
*/
