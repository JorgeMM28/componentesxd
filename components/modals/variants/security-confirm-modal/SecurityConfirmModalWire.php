<?php
// Variante 05 — Modal de Confirmación con Validación de Texto — Laravel Livewire 3 (components/modals/variants/security-confirm-modal/SecurityConfirmModalWire.php)
namespace App\Livewire\Cxd\Modals;
use Livewire\Component;

class SecurityConfirmModalWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-modals-security-confirm-modal">
            <h3>Variante 05 — Modal de Confirmación con Validación de Texto</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
