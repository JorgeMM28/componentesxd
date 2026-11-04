<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Tree Sidebar Navigation (LARAVEL LIVEWIRE 3)
 * Archivo: components/navigation/variants/collapsible-tree-sidebar/CollapsibleTreeSidebarWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Navigation;

use Livewire\Component;

class CollapsibleTreeSidebarWire extends Component
{
    public string $title = '01. Architectural Tree Sidebar Navigation';
    public string $badge = 'APP SIDEBAR';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'collapsible-tree-sidebar');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-navigation-collapsible-tree-sidebar" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-navigation-collapsible-tree-sidebar__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-navigation-collapsible-tree-sidebar__body">
                <p>Navegación vertical con secciones colapsables, contadores numéricos tabulares e indicador activo.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
