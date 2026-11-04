<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderChartEditor(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="chart-editor"><h3>Editor de gráficos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Cambiar visual</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Gráfico restaurado</span></div>
<script type="module">
import { mountChartEditor } from '/assets/chart-editor.js';
document.querySelectorAll('[data-cxd-control="chart-editor"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountChartEditor(root); });
</script>
HTML; }
