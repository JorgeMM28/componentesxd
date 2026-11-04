<?php
// Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos — Laravel Livewire 3 (components/badges-data/variants/vertical-event-timeline/VerticalEventTimelineWire.php)
namespace App\Livewire\Cxd\BadgesData;
use Livewire\Component;

class VerticalEventTimelineWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-badges-data-vertical-event-timeline">
            <h3>Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
