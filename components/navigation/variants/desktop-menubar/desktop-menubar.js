// Copia styles.css. La función devuelve un desmontador.
export function mountDesktopMenubar(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const menu=root.querySelector('[data-menu]');const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const trigger=event.target.closest('[data-menu-trigger]');const command=event.target.closest('[data-command]');if(trigger){const open=trigger.getAttribute('aria-expanded')!=='true';root.querySelectorAll('[data-menu-trigger]').forEach(item=>item.setAttribute('aria-expanded','false'));trigger.setAttribute('aria-expanded',String(open));menu.hidden=!open;}if(command){status.textContent='Comando: '+command.dataset.command;menu.hidden=true;root.querySelectorAll('[data-menu-trigger]').forEach(item=>item.setAttribute('aria-expanded','false'));}},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="desktop-menubar"]').forEach(mountDesktopMenubar);
// HTML:
/*
<div class="cxd-nav" data-cxd-control="desktop-menubar"><button type="button" data-menu-trigger aria-expanded="false">Archivo</button><button type="button" data-menu-trigger aria-expanded="false">Edición</button><button type="button" data-menu-trigger aria-expanded="false">Git</button><div class="cxd-nav__menu" data-menu hidden><button type="button" data-command="Nuevo">Nuevo</button><button type="button" data-command="Guardar">Guardar</button><button type="button" data-command="Exportar">Exportar</button></div><span role="status">Selecciona un menú</span></div>
*/
