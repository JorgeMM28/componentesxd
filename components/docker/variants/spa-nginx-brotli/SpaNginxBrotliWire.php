<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. React / Vue / Svelte / Angular SPA + Nginx (LARAVEL LIVEWIRE 3)
 * Archivo: components/docker/variants/spa-nginx-brotli/SpaNginxBrotliWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Docker;

use Livewire\Component;

class SpaNginxBrotliWire extends Component
{
    public string $title = '03. React / Vue / Svelte / Angular SPA + Nginx';
    public string $badge = 'NGINX ALPINE';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'spa-nginx-brotli');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-docker-spa-nginx-brotli" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-docker-spa-nginx-brotli__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-docker-spa-nginx-brotli__body">
                <p>Compila estáticos en etapa builder y sirve con Nginx configurado con fallback SPA y cabeceras de caché.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
