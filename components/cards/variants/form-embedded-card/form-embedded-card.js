// Copia styles.css. La función devuelve un desmontador.
export function mountFormEmbeddedCard(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const input=root.querySelector('[data-input]');const total=root.querySelector('[data-total]');input.addEventListener('input',()=>{const count=Math.max(0,Number(input.value)||0);total.textContent='$'+(count*24)+'/mes';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="form-embedded-card"]').forEach(mountFormEmbeddedCard);
// HTML:
/*
<div class="cxd-card" data-cxd-control="form-embedded-card"><h3>Calculadora rápida de instancia</h3><label>Núcleos vCPU <input type="number" data-input min="1" max="128" value="8" /></label><p>Costo estimado: <strong data-total>$192/mes</strong></p></div>
*/
