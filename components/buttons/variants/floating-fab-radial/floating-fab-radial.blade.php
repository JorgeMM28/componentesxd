{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-control" data-cxd-control="floating-fab-radial"><button type="button" data-fab aria-expanded="true">Abrir / Cerrar menú flotante</button><span role="status">SATÉLITES ACTIVOS</span><div class="cxd-control__actions" data-actions><button type="button" data-action="Nuevo despliegue ejecutado">01. Nuevo despliegue</button><button type="button" data-action="Repositorio clonado">02. Clonar repositorio</button><button type="button" data-action="Logs exportados">03. Exportar logs</button></div></div>
<script type="module">
import { mountFloatingFabRadial } from '/assets/floating-fab-radial.js';
document.querySelectorAll('[data-cxd-control="floating-fab-radial"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFloatingFabRadial(root); });
</script>
