<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class KanbanMiniBoardWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="kanban-mini-board" wire:ignore><div class="cxd-widget__columns"><div class="cxd-widget__list" data-backlog><strong>Pendiente</strong><div data-task>Revisar tokens <button type="button" data-move>Avanzar →</button></div></div><div class="cxd-widget__list" data-done><strong>Producción</strong></div></div><span role="status">Mueve una tarea</span>@script
<script>
import('/assets/kanban-mini-board.js').then(module => module.mountKanbanMiniBoard($wire.$el));
</script>
@endscript</div>
HTML; } }
