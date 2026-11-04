<?php
// Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro — Laravel Livewire 3 (components/special-hybrids/variants/carousel-spring-physics-deck/CarouselSpringPhysicsDeckWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class CarouselSpringPhysicsDeckWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-carousel-spring-physics-deck">
            <h3>Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
