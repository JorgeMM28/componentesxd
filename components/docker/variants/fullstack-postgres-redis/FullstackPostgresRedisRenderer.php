<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Fullstack Compose (App + Postgres 17 + Redis 7.4) (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/docker/variants/fullstack-postgres-redis/FullstackPostgresRedisRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Docker;

final class FullstackPostgresRedisRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '04. Fullstack Compose (App + Postgres 17 + Redis 7.4)'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'DOCKER COMPOSE'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-docker-fullstack-postgres-redis" data-theme="{$theme}" data-variant="fullstack-postgres-redis">
            <header class="cxd-docker-fullstack-postgres-redis__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-docker-fullstack-postgres-redis__body">
                <p>Orquestación completa con volúmenes persistentes, redes aisladas y healthchecks deterministas.</p>
            </div>
        </section>
        HTML;
    }
}
