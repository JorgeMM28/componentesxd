<script lang="ts">
import { mountKanbanMiniBoard } from './kanban-mini-board.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountKanbanMiniBoard(node) }; }
</script>
<div class="cxd-widget" data-cxd-control="kanban-mini-board" use:control><div class="cxd-widget__columns"><div class="cxd-widget__list" data-backlog><strong>Pendiente</strong><div data-task>Revisar tokens <button type="button" data-move>Avanzar →</button></div></div><div class="cxd-widget__list" data-done><strong>Producción</strong></div></div><span role="status">Mueve una tarea</span></div>
