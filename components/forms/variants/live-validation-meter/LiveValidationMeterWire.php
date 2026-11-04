<?php
// Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo — Laravel Livewire 3 (components/forms/variants/live-validation-meter/LiveValidationMeterWire.php)
namespace App\Livewire\Cxd\Forms;
use Livewire\Component;

class LiveValidationMeterWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-forms-live-validation-meter">
            <h3>Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
