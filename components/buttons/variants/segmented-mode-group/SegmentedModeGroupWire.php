<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. Segmented Action Bar with Active Pill (LARAVEL LIVEWIRE 3)
 * Archivo: components/buttons/variants/segmented-mode-group/SegmentedModeGroupWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Buttons;

use Livewire\Component;

class SegmentedModeGroupWire extends Component
{
    public string $title = '07. Segmented Action Bar with Active Pill';
    public string $badge = 'BUTTON GROUP';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'segmented-mode-group');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-buttons-segmented-mode-group" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-buttons-segmented-mode-group__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-buttons-segmented-mode-group__body">
                <p>Barra de herramientas unificada por bordes de 1px para alternar vistas (Tabla / Tarjetas / Grafo / JSON).</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
