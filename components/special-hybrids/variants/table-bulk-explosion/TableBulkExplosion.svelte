<script lang="ts">
import { mountTableBulkExplosion } from './table-bulk-explosion.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountTableBulkExplosion(node) }; }
</script>
<div class="cxd-special" data-cxd-control="table-bulk-explosion" use:control><h3>Selección masiva</h3><table><thead><tr><th>Seleccionar</th><th>Recurso</th><th>Estado</th></tr></thead><tbody data-rows></tbody></table><div class="cxd-special__actions"><button type="button" data-purge>Eliminar selección</button><button type="button" data-reset>Restaurar todo</button></div><span role="status"></span></div>
