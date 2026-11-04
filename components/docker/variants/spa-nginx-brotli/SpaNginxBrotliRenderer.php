<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. React / Vue / Svelte / Angular SPA + Nginx (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/docker/variants/spa-nginx-brotli/SpaNginxBrotliRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Docker;

final class SpaNginxBrotliRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '03. React / Vue / Svelte / Angular SPA + Nginx'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'NGINX ALPINE'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-docker-spa-nginx-brotli" data-theme="{$theme}" data-variant="spa-nginx-brotli">
            <header class="cxd-docker-spa-nginx-brotli__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-docker-spa-nginx-brotli__body">
                <p>Compila estáticos en etapa builder y sirve con Nginx configurado con fallback SPA y cabeceras de caché.</p>
            </div>
        </section>
        HTML;
    }
}
