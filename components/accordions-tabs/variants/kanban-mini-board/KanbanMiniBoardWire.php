<?php
// Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo) — Laravel Livewire 3 (components/accordions-tabs/variants/kanban-mini-board/KanbanMiniBoardWire.php)
namespace App\Livewire\Cxd\AccordionsTabs;
use Livewire\Component;

class KanbanMiniBoardWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-accordions-tabs-kanban-mini-board">
            <h3>Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
