<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderKanbanMiniBoard(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="kanban-mini-board"><div class="cxd-widget__columns"><div class="cxd-widget__list" data-backlog><strong>Pendiente</strong><div data-task>Revisar tokens <button type="button" data-move>Avanzar →</button></div></div><div class="cxd-widget__list" data-done><strong>Producción</strong></div></div><span role="status">Mueve una tarea</span></div>
<script type="module">
import { mountKanbanMiniBoard } from '/assets/kanban-mini-board.js';
document.querySelectorAll('[data-cxd-control="kanban-mini-board"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountKanbanMiniBoard(root); });
</script>
HTML; }
