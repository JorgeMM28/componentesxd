// Copia styles.css. La función devuelve un desmontador.
export function mountTransferDualList(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const available=root.querySelector('[data-available]');const active=root.querySelector('[data-active]');const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-transfer]');if(!button)return;const item=button.closest('[data-item]');const activate=item.parentElement===available;(activate?active:available).append(item);button.textContent=activate?'← Desactivar':'Activar →';status.textContent=item.querySelector('span').textContent+(activate?' activado':' desactivado');},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="transfer-dual-list"]').forEach(mountTransferDualList);
// HTML:
/*
<div class="cxd-widget" data-cxd-control="transfer-dual-list"><div class="cxd-widget__columns"><div class="cxd-widget__list" data-available><strong>Disponibles</strong><div data-item><span>WAF</span> <button type="button" data-transfer>Activar →</button></div><div data-item><span>Caché</span> <button type="button" data-transfer>Activar →</button></div></div><div class="cxd-widget__list" data-active><strong>Activos</strong></div></div><span role="status">Selecciona un módulo</span></div>
*/
