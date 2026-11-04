<?php
// Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable) — Laravel Livewire 3 (components/special-hybrids/variants/form-otp-svg-vault/FormOtpSvgVaultWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class FormOtpSvgVaultWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-form-otp-svg-vault">
            <h3>Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
