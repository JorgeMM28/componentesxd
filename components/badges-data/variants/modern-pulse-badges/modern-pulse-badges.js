// Copia styles.css. La función devuelve un desmontador.
export function mountModernPulseBadges(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const status=root.querySelector('[role="status"]');const sync=()=>{status.textContent=Array.from(root.querySelectorAll('[data-tag]')).filter(item=>!item.hidden).length+' etiquetas activas';};root.addEventListener('click',event=>{const tag=event.target.closest('[data-tag]');if(tag)tag.hidden=true;if(event.target.closest('[data-restore]'))root.querySelectorAll('[data-tag]').forEach(item=>item.hidden=false);sync();},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="modern-pulse-badges"]').forEach(mountModernPulseBadges);
// HTML:
/*
<div class="cxd-data" data-cxd-control="modern-pulse-badges"><span class="cxd-data__tag">OPERATIONAL</span><span class="cxd-data__tag">DEGRADED</span><span class="cxd-data__tag">OUTAGE</span><button type="button" data-tag>astro-5 ×</button><button type="button" data-tag>animejs-v4 ×</button><button type="button" data-tag>typescript ×</button><button type="button" data-restore>Restaurar etiquetas</button><span role="status">3 etiquetas activas</span></div>
*/
