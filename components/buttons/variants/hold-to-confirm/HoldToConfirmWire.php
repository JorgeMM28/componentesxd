<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Destructive Hold-to-Confirm Button (LARAVEL LIVEWIRE 3)
 * Archivo: components/buttons/variants/hold-to-confirm/HoldToConfirmWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Buttons;

use Livewire\Component;

class HoldToConfirmWire extends Component
{
    public string $title = '03. Destructive Hold-to-Confirm Button';
    public string $badge = 'SAFETY LOCK';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'hold-to-confirm');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-buttons-hold-to-confirm" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-buttons-hold-to-confirm__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-buttons-hold-to-confirm__body">
                <p>Previene clics accidentales en acciones críticas exigiendo mantener presionado 1.2s mientras se llena la barra.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
