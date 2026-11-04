<?php
// Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada — Laravel Livewire 3 (components/special-hybrids/variants/kanban-spring-pipeline/KanbanSpringPipelineWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class KanbanSpringPipelineWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-kanban-spring-pipeline">
            <h3>Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
