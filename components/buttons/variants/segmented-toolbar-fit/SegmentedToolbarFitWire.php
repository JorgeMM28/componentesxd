<?php
// Variante 07 — Barra de Botones Content-Fit con Indicador Activo — Laravel Livewire 3 (components/buttons/variants/segmented-toolbar-fit/SegmentedToolbarFitWire.php)
namespace App\Livewire\Cxd\Buttons;
use Livewire\Component;

class SegmentedToolbarFitWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-buttons-segmented-toolbar-fit">
            <h3>Variante 07 — Barra de Botones Content-Fit con Indicador Activo</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
