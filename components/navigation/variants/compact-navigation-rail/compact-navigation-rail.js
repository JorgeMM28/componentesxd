// Copia styles.css. La función devuelve un desmontador.
export function mountCompactNavigationRail(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-destination]');if(!button||!root.contains(button))return;root.querySelectorAll('[data-destination]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));status.textContent='Vista activa: '+button.dataset.destination;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="compact-navigation-rail"]').forEach(mountCompactNavigationRail);
// HTML:
/*
<div class="cxd-nav cxd-nav--rail" data-cxd-control="compact-navigation-rail"><button type="button" data-destination="Consola" aria-label="Consola" aria-pressed="true">⌘</button><button type="button" data-destination="Catálogo" aria-label="Catálogo" aria-pressed="false">▦</button><button type="button" data-destination="Métricas" aria-label="Métricas" aria-pressed="false">◉</button><span role="status">Vista activa: Consola</span></div>
*/
