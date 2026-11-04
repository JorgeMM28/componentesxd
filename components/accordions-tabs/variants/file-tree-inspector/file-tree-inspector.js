// Copia styles.css. La función devuelve un desmontador.
export function mountFileTreeInspector(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const output=root.querySelector('[data-output]');root.addEventListener('click',event=>{const button=event.target.closest('[data-file]');if(button)output.textContent='Archivo seleccionado: '+button.dataset.file;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="file-tree-inspector"]').forEach(mountFileTreeInspector);
// HTML:
/*
<div class="cxd-widget" data-cxd-control="file-tree-inspector"><div class="cxd-widget__columns"><div class="cxd-widget__list"><strong>src/</strong><div><button type="button" data-file="index.astro">index.astro</button></div><div><button type="button" data-file="tokens.css">tokens.css</button></div></div><div class="cxd-widget__list"><strong>Inspector</strong><p data-output>Selecciona un archivo</p></div></div></div>
*/
