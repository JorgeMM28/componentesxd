<?php
// Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo — Laravel Livewire 3 (components/badges-data/variants/interactive-svg-gauges/InteractiveSvgGaugesWire.php)
namespace App\Livewire\Cxd\BadgesData;
use Livewire\Component;

class InteractiveSvgGaugesWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-badges-data-interactive-svg-gauges">
            <h3>Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
