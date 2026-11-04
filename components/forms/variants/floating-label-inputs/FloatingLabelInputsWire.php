<?php
// Variante 04 — Inputs con Etiqueta Flotante Animada — Laravel Livewire 3 (components/forms/variants/floating-label-inputs/FloatingLabelInputsWire.php)
namespace App\Livewire\Cxd\Forms;
use Livewire\Component;

class FloatingLabelInputsWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-forms-floating-label-inputs">
            <h3>Variante 04 — Inputs con Etiqueta Flotante Animada</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
