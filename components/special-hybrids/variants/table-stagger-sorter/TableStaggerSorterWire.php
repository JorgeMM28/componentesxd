<?php
// Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas — Laravel Livewire 3 (components/special-hybrids/variants/table-stagger-sorter/TableStaggerSorterWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class TableStaggerSorterWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-table-stagger-sorter">
            <h3>Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
