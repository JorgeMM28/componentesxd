<?php
// Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva — Laravel Livewire 3 (components/cards/variants/floating-3d-tilt/Floating3dTiltWire.php)
namespace App\Livewire\Cxd\Cards;
use Livewire\Component;

class Floating3dTiltWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-cards-floating-3d-tilt">
            <h3>Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
