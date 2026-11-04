<?php
// Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath) — Laravel Livewire 3 (components/special-hybrids/variants/interactive-world-telemetry-map/InteractiveWorldTelemetryMapWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class InteractiveWorldTelemetryMapWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-interactive-world-telemetry-map">
            <h3>Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
