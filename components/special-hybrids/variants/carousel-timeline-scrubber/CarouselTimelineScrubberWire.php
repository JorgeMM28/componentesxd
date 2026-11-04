<?php
// Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek) — Laravel Livewire 3 (components/special-hybrids/variants/carousel-timeline-scrubber/CarouselTimelineScrubberWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class CarouselTimelineScrubberWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-carousel-timeline-scrubber">
            <h3>Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
