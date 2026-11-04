<?php
// Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance) — Laravel Livewire 3 (components/forms/variants/interactive-otp-pin/InteractiveOtpPinWire.php)
namespace App\Livewire\Cxd\Forms;
use Livewire\Component;

class InteractiveOtpPinWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-forms-interactive-otp-pin">
            <h3>Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
