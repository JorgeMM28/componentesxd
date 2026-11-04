<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Bun Distroless High-Performance Runtime (LARAVEL LIVEWIRE 3)
 * Archivo: components/docker/variants/bun-ultra-fast-api/BunUltraFastApiWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Docker;

use Livewire\Component;

class BunUltraFastApiWire extends Component
{
    public string $title = '05. Bun Distroless High-Performance Runtime';
    public string $badge = 'BUN RUNTIME';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'bun-ultra-fast-api');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-docker-bun-ultra-fast-api" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-docker-bun-ultra-fast-api__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-docker-bun-ultra-fast-api__body">
                <p>Contenedor basado en oven/bun:alpine para microservicios TypeScript de arranque instantáneo.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
