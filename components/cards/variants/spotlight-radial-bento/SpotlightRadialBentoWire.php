<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Cursor-Tracking Radial Spotlight Card (LARAVEL LIVEWIRE 3)
 * Archivo: components/cards/variants/spotlight-radial-bento/SpotlightRadialBentoWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Cards;

use Livewire\Component;

class SpotlightRadialBentoWire extends Component
{
    public string $title = '01. Cursor-Tracking Radial Spotlight Card';
    public string $badge = 'RADIAL LIGHT';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'spotlight-radial-bento');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-cards-spotlight-radial-bento" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-cards-spotlight-radial-bento__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-cards-spotlight-radial-bento__body">
                <p>Proyecta iluminación radial siguiendo las coordenadas X/Y del puntero sobre el chasis y el borde.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
