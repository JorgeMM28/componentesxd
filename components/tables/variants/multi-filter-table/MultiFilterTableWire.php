<?php
// Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado) — Laravel Livewire 3 (components/tables/variants/multi-filter-table/MultiFilterTableWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class MultiFilterTableWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-multi-filter-table">
            <h3>Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
