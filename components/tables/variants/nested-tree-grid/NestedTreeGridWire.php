<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Hierarchical Tree & Sub-Row Table (LARAVEL LIVEWIRE 3)
 * Archivo: components/tables/variants/nested-tree-grid/NestedTreeGridWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Tables;

use Livewire\Component;

class NestedTreeGridWire extends Component
{
    public string $title = '02. Hierarchical Tree & Sub-Row Table';
    public string $badge = 'TREE / EXPANDABLE';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'nested-tree-grid');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-tables-nested-tree-grid" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-tables-nested-tree-grid__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-tables-nested-tree-grid__body">
                <p>Tabla jerárquica con filas padre/hijo desplegables para desglose de clusters, microservicios, carpetas o centros de costos.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
