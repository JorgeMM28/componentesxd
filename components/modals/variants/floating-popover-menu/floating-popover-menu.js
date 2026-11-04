// Copia styles.css. La función devuelve un desmontador.
export function mountFloatingPopoverMenu(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const trigger=root.querySelector('[data-trigger]');const popover=root.querySelector('[data-popover]');const status=root.querySelector('[role="status"]');const close=()=>{popover.hidden=true;trigger.setAttribute('aria-expanded','false');};trigger.addEventListener('click',()=>{popover.hidden=!popover.hidden;trigger.setAttribute('aria-expanded',String(!popover.hidden));},{signal});root.addEventListener('click',event=>{const action=event.target.closest('[data-action]');if(action){status.textContent='Acción: '+action.dataset.action;close();}},{signal});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!popover.hidden){close();trigger.focus();}},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="floating-popover-menu"]').forEach(mountFloatingPopoverMenu);
// HTML:
/*
<div class="cxd-dialog" data-cxd-control="floating-popover-menu"><button type="button" data-trigger aria-expanded="false">Abrir menú contextual</button><div class="cxd-dialog__popover" data-popover hidden><div class="cxd-dialog__list"><button type="button" data-action="Editar">Editar</button><button type="button" data-action="Duplicar">Duplicar</button><button type="button" data-action="Archivar">Archivar</button></div></div><span role="status">Ninguna acción</span></div>
*/
