<?php
// Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada — Laravel Livewire 3 (components/special-hybrids/variants/table-bulk-explosion/TableBulkExplosionWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class TableBulkExplosionWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-table-bulk-explosion">
            <h3>Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
