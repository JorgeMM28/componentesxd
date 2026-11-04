<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Telemetry KPI + SVG Sparkline Card (LARAVEL LIVEWIRE 3)
 * Archivo: components/cards/variants/telemetry-sparkline-kpi/TelemetrySparklineKpiWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Cards;

use Livewire\Component;

class TelemetrySparklineKpiWire extends Component
{
    public string $title = '02. Telemetry KPI + SVG Sparkline Card';
    public string $badge = 'LIVE METRIC';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'telemetry-sparkline-kpi');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-cards-telemetry-sparkline-kpi" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-cards-telemetry-sparkline-kpi__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-cards-telemetry-sparkline-kpi__body">
                <p>Tarjeta de métrica operativa con curva SVG embebida, variación porcentual y estado de umbral.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
