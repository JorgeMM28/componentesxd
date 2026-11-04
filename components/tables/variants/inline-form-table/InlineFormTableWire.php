<?php
// Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo) — Laravel Livewire 3 (components/tables/variants/inline-form-table/InlineFormTableWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class InlineFormTableWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-inline-form-table">
            <h3>Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
