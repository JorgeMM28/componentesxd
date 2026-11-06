// Copia styles.css. La función devuelve un desmontador.
import { animate, stagger, createSpring } from 'animejs';
export function mountFileExplorer(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  let motion;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const run=(target,options)=>{motion?.pause();if(!reduced.matches)motion=animate(target,options);};signal.addEventListener('abort',()=>motion?.pause(),{once:true});const tree=root.querySelector('[data-tree]');const title=root.querySelector('[data-file-title]');const preview=root.querySelector('[data-file-preview]');const status=root.querySelector('[role=status]');tree.addEventListener('click',event=>{const folder=event.target.closest('[data-folder]');const file=event.target.closest('[data-file]');if(folder){const collapsed=folder.getAttribute('aria-expanded')==='false';folder.setAttribute('aria-expanded',String(collapsed));tree.querySelectorAll('[data-file]').forEach(item=>item.hidden=!collapsed);folder.textContent=(collapsed?'▾ ':'▸ ')+folder.dataset.folder;return;}if(!file)return;title.textContent=file.dataset.file;preview.textContent='// '+file.dataset.file+'\nArchivo listo para abrir o copiar.';status.textContent='Vista previa actualizada.';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="file-explorer"]').forEach(mountFileExplorer);
// HTML:
/*
<section class="cxd-special cxd-files" data-cxd-control="file-explorer"><header><small>/PROYECTO</small><h3 data-file-title>src/components</h3></header><nav data-tree><button type="button" data-folder="src">▾ src</button><button type="button" data-file="LivePreview.astro">　LivePreview.astro</button><button type="button" data-file="tokens.css">　tokens.css</button><button type="button" data-file="README.md">README.md</button></nav><pre data-file-preview>Selecciona un archivo para ver su resumen.</pre><span role="status">4 elementos indexados.</span></section>
*/
