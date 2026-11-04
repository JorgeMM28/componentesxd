<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Slide-Over Telemetry Inspector Drawer (LARAVEL LIVEWIRE 3)
 * Archivo: components/modals/variants/slide-over-inspector-drawer/SlideOverInspectorDrawerWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Modals;

use Livewire\Component;

class SlideOverInspectorDrawerWire extends Component
{
    public string $title = '02. Slide-Over Telemetry Inspector Drawer';
    public string $badge = 'SIDE DRAWER';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'slide-over-inspector-drawer');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-modals-slide-over-inspector-drawer" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-modals-slide-over-inspector-drawer__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-modals-slide-over-inspector-drawer__body">
                <p>Panel lateral deslizable para inspeccionar metadatos de una fila, logs o configuración sin perder contexto.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
