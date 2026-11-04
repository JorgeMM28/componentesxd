<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Full-Width Incident & Maintenance Strip (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/toasts/variants/system-banner-strip/SystemBannerStripRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Toasts;

final class SystemBannerStripRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '05. Full-Width Incident & Maintenance Strip'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'STATUS BAR'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-toasts-system-banner-strip" data-theme="{$theme}" data-variant="system-banner-strip">
            <header class="cxd-toasts-system-banner-strip__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-toasts-system-banner-strip__body">
                <p>Barra estructural superior para anuncios de mantenimiento, degradación de SLA o nuevas versiones.</p>
            </div>
        </section>
        HTML;
    }
}
