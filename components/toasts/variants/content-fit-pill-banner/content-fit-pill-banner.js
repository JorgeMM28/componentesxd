// Copia styles.css. La función devuelve un desmontador.
export function mountContentFitPillBanner(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const button=root.querySelector('[data-dismiss]'); const message=root.querySelector('[data-message]'); const status=root.querySelector('[role="status"]'); button.addEventListener('click',()=>{message.textContent='Notificación leída'; status.textContent='Confirmado';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="content-fit-pill-banner"]').forEach(mountContentFitPillBanner);
// HTML:
/*
<div class="cxd-toast cxd-toast--pill" data-cxd-control="content-fit-pill-banner"><strong>NUEVO</strong><span data-message>Motor Anime.js v4 integrado</span><button type="button" data-dismiss>Entendido</button><span role="status"></span></div>
*/
