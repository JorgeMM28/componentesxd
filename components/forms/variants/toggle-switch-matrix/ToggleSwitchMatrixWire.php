<?php
/**
 * ============================================================================
 * COMPONENTESXD — 08. Industrial Toggle Switch & Radio Cards (LARAVEL LIVEWIRE 3)
 * Archivo: components/forms/variants/toggle-switch-matrix/ToggleSwitchMatrixWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Forms;

use Livewire\Component;

class ToggleSwitchMatrixWire extends Component
{
    public string $title = '08. Industrial Toggle Switch & Radio Cards';
    public string $badge = 'SWITCHES';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'toggle-switch-matrix');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-forms-toggle-switch-matrix" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-forms-toggle-switch-matrix__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-forms-toggle-switch-matrix__body">
                <p>Interruptores binarios de baja latencia y tarjetas de selección exclusiva con indicador activo.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
