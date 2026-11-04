<?php
// Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada — Laravel Livewire 3 (components/special-hybrids/variants/modal-command-choreography/ModalCommandChoreographyWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class ModalCommandChoreographyWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-modal-command-choreography">
            <h3>Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
