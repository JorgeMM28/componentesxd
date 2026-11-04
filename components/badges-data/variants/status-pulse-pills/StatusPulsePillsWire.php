<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Semantic Status Badges & Live Pulse Dots (LARAVEL LIVEWIRE 3)
 * Archivo: components/badges-data/variants/status-pulse-pills/StatusPulsePillsWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\BadgesData;

use Livewire\Component;

class StatusPulsePillsWire extends Component
{
    public string $title = '01. Semantic Status Badges & Live Pulse Dots';
    public string $badge = 'STATUS BADGES';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'status-pulse-pills');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-badges-data-status-pulse-pills" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-badges-data-status-pulse-pills__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-badges-data-status-pulse-pills__body">
                <p>Colección de insignias semánticas (Operational, Degraded, Outage, Maintenance) con indicador luminoso.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
