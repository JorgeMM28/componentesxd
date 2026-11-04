<?php
// Variante 03 — Menú Popover Flotante Content-Fit con Acciones — Laravel Livewire 3 (components/modals/variants/floating-popover-menu/FloatingPopoverMenuWire.php)
namespace App\Livewire\Cxd\Modals;
use Livewire\Component;

class FloatingPopoverMenuWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-modals-floating-popover-menu">
            <h3>Variante 03 — Menú Popover Flotante Content-Fit con Acciones</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
