// Copia styles.css. La función devuelve un desmontador.
export function mountContentFitInlineBar(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const input=root.querySelector('[data-domain]'); const status=root.querySelector('[role="status"]'); root.querySelector('[data-connect]').addEventListener('click',()=>{const value=input.value.trim(); status.textContent=value?'Dominio seleccionado: '+value:'Introduce un dominio';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="content-fit-inline-bar"]').forEach(mountContentFitInlineBar);
// HTML:
/*
<div class="cxd-form cxd-form--inline" data-cxd-control="content-fit-inline-bar"><span>https://</span><input type="text" data-domain value="mi-proyecto.dev" aria-label="Dominio" /><button type="button" data-connect>Conectar dominio</button><span role="status">Listo</span></div>
*/
