// Copia styles.css. La función devuelve un desmontador.
export function mountThumbnailFilmstrip(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const main=root.querySelector('[data-main]');root.addEventListener('click',event=>{const button=event.target.closest('[data-thumb]');if(!button||!root.contains(button))return;root.querySelectorAll('[data-thumb]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));main.textContent=button.dataset.thumb;root.querySelector('[role="status"]').textContent='Imagen: '+button.dataset.thumb;},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="thumbnail-filmstrip"]').forEach(mountThumbnailFilmstrip);
// HTML:
/*
<div class="cxd-carousel" data-cxd-control="thumbnail-filmstrip"><div class="cxd-carousel__item cxd-film-main" data-main>✦ Aurora</div><div class="cxd-filmstrip" aria-label="Seleccionar imagen"><button type="button" data-thumb="✦ Aurora" aria-pressed="true">✦ Aurora</button><button type="button" data-thumb="◉ Órbita" aria-pressed="false">◉ Órbita</button><button type="button" data-thumb="✳ Nébula" aria-pressed="false">✳ Nébula</button></div><span role="status">Imagen: Aurora</span></div>
*/
