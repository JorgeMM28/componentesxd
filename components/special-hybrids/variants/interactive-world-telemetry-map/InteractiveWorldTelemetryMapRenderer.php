<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderInteractiveWorldTelemetryMap(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="interactive-world-telemetry-map"><h3>Telemetría mundial</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Redirigir tráfico</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Ruta global restaurada</span></div>
<script type="module">
import { mountInteractiveWorldTelemetryMap } from '/assets/interactive-world-telemetry-map.js';
document.querySelectorAll('[data-cxd-control="interactive-world-telemetry-map"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountInteractiveWorldTelemetryMap(root); });
</script>
HTML; }
