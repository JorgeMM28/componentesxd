<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Traefik v3 Automatic TLS + Reverse Proxy (LARAVEL LIVEWIRE 3)
 * Archivo: components/docker/variants/traefik-reverse-proxy/TraefikReverseProxyWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Docker;

use Livewire\Component;

class TraefikReverseProxyWire extends Component
{
    public string $title = '06. Traefik v3 Automatic TLS + Reverse Proxy';
    public string $badge = 'REVERSE PROXY';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'traefik-reverse-proxy');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-docker-traefik-reverse-proxy" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-docker-traefik-reverse-proxy__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-docker-traefik-reverse-proxy__body">
                <p>Configuración lista para enrutar múltiples contenedores locales con certificados y balanceo automático.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
