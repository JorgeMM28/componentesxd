// Copia styles.css. La función devuelve un desmontador.
export function mountExpandableDrawerCard(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  const toggle=root.querySelector('[data-toggle]');const detail=root.querySelector('[data-detail]');toggle.addEventListener('click',()=>{detail.hidden=!detail.hidden;toggle.setAttribute('aria-expanded',String(!detail.hidden));},{signal});
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="expandable-drawer-card"]').forEach(mountExpandableDrawerCard);
// HTML:
/*
<div class="cxd-card" data-cxd-control="expandable-drawer-card"><strong>Reporte de seguridad automático</strong><button type="button" data-toggle aria-expanded="true">Desplegar / ocultar diagnóstico</button><p data-detail>0 vulnerabilidades críticas · Certificados TLS renovados por 90 días.</p></div>
*/
