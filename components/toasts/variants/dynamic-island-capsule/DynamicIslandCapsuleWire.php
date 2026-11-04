<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Dynamic Island Morphing Capsule (LARAVEL LIVEWIRE 3)
 * Archivo: components/toasts/variants/dynamic-island-capsule/DynamicIslandCapsuleWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Toasts;

use Livewire\Component;

class DynamicIslandCapsuleWire extends Component
{
    public string $title = '01. Dynamic Island Morphing Capsule';
    public string $badge = 'MORPHING CAPSULE';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'dynamic-island-capsule');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-toasts-dynamic-island-capsule" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-toasts-dynamic-island-capsule__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-toasts-dynamic-island-capsule__body">
                <p>Cápsula superior que se expande suavemente entre estado reposo, procesamiento con onda de actividad y confirmación.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
