<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. 3D Isometric Perspective Hover Card (LARAVEL LIVEWIRE 3)
 * Archivo: components/cards/variants/isometric-layer-card/IsometricLayerCardWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Cards;

use Livewire\Component;

class IsometricLayerCardWire extends Component
{
    public string $title = '07. 3D Isometric Perspective Hover Card';
    public string $badge = '3D TILT';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'isometric-layer-card');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-cards-isometric-layer-card" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-cards-isometric-layer-card__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-cards-isometric-layer-card__body">
                <p>Calcula ángulos de rotación X/Y según posición del cursor con capas internas en paralaje.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
