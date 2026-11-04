// Copia styles.css. La función devuelve un desmontador.
export function mountAvatarStackInteractive(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-name]');if(!button)return;root.querySelectorAll('[data-name]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));status.textContent=button.dataset.name+' · '+button.dataset.role;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="avatar-stack-interactive"]').forEach(mountAvatarStackInteractive);
// HTML:
/*
<div class="cxd-data" data-cxd-control="avatar-stack-interactive"><button type="button" class="cxd-data__avatar" data-name="Elena Rostova" data-role="Arquitectura UI" aria-pressed="true">ER</button><button type="button" class="cxd-data__avatar" data-name="Marco Kovacs" data-role="Ingeniería de sistemas" aria-pressed="false">MK</button><button type="button" class="cxd-data__avatar" data-name="Sofía Vance" data-role="Diseño de movimiento" aria-pressed="false">SV</button><span role="status">Elena Rostova · Arquitectura UI</span></div>
*/
