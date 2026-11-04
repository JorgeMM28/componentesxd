<script lang="ts">
import { mountSearchGrid2dRipple } from './search-grid-2d-ripple.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountSearchGrid2dRipple(node) }; }
</script>
<div class="cxd-special" data-cxd-control="search-grid-2d-ripple" use:control><h3>Buscador de nodos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Propagar onda</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Matriz restaurada</span></div>
