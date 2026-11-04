<?php
// Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo) — Laravel Livewire 3 (components/special-hybrids/variants/carousel-svg-morph-showcase/CarouselSvgMorphShowcaseWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class CarouselSvgMorphShowcaseWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-carousel-svg-morph-showcase">
            <h3>Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
