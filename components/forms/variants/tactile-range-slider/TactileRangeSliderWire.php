<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Precision Numeric Range & Step Control (LARAVEL LIVEWIRE 3)
 * Archivo: components/forms/variants/tactile-range-slider/TactileRangeSliderWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Forms;

use Livewire\Component;

class TactileRangeSliderWire extends Component
{
    public string $title = '06. Precision Numeric Range & Step Control';
    public string $badge = 'RANGE / STEPPER';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'tactile-range-slider');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-forms-tactile-range-slider" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-forms-tactile-range-slider__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-forms-tactile-range-slider__body">
                <p>Deslizador calibrado con marcas de graduación, lectura numérica tabular en vivo y botones +/- finos.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
