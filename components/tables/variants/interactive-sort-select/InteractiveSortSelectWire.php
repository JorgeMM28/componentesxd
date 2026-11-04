<?php
// Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo) — Laravel Livewire 3 (components/tables/variants/interactive-sort-select/InteractiveSortSelectWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class InteractiveSortSelectWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-interactive-sort-select">
            <h3>Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
