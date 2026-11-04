<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Architectural Pricing & Quota Tier Card (LARAVEL LIVEWIRE 3)
 * Archivo: components/cards/variants/pricing-architecture-tier/PricingArchitectureTierWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Cards;

use Livewire\Component;

class PricingArchitectureTierWire extends Component
{
    public string $title = '05. Architectural Pricing & Quota Tier Card';
    public string $badge = 'BILLING TIER';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'pricing-architecture-tier');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-cards-pricing-architecture-tier" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-cards-pricing-architecture-tier__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-cards-pricing-architecture-tier__body">
                <p>Desglose técnico de plan con medidor de cuota consumida, lista verificada con SVGs y CTA integrado.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
