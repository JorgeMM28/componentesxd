<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Full Pagination + Page Size Selector Bar (LARAVEL LIVEWIRE 3)
 * Archivo: components/navigation/variants/pagination-matrix-bar/PaginationMatrixBarWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Navigation;

use Livewire\Component;

class PaginationMatrixBarWire extends Component
{
    public string $title = '06. Full Pagination + Page Size Selector Bar';
    public string $badge = 'PAGINATION';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'pagination-matrix-bar');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-navigation-pagination-matrix-bar" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-navigation-pagination-matrix-bar__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-navigation-pagination-matrix-bar__body">
                <p>Control de paginación con salto directo a página, selector desplegable de filas por vista y rango actual.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
