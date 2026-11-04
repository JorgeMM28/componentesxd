<?php
// Variante 02 — Command Palette Interactiva (Buscador en Vivo) — Laravel Livewire 3 (components/modals/variants/interactive-cmdk-palette/InteractiveCmdkPaletteWire.php)
namespace App\Livewire\Cxd\Modals;
use Livewire\Component;

class InteractiveCmdkPaletteWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-modals-interactive-cmdk-palette">
            <h3>Variante 02 — Command Palette Interactiva (Buscador en Vivo)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
