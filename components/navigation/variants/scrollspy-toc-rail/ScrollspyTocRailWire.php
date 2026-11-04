<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Technical Documentation Scrollspy Rail (LARAVEL LIVEWIRE 3)
 * Archivo: components/navigation/variants/scrollspy-toc-rail/ScrollspyTocRailWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Navigation;

use Livewire\Component;

class ScrollspyTocRailWire extends Component
{
    public string $title = '05. Technical Documentation Scrollspy Rail';
    public string $badge = 'TOC RAIL';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'scrollspy-toc-rail');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-navigation-scrollspy-toc-rail" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-navigation-scrollspy-toc-rail__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-navigation-scrollspy-toc-rail__body">
                <p>Índice lateral para documentación técnica que resalta la sección visible actual y muestra porcentaje leído.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
