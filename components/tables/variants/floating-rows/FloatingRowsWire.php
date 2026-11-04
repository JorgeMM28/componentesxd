<?php
// Variante 04 — Tabla de Filas Flotantes Separadas — Laravel Livewire 3 (components/tables/variants/floating-rows/FloatingRowsWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class FloatingRowsWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-floating-rows">
            <h3>Variante 04 — Tabla de Filas Flotantes Separadas</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
