<?php
// Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso — Laravel Livewire 3 (components/carousels/variants/snap-peek-slider/SnapPeekSliderWire.php)
namespace App\Livewire\Cxd\Carousels;
use Livewire\Component;

class SnapPeekSliderWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-carousels-snap-peek-slider">
            <h3>Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
