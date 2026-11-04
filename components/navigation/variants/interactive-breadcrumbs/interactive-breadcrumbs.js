// Copia styles.css. La función devuelve un desmontador.
export function mountInteractiveBreadcrumbs(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-path]');if(button)status.textContent='Nivel seleccionado: '+button.dataset.path;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="interactive-breadcrumbs"]').forEach(mountInteractiveBreadcrumbs);
// HTML:
/*
<div class="cxd-nav" data-cxd-control="interactive-breadcrumbs"><nav aria-label="Ruta de navegación"><button type="button" data-path="Inicio">Inicio</button><span> / </span><button type="button" data-path="Componentes">Componentes</button><span> / </span><button type="button" data-path="Botones">Botones</button></nav><span role="status">Ruta actual: Inicio / Componentes / Botones</span></div>
*/
