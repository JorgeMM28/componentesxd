<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Stepped Configuration Wizard Modal (LARAVEL LIVEWIRE 3)
 * Archivo: components/modals/variants/multi-step-config-modal/MultiStepConfigModalWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Modals;

use Livewire\Component;

class MultiStepConfigModalWire extends Component
{
    public string $title = '04. Stepped Configuration Wizard Modal';
    public string $badge = 'WIZARD MODAL';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'multi-step-config-modal');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-modals-multi-step-config-modal" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-modals-multi-step-config-modal__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-modals-multi-step-config-modal__body">
                <p>Ventana modal dividida en pasos con indicador de progreso superior y pie de navegación persistente.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
