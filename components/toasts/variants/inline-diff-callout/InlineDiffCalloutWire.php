<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Architectural Callout & Warning Block (LARAVEL LIVEWIRE 3)
 * Archivo: components/toasts/variants/inline-diff-callout/InlineDiffCalloutWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Toasts;

use Livewire\Component;

class InlineDiffCalloutWire extends Component
{
    public string $title = '06. Architectural Callout & Warning Block';
    public string $badge = 'CALLOUT BOX';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'inline-diff-callout');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-toasts-inline-diff-callout" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-toasts-inline-diff-callout__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-toasts-inline-diff-callout__body">
                <p>Bloque de alerta embebido con borde lateral de precisión, icono SVG técnico y acciones correctivas.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
