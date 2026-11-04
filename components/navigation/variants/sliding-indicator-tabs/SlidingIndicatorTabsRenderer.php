<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Precision Tab Bar with Sliding Hairline (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/navigation/variants/sliding-indicator-tabs/SlidingIndicatorTabsRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Navigation;

final class SlidingIndicatorTabsRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '04. Precision Tab Bar with Sliding Hairline'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'TABS BAR'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-navigation-sliding-indicator-tabs" data-theme="{$theme}" data-variant="sliding-indicator-tabs">
            <header class="cxd-navigation-sliding-indicator-tabs__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-navigation-sliding-indicator-tabs__body">
                <p>Pestañas horizontales con línea inferior activa que se desliza suavemente hacia la pestaña seleccionada.</p>
            </div>
        </section>
        HTML;
    }
}
