<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Raw JSON / Schema Diff Modal Inspector (LARAVEL LIVEWIRE 3)
 * Archivo: components/modals/variants/json-payload-lightbox/JsonPayloadLightboxWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Modals;

use Livewire\Component;

class JsonPayloadLightboxWire extends Component
{
    public string $title = '06. Raw JSON / Schema Diff Modal Inspector';
    public string $badge = 'PAYLOAD VIEWER';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'json-payload-lightbox');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-modals-json-payload-lightbox" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-modals-json-payload-lightbox__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-modals-json-payload-lightbox__body">
                <p>Visor modal con numeración de líneas, plegado de nodos y copiado directo de estructuras JSON.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
