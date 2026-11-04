<?php
// Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y — Laravel Livewire 3 (components/carousels/variants/vertical-telemetry-reel/VerticalTelemetryReelWire.php)
namespace App\Livewire\Cxd\Carousels;
use Livewire\Component;

class VerticalTelemetryReelWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-carousels-vertical-telemetry-reel">
            <h3>Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
