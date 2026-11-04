<?php
// Variante 01 — Formulario Moderno con Bordes Redondeados — Laravel Livewire 3 (components/forms/variants/modern-rounded-form/ModernRoundedFormWire.php)
namespace App\Livewire\Cxd\Forms;
use Livewire\Component;

class ModernRoundedFormWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-forms-modern-rounded-form">
            <h3>Variante 01 — Formulario Moderno con Bordes Redondeados</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
