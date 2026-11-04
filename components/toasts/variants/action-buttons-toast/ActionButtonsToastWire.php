<?php
// Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer) — Laravel Livewire 3 (components/toasts/variants/action-buttons-toast/ActionButtonsToastWire.php)
namespace App\Livewire\Cxd\Toasts;
use Livewire\Component;

class ActionButtonsToastWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-toasts-action-buttons-toast">
            <h3>Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
