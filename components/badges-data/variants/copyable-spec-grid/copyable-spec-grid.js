// Copia styles.css. La función devuelve un desmontador.
export function mountCopyableSpecGrid(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');root.addEventListener('click',async event=>{const button=event.target.closest('[data-copy]');if(!button)return;try{await navigator.clipboard.writeText(button.dataset.copy);status.textContent='Valor copiado';}catch{status.textContent='No se pudo copiar: '+button.dataset.copy;}},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="copyable-spec-grid"]').forEach(mountCopyableSpecGrid);
// HTML:
/*
<div class="cxd-data" data-cxd-control="copyable-spec-grid"><button type="button" data-copy="cxd_public_demo">API_PUBLIC_KEY · copiar</button><button type="button" data-copy="example.test:4321">PRIMARY_ENDPOINT · copiar</button><button type="button" data-copy="sha256:demo">BUILD_DIGEST · copiar</button><span role="status">Selecciona un valor</span></div>
*/
