// Copia styles.css. La función devuelve un desmontador.
export function mountFloatingRows(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  // Tabla informativa sin listeners.
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="floating-rows"]').forEach(mountFloatingRows);
// HTML:
/*
<div class="cxd-table cxd-table--floating" data-cxd-control="floating-rows"><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr><tr><td>Sofía</td><td>Diseño</td><td>Online</td></tr></tbody></table></div>
*/
