<?php
// Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito) — Laravel Livewire 3 (components/buttons/variants/interactive-async-morph/InteractiveAsyncMorphWire.php)
namespace App\Livewire\Cxd\Buttons;
use Livewire\Component;

class InteractiveAsyncMorphWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-buttons-interactive-async-morph">
            <h3>Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
