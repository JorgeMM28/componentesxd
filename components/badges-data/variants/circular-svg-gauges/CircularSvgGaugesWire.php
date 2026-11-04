<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Radial SVG Telemetry Gauges (LARAVEL LIVEWIRE 3)
 * Archivo: components/badges-data/variants/circular-svg-gauges/CircularSvgGaugesWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\BadgesData;

use Livewire\Component;

class CircularSvgGaugesWire extends Component
{
    public string $title = '03. Radial SVG Telemetry Gauges';
    public string $badge = 'SVG GAUGES';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'circular-svg-gauges');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-badges-data-circular-svg-gauges" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-badges-data-circular-svg-gauges__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-badges-data-circular-svg-gauges__body">
                <p>Medidores circulares y semicirculares en SVG puro para CPU, Memoria, Disco y SLA.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
