// Copia styles.css. La función devuelve un desmontador.
export function mountSegmentedPricingToggle(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const price=root.querySelector('[data-price]');const status=root.querySelector('[role="status"]');root.addEventListener('click',event=>{const button=event.target.closest('[data-period]');if(!button)return;root.querySelectorAll('[data-period]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));const annual=button.dataset.period==='yearly';price.textContent=annual?'$192 / año':'$20 / mes';status.textContent=annual?'Facturación anual':'Facturación mensual';},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="segmented-pricing-toggle"]').forEach(mountSegmentedPricingToggle);
// HTML:
/*
<div class="cxd-widget" data-cxd-control="segmented-pricing-toggle"><div class="cxd-widget__row"><button type="button" data-period="monthly" aria-pressed="true">Mensual</button><button type="button" data-period="yearly" aria-pressed="false">Anual · 20% menos</button></div><strong data-price>$20 / mes</strong><span role="status">Facturación mensual</span></div>
*/
