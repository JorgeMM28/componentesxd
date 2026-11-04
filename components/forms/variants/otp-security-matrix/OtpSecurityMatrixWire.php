<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. 6-Digit 2FA OTP Auto-Advance Matrix (LARAVEL LIVEWIRE 3)
 * Archivo: components/forms/variants/otp-security-matrix/OtpSecurityMatrixWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Forms;

use Livewire\Component;

class OtpSecurityMatrixWire extends Component
{
    public string $title = '02. 6-Digit 2FA OTP Auto-Advance Matrix';
    public string $badge = 'AUTH / 2FA';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'otp-security-matrix');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-forms-otp-security-matrix" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-forms-otp-security-matrix__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-forms-otp-security-matrix__body">
                <p>Cuadrícula de 6 dígitos con salto automático al escribir, soporte de pegado completo y retroceso inteligente.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
