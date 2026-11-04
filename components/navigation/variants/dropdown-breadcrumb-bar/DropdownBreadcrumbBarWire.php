<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Multi-Tenant Breadcrumb + Context Switcher (LARAVEL LIVEWIRE 3)
 * Archivo: components/navigation/variants/dropdown-breadcrumb-bar/DropdownBreadcrumbBarWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Navigation;

use Livewire\Component;

class DropdownBreadcrumbBarWire extends Component
{
    public string $title = '02. Multi-Tenant Breadcrumb + Context Switcher';
    public string $badge = 'BREADCRUMBS';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'dropdown-breadcrumb-bar');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-navigation-dropdown-breadcrumb-bar" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-navigation-dropdown-breadcrumb-bar__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-navigation-dropdown-breadcrumb-bar__body">
                <p>Ruta de navegación estilo Vercel/GitHub con listas desplegables para cambiar organización, proyecto o rama.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
