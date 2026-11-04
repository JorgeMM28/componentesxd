// Copia styles.css. La función devuelve un desmontador.
export function mountCrudActions(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const body=root.querySelector('[data-body]');const status=root.querySelector('[role="status"]');const prototype=body.rows[0].cloneNode(true);let serial=0;const sync=()=>{status.textContent=body.rows.length+' registros';};root.addEventListener('click',event=>{const target=event.target;const row=target.closest('tr');if(target.closest('[data-add]')){const item=prototype.cloneNode(true);item.querySelector('[data-name]').textContent='Servicio '+(++serial);body.append(item);sync();return;}if(!row)return;if(target.closest('[data-toggle]')){const state=row.querySelector('[data-state]');state.textContent=state.textContent==='Activo'?'Pausado':'Activo';}if(target.closest('[data-duplicate]')){const copy=row.cloneNode(true);copy.querySelector('[data-name]').textContent+=' (copia)';body.append(copy);sync();}if(target.closest('[data-delete]')){row.remove();sync();}},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="crud-actions"]').forEach(mountCrudActions);
// HTML:
/*
<div class="cxd-table" data-cxd-control="crud-actions"><button type="button" data-add>Agregar registro</button><table><thead><tr><th>Servicio</th><th>Estado</th><th>Acciones</th></tr></thead><tbody data-body><tr><td data-name>API</td><td data-state>Activo</td><td><button type="button" data-toggle>Estado</button><button type="button" data-duplicate>Duplicar</button><button type="button" data-delete>Eliminar</button></td></tr><tr><td data-name>Worker</td><td data-state>Activo</td><td><button type="button" data-toggle>Estado</button><button type="button" data-duplicate>Duplicar</button><button type="button" data-delete>Eliminar</button></td></tr></tbody></table><span role="status">2 registros</span></div>
*/
