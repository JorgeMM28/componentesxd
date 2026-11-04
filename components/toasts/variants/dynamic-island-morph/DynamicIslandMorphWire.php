<?php
// Variante 02 — Dynamic Island Interactiva (3 Estados) — Laravel Livewire 3 (components/toasts/variants/dynamic-island-morph/DynamicIslandMorphWire.php)
namespace App\Livewire\Cxd\Toasts;
use Livewire\Component;

class DynamicIslandMorphWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-toasts-dynamic-island-morph">
            <h3>Variante 02 — Dynamic Island Interactiva (3 Estados)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
