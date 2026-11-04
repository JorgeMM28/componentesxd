<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Semantic Status Badges & Live Pulse Dots (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/badges-data/variants/status-pulse-pills/StatusPulsePillsRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\BadgesData;

final class StatusPulsePillsRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '01. Semantic Status Badges & Live Pulse Dots'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'STATUS BADGES'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-badges-data-status-pulse-pills" data-theme="{$theme}" data-variant="status-pulse-pills">
            <header class="cxd-badges-data-status-pulse-pills__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-badges-data-status-pulse-pills__body">
                <p>Colección de insignias semánticas (Operational, Degraded, Outage, Maintenance) con indicador luminoso.</p>
            </div>
        </section>
        HTML;
    }
}
