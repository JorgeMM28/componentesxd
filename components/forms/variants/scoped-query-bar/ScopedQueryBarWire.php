<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Scoped Filter & Query Input Bar (LARAVEL LIVEWIRE 3)
 * Archivo: components/forms/variants/scoped-query-bar/ScopedQueryBarWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Forms;

use Livewire\Component;

class ScopedQueryBarWire extends Component
{
    public string $title = '05. Scoped Filter & Query Input Bar';
    public string $badge = 'QUERY BUILDER';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'scoped-query-bar');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-forms-scoped-query-bar" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-forms-scoped-query-bar__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-forms-scoped-query-bar__body">
                <p>Barra de entrada con selector de ámbito (env:prod, region:us-east) integrado a la izquierda y botón limpiar.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
