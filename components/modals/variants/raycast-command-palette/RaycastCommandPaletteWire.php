<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Command Palette (Cmd+K) Action Center (LARAVEL LIVEWIRE 3)
 * Archivo: components/modals/variants/raycast-command-palette/RaycastCommandPaletteWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Modals;

use Livewire\Component;

class RaycastCommandPaletteWire extends Component
{
    public string $title = '01. Command Palette (Cmd+K) Action Center';
    public string $badge = 'CMD+K PALETTE';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'raycast-command-palette');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-modals-raycast-command-palette" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-modals-raycast-command-palette__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-modals-raycast-command-palette__body">
                <p>Buscador universal de comandos con filtrado instantáneo, navegación por flechas y atajos de teclado.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
