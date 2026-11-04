<script lang="ts">
import { mountFloatingFabRadial } from './floating-fab-radial.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFloatingFabRadial(node) }; }
</script>
<div class="cxd-control" data-cxd-control="floating-fab-radial" use:control><button type="button" data-fab aria-expanded="true">Abrir / Cerrar menú flotante</button><span role="status">SATÉLITES ACTIVOS</span><div class="cxd-control__actions" data-actions><button type="button" data-action="Nuevo despliegue ejecutado">01. Nuevo despliegue</button><button type="button" data-action="Repositorio clonado">02. Clonar repositorio</button><button type="button" data-action="Logs exportados">03. Exportar logs</button></div></div>
