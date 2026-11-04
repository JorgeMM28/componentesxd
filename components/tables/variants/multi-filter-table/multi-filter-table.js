// Copia styles.css. La función devuelve un desmontador.
export function mountMultiFilterTable(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const search=root.querySelector('[data-search]');const department=root.querySelector('[data-department]');const state=root.querySelector('[data-status]');const status=root.querySelector('[role="status"]');const sync=()=>{const query=search.value.trim().toLocaleLowerCase('es');let count=0;root.querySelectorAll('[data-row]').forEach(row=>{const visible=row.textContent.toLocaleLowerCase('es').includes(query)&&(!department.value||row.dataset.departmentValue===department.value)&&(!state.value||row.dataset.statusValue===state.value);row.hidden=!visible;if(visible)count++;});status.textContent=count+' resultados';};root.addEventListener('input',sync,{signal});root.addEventListener('change',sync,{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="multi-filter-table"]').forEach(mountMultiFilterTable);
// HTML:
/*
<div class="cxd-table" data-cxd-control="multi-filter-table"><div class="cxd-table__toolbar"><label>Buscar <input type="search" data-search /></label><label>Departamento <select data-department><option value="">Todos</option><option>Arquitectura</option><option>Sistemas</option></select></label><label>Estado <select data-status><option value="">Todos</option><option>Online</option><option>Revisión</option></select></label></div><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr data-row data-department-value="Arquitectura" data-status-value="Online"><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr data-row data-department-value="Sistemas" data-status-value="Revisión"><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr></tbody></table><span role="status">2 resultados</span></div>
*/
