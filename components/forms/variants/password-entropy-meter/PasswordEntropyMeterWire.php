<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Password Input + Live Entropy Analyzer (LARAVEL LIVEWIRE 3)
 * Archivo: components/forms/variants/password-entropy-meter/PasswordEntropyMeterWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Forms;

use Livewire\Component;

class PasswordEntropyMeterWire extends Component
{
    public string $title = '04. Password Input + Live Entropy Analyzer';
    public string $badge = 'SECURITY METER';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'password-entropy-meter');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-forms-password-entropy-meter" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-forms-password-entropy-meter__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-forms-password-entropy-meter__body">
                <p>Evalúa longitud, símbolos y entropía en tiempo real mediante 4 segmentos de estado y checklist SVG.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
