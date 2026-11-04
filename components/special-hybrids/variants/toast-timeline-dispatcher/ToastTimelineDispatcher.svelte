<script lang="ts">
import { mountToastTimelineDispatcher } from './toast-timeline-dispatcher.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountToastTimelineDispatcher(node) }; }
</script>
<div class="cxd-special" data-cxd-control="toast-timeline-dispatcher" use:control><h3>Despachador de alertas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Despachar alerta</button><button type="button" data-reset>Reiniciar</button></div><span role="status">La cola está vacía</span></div>
