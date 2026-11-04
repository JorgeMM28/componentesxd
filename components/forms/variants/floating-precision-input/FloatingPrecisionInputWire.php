<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Floating-Label Input (LARAVEL LIVEWIRE 3)
 * Archivo: components/forms/variants/floating-precision-input/FloatingPrecisionInputWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Forms;

use Livewire\Component;

class FloatingPrecisionInputWire extends Component
{
    public string $title = '01. Architectural Floating-Label Input';
    public string $badge = 'FLOATING LABEL';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'floating-precision-input');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-forms-floating-precision-input" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-forms-floating-precision-input__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-forms-floating-precision-input__body">
                <p>Etiqueta que asciende con transición cúbica al enfocar o contener valor, con indicador de validación.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
