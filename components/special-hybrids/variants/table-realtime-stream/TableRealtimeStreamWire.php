<?php
// Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js — Laravel Livewire 3 (components/special-hybrids/variants/table-realtime-stream/TableRealtimeStreamWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class TableRealtimeStreamWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-table-realtime-stream">
            <h3>Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
