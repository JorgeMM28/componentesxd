<?php
/**
 * ============================================================================
 * COMPONENTESXD — 08. Teenage-Style Hardware Synth Module Card (LARAVEL LIVEWIRE 3)
 * Archivo: components/cards/variants/hardware-module-card/HardwareModuleCardWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Cards;

use Livewire\Component;

class HardwareModuleCardWire extends Component
{
    public string $title = '08. Teenage-Style Hardware Synth Module Card';
    public string $badge = 'INDUSTRIAL UI';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'hardware-module-card');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-cards-hardware-module-card" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-cards-hardware-module-card__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-cards-hardware-module-card__body">
                <p>Estética de módulo físico con tornillos vectoriales en las esquinas, indicadores LED y lecturas mono.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
