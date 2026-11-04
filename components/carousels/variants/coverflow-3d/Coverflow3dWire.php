<?php
// Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación — Laravel Livewire 3 (components/carousels/variants/coverflow-3d/Coverflow3dWire.php)
namespace App\Livewire\Cxd\Carousels;
use Livewire\Component;

class Coverflow3dWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-carousels-coverflow-3d">
            <h3>Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
