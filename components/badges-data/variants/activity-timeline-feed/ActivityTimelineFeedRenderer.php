<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Vertical Deployment & Event Timeline (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/badges-data/variants/activity-timeline-feed/ActivityTimelineFeedRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\BadgesData;

final class ActivityTimelineFeedRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '02. Vertical Deployment & Event Timeline'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'TIMELINE FEED'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-badges-data-activity-timeline-feed" data-theme="{$theme}" data-variant="activity-timeline-feed">
            <header class="cxd-badges-data-activity-timeline-feed__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-badges-data-activity-timeline-feed__body">
                <p>Línea de tiempo técnica con nodos vectoriales conectados, autor, timestamp relativo y metadatos.</p>
            </div>
        </section>
        HTML;
    }
}
