// Copia styles.css. La función devuelve un desmontador.
export function mountExpandableDetail(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  root.addEventListener('click',event=>{const button=event.target.closest('[data-expand]');if(!button)return;const detail=root.querySelector('[data-detail="'+button.dataset.expand+'"]');detail.hidden=!detail.hidden;button.setAttribute('aria-expanded',String(!detail.hidden));},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="expandable-detail"]').forEach(mountExpandableDetail);
// HTML:
/*
<div class="cxd-table" data-cxd-control="expandable-detail"><table><thead><tr><th>Incidente</th><th>Estado</th></tr></thead><tbody><tr><td><button type="button" data-expand="one" aria-expanded="false">INC-4091 · Latencia</button></td><td>SEV-2</td></tr><tr data-detail="one" hidden><td>Tráfico normalizado al 100%.</td><td>Resuelto</td></tr><tr><td><button type="button" data-expand="two" aria-expanded="false">DEP-8820 · Actualización</button></td><td>Completado</td></tr><tr data-detail="two" hidden><td>24 nodos reiniciados.</td><td>Sin pérdida</td></tr></tbody></table></div>
*/
