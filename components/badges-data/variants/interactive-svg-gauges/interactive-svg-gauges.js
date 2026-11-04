// Copia styles.css. La función devuelve un desmontador.
export function mountInteractiveSvgGauges(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const slider=root.querySelector('[data-slider]');const gauge=root.querySelector('[data-gauge]');const value=root.querySelector('[data-value]');const status=root.querySelector('[role="status"]');const sync=()=>{gauge.style.setProperty('--value',slider.value);value.textContent=slider.value+'%';status.textContent='SLA global: '+slider.value+'%';};slider.addEventListener('input',sync,{signal});root.addEventListener('click',event=>{const button=event.target.closest('[data-set]');if(button){slider.value=button.dataset.set;sync();}},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="interactive-svg-gauges"]').forEach(mountInteractiveSvgGauges);
// HTML:
/*
<div class="cxd-data" data-cxd-control="interactive-svg-gauges"><div class="cxd-data__gauge" data-gauge><strong data-value>84%</strong></div><label>Ajustar porcentaje <input type="range" min="0" max="100" value="84" data-slider /></label><button type="button" data-set="45">45%</button><button type="button" data-set="78">78%</button><button type="button" data-set="99">99%</button><span role="status">SLA global: 84%</span></div>
*/
