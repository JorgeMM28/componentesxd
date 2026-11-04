<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Architectural Key-Value Description Grid (LARAVEL LIVEWIRE 3)
 * Archivo: components/badges-data/variants/key-value-spec-list/KeyValueSpecListWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\BadgesData;

use Livewire\Component;

class KeyValueSpecListWire extends Component
{
    public string $title = '04. Architectural Key-Value Description Grid';
    public string $badge = 'SPEC LIST';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'key-value-spec-list');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-badges-data-key-value-spec-list" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-badges-data-key-value-spec-list__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-badges-data-key-value-spec-list__body">
                <p>Lista estructurada de propiedades técnicas con líneas guía punteadas y copiado rápido por valor.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
