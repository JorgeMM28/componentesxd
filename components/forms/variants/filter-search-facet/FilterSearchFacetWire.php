<?php
// Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador) — Laravel Livewire 3 (components/forms/variants/filter-search-facet/FilterSearchFacetWire.php)
namespace App\Livewire\Cxd\Forms;
use Livewire\Component;

class FilterSearchFacetWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-forms-filter-search-facet">
            <h3>Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
