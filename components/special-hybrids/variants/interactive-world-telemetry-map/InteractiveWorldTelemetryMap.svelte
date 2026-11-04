<script lang="ts">
import { mountInteractiveWorldTelemetryMap } from './interactive-world-telemetry-map.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountInteractiveWorldTelemetryMap(node) }; }
</script>
<div class="cxd-special" data-cxd-control="interactive-world-telemetry-map" use:control><h3>Telemetría mundial</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Redirigir tráfico</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Ruta global restaurada</span></div>
