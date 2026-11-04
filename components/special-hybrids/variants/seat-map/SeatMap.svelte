<script lang="ts">
import { mountSeatMap } from './seat-map.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountSeatMap(node) }; }
</script>
<div class="cxd-special" data-cxd-control="seat-map" use:control><h3>Mapa de asientos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Reservar asiento</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Mapa restaurado</span></div>
