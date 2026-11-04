// Copia styles.css. La función devuelve un desmontador.
export function mountSplitDropdownAction(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const select = root.querySelector('[data-mode]'); const status = root.querySelector('[role="status"]'); const label = root.querySelector('[data-label]');
  select.addEventListener('change', () => { label.textContent = select.value; status.textContent = 'MODO SELECCIONADO: ' + select.value; }, {signal});
  root.querySelector('[data-run]').addEventListener('click', () => { status.textContent = 'ACCIÓN EJECUTADA: ' + select.value; }, {signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="split-dropdown-action"]').forEach(mountSplitDropdownAction);
// HTML:
/*
<div class="cxd-control" data-cxd-control="split-dropdown-action"><button type="button" data-run>Ejecutar: <span data-label>Producción Directa</span></button><select data-mode aria-label="Modo de ejecución"><option>Producción Directa</option><option>Simulación Dry-Run</option><option>Rollback Instantáneo</option></select><span role="status">LISTO PARA EJECUTAR ACCIÓN SELECCIONADA</span></div>
*/
