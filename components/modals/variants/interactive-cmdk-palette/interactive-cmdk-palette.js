// Copia styles.css. La función devuelve un desmontador.
export function mountInteractiveCmdkPalette(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const dialog=root.querySelector('dialog'); const trigger=root.querySelector('[data-open]'); const status=root.querySelector('[role="status"]'); trigger.addEventListener('click',()=>dialog.showModal(),{signal}); dialog.addEventListener('click',event=>{if(event.target.closest('[data-close]'))dialog.close();},{signal}); const search=dialog.querySelector('[data-search]');search.addEventListener('input',()=>{const query=search.value.toLowerCase().trim();dialog.querySelectorAll('[data-command]').forEach(item=>{item.hidden=!item.dataset.command.toLowerCase().includes(query);});},{signal});dialog.addEventListener('click',event=>{const command=event.target.closest('[data-command]');if(command){status.textContent='Comando seleccionado: '+command.dataset.command;dialog.close();}},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="interactive-cmdk-palette"]').forEach(mountInteractiveCmdkPalette);
// HTML:
/*
<div class="cxd-dialog" data-cxd-control="interactive-cmdk-palette"><button type="button" data-open>Abrir comandos</button><span role="status">Selecciona un comando</span><dialog aria-label="Paleta de comandos"><h3>Paleta de comandos</h3><label>Buscar <input type="search" data-search placeholder="Escribe un comando" /></label><div class="cxd-dialog__list"><button type="button" data-command="Abrir catálogo">Abrir catálogo</button><button type="button" data-command="Ver animaciones">Ver animaciones</button><button type="button" data-command="Cambiar interfaz">Cambiar interfaz</button></div><button type="button" data-close>Cerrar</button></dialog></div>
*/
