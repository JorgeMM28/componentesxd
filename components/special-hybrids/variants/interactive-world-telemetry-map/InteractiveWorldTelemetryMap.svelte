<script lang="ts">
import { mountInteractiveWorldTelemetryMap } from './interactive-world-telemetry-map.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountInteractiveWorldTelemetryMap(node) }; }
</script>
<section class="cxd-special cxd-special--config" data-cxd-control="interactive-world-telemetry-map" use:control><header><small>TELEMETRÍA MUNDIAL</small><h3>Telemetría mundial</h3></header><p data-copy>Ruta global restaurada</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">San Francisco</button><button type="button" data-item="1" aria-pressed="false">Frankfurt</button><button type="button" data-item="2" aria-pressed="false">Tokyo</button></div><strong data-output>San Francisco</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Redirigir tráfico</button><button type="button" data-reset>Restaurar</button></div><span role="status">Ruta global restaurada</span></section>
