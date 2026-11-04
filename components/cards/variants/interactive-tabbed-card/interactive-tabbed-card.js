// Copia styles.css. La función devuelve un desmontador.
export function mountInteractiveTabbedCard(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  root.addEventListener('click',event=>{const button=event.target.closest('[data-tab]');if(!button||!root.contains(button))return;root.querySelectorAll('[data-tab]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));root.querySelectorAll('[data-panel]').forEach(panel=>{panel.hidden=panel.dataset.panel!==button.dataset.tab;});},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="interactive-tabbed-card"]').forEach(mountInteractiveTabbedCard);
// HTML:
/*
<div class="cxd-card" data-cxd-control="interactive-tabbed-card"><div class="cxd-card__actions"><button type="button" data-tab="summary" aria-pressed="true">Resumen</button><button type="button" data-tab="metrics" aria-pressed="false">Métricas</button><button type="button" data-tab="settings" aria-pressed="false">Ajustes</button></div><p data-panel="summary">Estado general: 99.99% de disponibilidad.</p><p data-panel="metrics" hidden>Latencia media: 7.2 ms · Memoria: 41.2 GB.</p><p data-panel="settings" hidden>Autoescalado habilitado: 4 a 32 nodos.</p></div>
*/
