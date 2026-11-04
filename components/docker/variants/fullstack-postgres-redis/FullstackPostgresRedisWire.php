<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Fullstack Compose (App + Postgres 17 + Redis 7.4) (LARAVEL LIVEWIRE 3)
 * Archivo: components/docker/variants/fullstack-postgres-redis/FullstackPostgresRedisWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Docker;

use Livewire\Component;

class FullstackPostgresRedisWire extends Component
{
    public string $title = '04. Fullstack Compose (App + Postgres 17 + Redis 7.4)';
    public string $badge = 'DOCKER COMPOSE';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'fullstack-postgres-redis');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-docker-fullstack-postgres-redis" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-docker-fullstack-postgres-redis__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-docker-fullstack-postgres-redis__body">
                <p>Orquestación completa con volúmenes persistentes, redes aisladas y healthchecks deterministas.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
