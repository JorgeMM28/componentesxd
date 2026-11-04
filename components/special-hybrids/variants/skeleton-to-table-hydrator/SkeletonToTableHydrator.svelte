<script lang="ts">
import { mountSkeletonToTableHydrator } from './skeleton-to-table-hydrator.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountSkeletonToTableHydrator(node) }; }
</script>
<div class="cxd-special" data-cxd-control="skeleton-to-table-hydrator" use:control><h3>Hidratador de datos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Hidratar tabla</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Skeleton restaurado</span></div>
