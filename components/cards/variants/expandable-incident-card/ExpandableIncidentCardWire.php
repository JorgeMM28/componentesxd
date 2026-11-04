<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Expandable Postmortem & Diagnostics Card (LARAVEL LIVEWIRE 3)
 * Archivo: components/cards/variants/expandable-incident-card/ExpandableIncidentCardWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Cards;

use Livewire\Component;

class ExpandableIncidentCardWire extends Component
{
    public string $title = '06. Expandable Postmortem & Diagnostics Card';
    public string $badge = 'ACCORDION CARD';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'expandable-incident-card');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-cards-expandable-incident-card" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-cards-expandable-incident-card__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-cards-expandable-incident-card__body">
                <p>Resumen compacto que despliega detalles técnicos de diagnóstico, nodos afectados y cronología.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
