<script lang="ts">
import { mountIsometric3dCityCluster } from './isometric-3d-city-cluster.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountIsometric3dCityCluster(node) }; }
</script>
<div class="cxd-special" data-cxd-control="isometric-3d-city-cluster" use:control><h3>Clúster isométrico</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Distribuir carga</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Clúster restaurado</span></div>
