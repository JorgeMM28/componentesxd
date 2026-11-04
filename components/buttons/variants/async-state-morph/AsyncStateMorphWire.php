<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Async 3-State Morph Button (Idle -> Run -> Done) (LARAVEL LIVEWIRE 3)
 * Archivo: components/buttons/variants/async-state-morph/AsyncStateMorphWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Buttons;

use Livewire\Component;

class AsyncStateMorphWire extends Component
{
    public string $title = '04. Async 3-State Morph Button (Idle -> Run -> Done)';
    public string $badge = 'STATE MACHINE';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'async-state-morph');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-buttons-async-state-morph" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-buttons-async-state-morph__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-buttons-async-state-morph__body">
                <p>Transiciona automáticamente entre etiqueta normal, spinner SVG de precisión y confirmación vectorial.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
