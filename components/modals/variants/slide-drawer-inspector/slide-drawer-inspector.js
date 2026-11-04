// Copia styles.css. La función devuelve un desmontador.
export function mountSlideDrawerInspector(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const dialog=root.querySelector('dialog'); const trigger=root.querySelector('[data-open]'); const status=root.querySelector('[role="status"]'); trigger.addEventListener('click',()=>dialog.showModal(),{signal}); dialog.addEventListener('click',event=>{if(event.target.closest('[data-close]'))dialog.close();},{signal}); dialog.addEventListener('click',event=>{const tab=event.target.closest('[data-tab]');if(!tab)return;dialog.querySelectorAll('[data-tab]').forEach(item=>item.setAttribute('aria-pressed',String(item===tab)));dialog.querySelectorAll('[data-panel]').forEach(panel=>{panel.hidden=panel.dataset.panel!==tab.dataset.tab;});},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="slide-drawer-inspector"]').forEach(mountSlideDrawerInspector);
// HTML:
/*
<div class="cxd-dialog cxd-dialog--drawer" data-cxd-control="slide-drawer-inspector"><button type="button" data-open>Abrir inspector</button><span role="status">Inspector cerrado</span><dialog aria-label="Inspector lateral"><h3>Inspector de recurso</h3><div class="cxd-dialog__actions"><button type="button" data-tab="details" aria-pressed="true">Propiedades</button><button type="button" data-tab="json" aria-pressed="false">JSON</button></div><p data-panel="details">Región: us-east-1 · Estado: activo</p><pre data-panel="json" hidden>&#123; "region": "us-east-1", "activo": true &#125;</pre><button type="button" data-close>Cerrar</button></dialog></div>
*/
