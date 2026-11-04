<?php
// Variante 04 — Modal con Formulario de Creación de Proyecto — Laravel Livewire 3 (components/modals/variants/form-creation-modal/FormCreationModalWire.php)
namespace App\Livewire\Cxd\Modals;
use Livewire\Component;

class FormCreationModalWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-modals-form-creation-modal">
            <h3>Variante 04 — Modal con Formulario de Creación de Proyecto</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
