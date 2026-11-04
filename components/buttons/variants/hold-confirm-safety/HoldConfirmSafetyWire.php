<?php
// Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado) — Laravel Livewire 3 (components/buttons/variants/hold-confirm-safety/HoldConfirmSafetyWire.php)
namespace App\Livewire\Cxd\Buttons;
use Livewire\Component;

class HoldConfirmSafetyWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-buttons-hold-confirm-safety">
            <h3>Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
