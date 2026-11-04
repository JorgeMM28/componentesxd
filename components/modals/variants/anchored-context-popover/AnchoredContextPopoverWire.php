<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Anchored Context Menu & Quick Popover (LARAVEL LIVEWIRE 3)
 * Archivo: components/modals/variants/anchored-context-popover/AnchoredContextPopoverWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Modals;

use Livewire\Component;

class AnchoredContextPopoverWire extends Component
{
    public string $title = '05. Anchored Context Menu & Quick Popover';
    public string $badge = 'CONTEXT MENU';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'anchored-context-popover');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-modals-anchored-context-popover" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-modals-anchored-context-popover__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-modals-anchored-context-popover__body">
                <p>Menú flotante compacto con separadores de 1px, iconos vectoriales alineados y sub-acciones.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
