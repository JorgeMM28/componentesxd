// Copia styles.css. La función devuelve un desmontador.
export function mountMobileTouchTabbar(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-destination]');if(!button||!root.contains(button))return;root.querySelectorAll('[data-destination]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));status.textContent='Vista activa: '+button.dataset.destination;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="mobile-touch-tabbar"]').forEach(mountMobileTouchTabbar);
// HTML:
/*
<div class="cxd-nav cxd-nav--mobile" data-cxd-control="mobile-touch-tabbar"><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Biblioteca" aria-pressed="false">Biblioteca</button><button type="button" data-destination="Motion" aria-pressed="false">Motion</button><button type="button" data-destination="Métricas" aria-pressed="false">Métricas</button><span role="status">Vista activa: Inicio</span></div>
*/
