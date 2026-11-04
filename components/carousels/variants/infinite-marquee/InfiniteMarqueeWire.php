<?php
// Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección) — Laravel Livewire 3 (components/carousels/variants/infinite-marquee/InfiniteMarqueeWire.php)
namespace App\Livewire\Cxd\Carousels;
use Livewire\Component;

class InfiniteMarqueeWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-carousels-infinite-marquee">
            <h3>Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
