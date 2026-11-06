<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderToastTimelineDispatcher(): string { return <<<'HTML'
<section class="cxd-special cxd-special--board" data-cxd-control="toast-timeline-dispatcher"><header><small>DESPACHADOR DE ALERTAS</small><h3>Despachador de alertas</h3></header><p data-copy>La cola está vacía</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Sincronización</button><button type="button" data-item="1" aria-pressed="false">Respaldo</button><button type="button" data-item="2" aria-pressed="false">Alerta</button></div><strong data-output>Sincronización</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Despachar alerta</button><button type="button" data-reset>Restaurar</button></div><span role="status">La cola está vacía</span></section>
<script type="module">
import { mountToastTimelineDispatcher } from '/assets/toast-timeline-dispatcher.js';
document.querySelectorAll('[data-cxd-control="toast-timeline-dispatcher"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountToastTimelineDispatcher(root); });
</script>
HTML; }
