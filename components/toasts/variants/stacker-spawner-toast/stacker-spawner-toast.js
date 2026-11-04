// Copia styles.css. La función devuelve un desmontador.
export function mountStackerSpawnerToast(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const list=root.querySelector('[data-list]'); root.addEventListener('click',event=>{const button=event.target.closest('[data-kind]'); if(button && root.contains(button)){const item=document.createElement('div'); item.className='cxd-toast__item'; const text=document.createElement('span'); text.textContent=button.dataset.kind; const close=document.createElement('button'); close.type='button'; close.textContent='Cerrar'; close.setAttribute('aria-label','Cerrar '+button.dataset.kind); close.addEventListener('click',()=>item.remove(),{signal}); item.append(text,close); list.prepend(item);}},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="stacker-spawner-toast"]').forEach(mountStackerSpawnerToast);
// HTML:
/*
<div class="cxd-toast" data-cxd-control="stacker-spawner-toast"><strong>Notificaciones apiladas</strong><button type="button" data-kind="Éxito">+ Éxito</button><button type="button" data-kind="Alerta">+ Alerta</button><button type="button" data-kind="Error">+ Error</button><div class="cxd-toast__list" data-list aria-live="polite"></div></div>
*/
