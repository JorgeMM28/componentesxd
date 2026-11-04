<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderChronoSlaIncidentTable(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="chrono-sla-incident-table"><h3>Incidentes SLA</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Resolver incidente</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Incidente reabierto</span></div>
<script type="module">
import { mountChronoSlaIncidentTable } from '/assets/chrono-sla-incident-table.js';
document.querySelectorAll('[data-cxd-control="chrono-sla-incident-table"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountChronoSlaIncidentTable(root); });
</script>
HTML; }
