<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderServerMonitor(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="server-monitor"><h3>Monitor de servidores</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Actualizar métricas</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Monitor en espera</span></div>
<script type="module">
import { mountServerMonitor } from '/assets/server-monitor.js';
document.querySelectorAll('[data-cxd-control="server-monitor"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountServerMonitor(root); });
</script>
HTML; }
