<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. REST / GraphQL Endpoint Spec Card (LARAVEL LIVEWIRE 3)
 * Archivo: components/cards/variants/api-endpoint-blueprint/ApiEndpointBlueprintWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Cards;

use Livewire\Component;

class ApiEndpointBlueprintWire extends Component
{
    public string $title = '03. REST / GraphQL Endpoint Spec Card';
    public string $badge = 'API SPEC';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'api-endpoint-blueprint');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-cards-api-endpoint-blueprint" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-cards-api-endpoint-blueprint__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-cards-api-endpoint-blueprint__body">
                <p>Muestra método HTTP, ruta parametrizada, latencia media y esquema de respuesta con botón de prueba.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
