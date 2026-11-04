<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. 3D Perspective Stacked Toast Queue (LARAVEL LIVEWIRE 3)
 * Archivo: components/toasts/variants/stacked-3d-queue/Stacked3dQueueWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Toasts;

use Livewire\Component;

class Stacked3dQueueWire extends Component
{
    public string $title = '02. 3D Perspective Stacked Toast Queue';
    public string $badge = 'STACKED QUEUE';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'stacked-3d-queue');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-toasts-stacked-3d-queue" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-toasts-stacked-3d-queue__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-toasts-stacked-3d-queue__body">
                <p>Cola de notificaciones apiladas en profundidad 3D que se despliegan en abanico al pasar el cursor.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
