<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Floating Bottom Command Dock (LARAVEL LIVEWIRE 3)
 * Archivo: components/navigation/variants/floating-command-dock/FloatingCommandDockWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Navigation;

use Livewire\Component;

class FloatingCommandDockWire extends Component
{
    public string $title = '03. Floating Bottom Command Dock';
    public string $badge = 'FLOATING DOCK';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'floating-command-dock');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-navigation-floating-command-dock" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-navigation-floating-command-dock__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-navigation-floating-command-dock__body">
                <p>Barra flotante inferior con tooltips instantáneos, separadores verticales y accesos rápidos.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
