// Copia styles.css. La función devuelve un desmontador.
export function mountContentFitKpiBadge(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  // Tarjeta informativa sin listeners.
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="content-fit-kpi-badge"]').forEach(mountContentFitKpiBadge);
// HTML:
/*
<div class="cxd-card cxd-card--fit" data-cxd-control="content-fit-kpi-badge"><span>LATENCIA P99</span><h3>6.42 ms</h3><p>−1.8 ms hoy</p></div>
*/
