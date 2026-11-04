// Copia styles.css. La función devuelve un desmontador.
export function mountFloatingPillNavbar(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-destination]');if(!button||!root.contains(button))return;root.querySelectorAll('[data-destination]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));status.textContent='Vista activa: '+button.dataset.destination;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="floating-pill-navbar"]').forEach(mountFloatingPillNavbar);
// HTML:
/*
<div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-pill-navbar"><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Componentes" aria-pressed="false">Componentes</button><button type="button" data-destination="Animaciones" aria-pressed="false">Animaciones</button><span role="status">Vista activa: Inicio</span></div>
*/
