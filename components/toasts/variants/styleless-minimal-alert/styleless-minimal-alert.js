// Copia styles.css. La función devuelve un desmontador.
export function mountStylelessMinimalAlert(root) {
  const controller = new AbortController(); const signal = controller.signal; let timer;
  // La alerta es informativa y no necesita listeners.
  return () => { controller.abort(); clearTimeout(timer); };
}
// Montaje: document.querySelectorAll('[data-cxd-control="styleless-minimal-alert"]').forEach(mountStylelessMinimalAlert);
// HTML:
/*
<div class="cxd-toast cxd-toast--minimal" data-cxd-control="styleless-minimal-alert" role="status"><strong>AVISO DEL SISTEMA</strong><p>La ventana de mantenimiento iniciará en 15 minutos sin interrupción de tráfico.</p></div>
*/
