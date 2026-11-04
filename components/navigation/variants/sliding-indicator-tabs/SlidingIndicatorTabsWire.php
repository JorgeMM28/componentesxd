<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Precision Tab Bar with Sliding Hairline (LARAVEL LIVEWIRE 3)
 * Archivo: components/navigation/variants/sliding-indicator-tabs/SlidingIndicatorTabsWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Navigation;

use Livewire\Component;

class SlidingIndicatorTabsWire extends Component
{
    public string $title = '04. Precision Tab Bar with Sliding Hairline';
    public string $badge = 'TABS BAR';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'sliding-indicator-tabs');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-navigation-sliding-indicator-tabs" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-navigation-sliding-indicator-tabs__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-navigation-sliding-indicator-tabs__body">
                <p>Pestañas horizontales con línea inferior activa que se desliza suavemente hacia la pestaña seleccionada.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
