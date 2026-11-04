// Copia styles.css. La función devuelve un desmontador.
export function mountDynamicIslandMorph(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const details=root.querySelector('[data-details]'); const title=root.querySelector('[data-title]'); const status=root.querySelector('[role="status"]'); root.addEventListener('click',event=>{const button=event.target.closest('[data-mode]'); if(!button)return; const expanded=button.dataset.mode==='expanded'; details.hidden=!expanded; title.textContent=expanded?'MODO EXPANDIDO':'MODO COMPACTO // IDLE'; status.textContent=expanded?'Detalles visibles':'Modo compacto';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="dynamic-island-morph"]').forEach(mountDynamicIslandMorph);
// HTML:
/*
<div class="cxd-toast cxd-toast--island" data-cxd-control="dynamic-island-morph"><strong data-title>MODO COMPACTO // IDLE</strong><button type="button" data-mode="compact">Compacto</button><button type="button" data-mode="expanded">Expandir detalles</button><p data-details hidden>Despliegue en curso hacia 12 regiones · 94% completado.</p><span role="status">Modo compacto</span></div>
*/
