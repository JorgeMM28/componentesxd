<?php
// Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones) — Laravel Livewire 3 (components/carousels/variants/split-editorial-showcase/SplitEditorialShowcaseWire.php)
namespace App\Livewire\Cxd\Carousels;
use Livewire\Component;

class SplitEditorialShowcaseWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-carousels-split-editorial-showcase">
            <h3>Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
