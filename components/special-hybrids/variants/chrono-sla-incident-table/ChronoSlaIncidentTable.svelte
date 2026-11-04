<script lang="ts">
import { mountChronoSlaIncidentTable } from './chrono-sla-incident-table.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountChronoSlaIncidentTable(node) }; }
</script>
<div class="cxd-special" data-cxd-control="chrono-sla-incident-table" use:control><h3>Incidentes SLA</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Resolver incidente</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Incidente reabierto</span></div>
