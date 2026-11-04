<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Bun Distroless High-Performance Runtime (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/docker/variants/bun-ultra-fast-api/BunUltraFastApiRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Docker;

final class BunUltraFastApiRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '05. Bun Distroless High-Performance Runtime'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'BUN RUNTIME'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-docker-bun-ultra-fast-api" data-theme="{$theme}" data-variant="bun-ultra-fast-api">
            <header class="cxd-docker-bun-ultra-fast-api__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-docker-bun-ultra-fast-api__body">
                <p>Contenedor basado en oven/bun:alpine para microservicios TypeScript de arranque instantáneo.</p>
            </div>
        </section>
        HTML;
    }
}
