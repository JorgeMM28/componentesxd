<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Full-Width Incident & Maintenance Strip (LARAVEL LIVEWIRE 3)
 * Archivo: components/toasts/variants/system-banner-strip/SystemBannerStripWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Toasts;

use Livewire\Component;

class SystemBannerStripWire extends Component
{
    public string $title = '05. Full-Width Incident & Maintenance Strip';
    public string $badge = 'STATUS BAR';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'system-banner-strip');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-toasts-system-banner-strip" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-toasts-system-banner-strip__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-toasts-system-banner-strip__body">
                <p>Barra estructural superior para anuncios de mantenimiento, degradación de SLA o nuevas versiones.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
