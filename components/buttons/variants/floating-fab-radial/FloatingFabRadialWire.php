<?php
// Variante 03 — Botón Flotante (FAB) con Menú Desplegable — Laravel Livewire 3 (components/buttons/variants/floating-fab-radial/FloatingFabRadialWire.php)
namespace App\Livewire\Cxd\Buttons;
use Livewire\Component;

class FloatingFabRadialWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-buttons-floating-fab-radial">
            <h3>Variante 03 — Botón Flotante (FAB) con Menú Desplegable</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
