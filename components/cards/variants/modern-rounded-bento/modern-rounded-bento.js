// Copia styles.css. La función devuelve un desmontador.
export function mountModernRoundedBento(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  root.addEventListener('pointermove',event=>{const rect=root.getBoundingClientRect();root.style.setProperty('--x',(event.clientX-rect.left)+'px');root.style.setProperty('--y',(event.clientY-rect.top)+'px');},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="modern-rounded-bento"]').forEach(mountModernRoundedBento);
// HTML:
/*
<div class="cxd-card" data-cxd-control="modern-rounded-bento"><span>MODERN BENTO · +31.4%</span><h3>Rendimiento global de red</h3><strong data-metric>2.48M req/s</strong><p>Una tarjeta con iluminación que sigue al cursor.</p></div>
*/
