// Copia styles.css. La función devuelve un desmontador.
export function mountTactileSwitchesSliders(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const value=root.querySelector('[data-value]');const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-step]');if(!button||!root.contains(button))return;const next=Math.max(1,Math.min(128,Number(value.textContent)+Number(button.dataset.step)));value.textContent=String(next);status.textContent=next+' réplicas';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="tactile-switches-sliders"]').forEach(mountTactileSwitchesSliders);
// HTML:
/*
<div class="cxd-form" data-cxd-control="tactile-switches-sliders"><label><input type="checkbox" checked /> Auto-deploy en push</label><label><input type="checkbox" /> Modo estricto WAF</label><button type="button" data-step="-1" aria-label="Reducir réplicas">−</button><span data-value>4</span><button type="button" data-step="1" aria-label="Aumentar réplicas">+</button><span role="status">4 réplicas</span></div>
*/
