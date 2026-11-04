<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Technical Wireframe Empty State (LARAVEL LIVEWIRE 3)
 * Archivo: components/badges-data/variants/empty-state-blueprint/EmptyStateBlueprintWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\BadgesData;

use Livewire\Component;

class EmptyStateBlueprintWire extends Component
{
    public string $title = '06. Technical Wireframe Empty State';
    public string $badge = 'EMPTY STATE';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'empty-state-blueprint');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-badges-data-empty-state-blueprint" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-badges-data-empty-state-blueprint__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-badges-data-empty-state-blueprint__body">
                <p>Estado vacío con ilustración geométrica en SVG, explicación clara y acción rápida de creación.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
