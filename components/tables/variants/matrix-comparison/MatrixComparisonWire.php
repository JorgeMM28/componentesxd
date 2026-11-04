<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Sticky Spec & Feature Comparison Matrix (LARAVEL LIVEWIRE 3)
 * Archivo: components/tables/variants/matrix-comparison/MatrixComparisonWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Tables;

use Livewire\Component;

class MatrixComparisonWire extends Component
{
    public string $title = '04. Sticky Spec & Feature Comparison Matrix';
    public string $badge = 'SPEC MATRIX';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'matrix-comparison');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-tables-matrix-comparison" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-tables-matrix-comparison__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-tables-matrix-comparison__body">
                <p>Tabla comparativa con primera columna fija, indicadores vectoriales SVG de soporte, límites técnicos y cabeceras congeladas.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
