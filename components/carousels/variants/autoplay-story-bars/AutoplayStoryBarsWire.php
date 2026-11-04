<?php
// Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa) — Laravel Livewire 3 (components/carousels/variants/autoplay-story-bars/AutoplayStoryBarsWire.php)
namespace App\Livewire\Cxd\Carousels;
use Livewire\Component;

class AutoplayStoryBarsWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-carousels-autoplay-story-bars">
            <h3>Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
