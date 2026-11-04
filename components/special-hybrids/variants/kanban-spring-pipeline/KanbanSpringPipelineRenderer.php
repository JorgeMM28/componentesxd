<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderKanbanSpringPipeline(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="kanban-spring-pipeline"><h3>Pipeline de entrega</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Promover tarea</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Backlog restaurado</span></div>
<script type="module">
import { mountKanbanSpringPipeline } from '/assets/kanban-spring-pipeline.js';
document.querySelectorAll('[data-cxd-control="kanban-spring-pipeline"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountKanbanSpringPipeline(root); });
</script>
HTML; }
