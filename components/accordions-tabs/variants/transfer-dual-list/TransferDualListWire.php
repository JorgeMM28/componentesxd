<?php
// Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha) — Laravel Livewire 3 (components/accordions-tabs/variants/transfer-dual-list/TransferDualListWire.php)
namespace App\Livewire\Cxd\AccordionsTabs;
use Livewire\Component;

class TransferDualListWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-accordions-tabs-transfer-dual-list">
            <h3>Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
