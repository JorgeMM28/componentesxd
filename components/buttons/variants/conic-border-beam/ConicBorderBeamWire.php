<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Conic Border Beam Button (LARAVEL LIVEWIRE 3)
 * Archivo: components/buttons/variants/conic-border-beam/ConicBorderBeamWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Buttons;

use Livewire\Component;

class ConicBorderBeamWire extends Component
{
    public string $title = '02. Conic Border Beam Button';
    public string $badge = 'CSS @PROPERTY';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'conic-border-beam');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-buttons-conic-border-beam" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-buttons-conic-border-beam__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-buttons-conic-border-beam__body">
                <p>Haz de luz perimetral continuo renderizado por GPU mediante @property sin elementos DOM extra.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
