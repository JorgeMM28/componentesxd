<?php
// Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios) — Laravel Livewire 3 (components/forms/variants/tactile-switches-sliders/TactileSwitchesSlidersWire.php)
namespace App\Livewire\Cxd\Forms;
use Livewire\Component;

class TactileSwitchesSlidersWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-forms-tactile-switches-sliders">
            <h3>Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
