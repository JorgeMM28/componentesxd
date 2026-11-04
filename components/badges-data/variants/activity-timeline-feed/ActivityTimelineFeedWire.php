<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Vertical Deployment & Event Timeline (LARAVEL LIVEWIRE 3)
 * Archivo: components/badges-data/variants/activity-timeline-feed/ActivityTimelineFeedWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\BadgesData;

use Livewire\Component;

class ActivityTimelineFeedWire extends Component
{
    public string $title = '02. Vertical Deployment & Event Timeline';
    public string $badge = 'TIMELINE FEED';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'activity-timeline-feed');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-badges-data-activity-timeline-feed" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-badges-data-activity-timeline-feed__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-badges-data-activity-timeline-feed__body">
                <p>Línea de tiempo técnica con nodos vectoriales conectados, autor, timestamp relativo y metadatos.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
