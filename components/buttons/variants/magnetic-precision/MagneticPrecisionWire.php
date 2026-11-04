<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Magnetic Cursor-Tracking Button (LARAVEL LIVEWIRE 3)
 * Archivo: components/buttons/variants/magnetic-precision/MagneticPrecisionWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Buttons;

use Livewire\Component;

class MagneticPrecisionWire extends Component
{
    public string $title = '01. Magnetic Cursor-Tracking Button';
    public string $badge = 'MAGNETIC';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'magnetic-precision');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-buttons-magnetic-precision" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-buttons-magnetic-precision__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-buttons-magnetic-precision__body">
                <p>Calcula el centro geométrico y aplica traslación proporcional al cursor con retorno elástico.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
