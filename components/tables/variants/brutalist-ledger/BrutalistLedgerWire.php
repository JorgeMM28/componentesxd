<?php
// Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria — Laravel Livewire 3 (components/tables/variants/brutalist-ledger/BrutalistLedgerWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class BrutalistLedgerWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-brutalist-ledger">
            <h3>Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
