{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-special--stages" data-cxd-control="kanban-spring-pipeline"><header><small>PIPELINE DE ENTREGA</small><h3>Pipeline de entrega</h3></header><p data-copy>Backlog restaurado</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Tokens</button><button type="button" data-item="1" aria-pressed="false">Tablas</button><button type="button" data-item="2" aria-pressed="false">Deploy</button></div><strong data-output>Tokens</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Promover tarea</button><button type="button" data-reset>Restaurar</button></div><span role="status">Backlog restaurado</span></section>
<script type="module">
import { mountKanbanSpringPipeline } from '/assets/kanban-spring-pipeline.js';
document.querySelectorAll('[data-cxd-control="kanban-spring-pipeline"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountKanbanSpringPipeline(root); });
</script>
