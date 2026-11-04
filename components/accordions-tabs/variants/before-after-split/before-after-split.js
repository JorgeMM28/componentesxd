// Copia styles.css. La función devuelve un desmontador.
export function mountBeforeAfterSplit(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const range=root.querySelector('[data-range]');const stage=root.querySelector('[data-compare]');const status=root.querySelector('[role="status"]');range.addEventListener('input',()=>{stage.style.setProperty('--split',range.value+'%');status.textContent=range.value+'%';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="before-after-split"]').forEach(mountBeforeAfterSplit);
// HTML:
/*
<div class="cxd-widget" data-cxd-control="before-after-split"><div class="cxd-widget__compare" data-compare>DESPUÉS<span>ANTES</span></div><label>Divisor <input type="range" min="0" max="100" value="50" data-range /></label><span role="status">50%</span></div>
*/
