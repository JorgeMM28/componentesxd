<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Technical Wireframe Empty State (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/badges-data/variants/empty-state-blueprint/EmptyStateBlueprintRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\BadgesData;

final class EmptyStateBlueprintRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '06. Technical Wireframe Empty State'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'EMPTY STATE'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-badges-data-empty-state-blueprint" data-theme="{$theme}" data-variant="empty-state-blueprint">
            <header class="cxd-badges-data-empty-state-blueprint__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-badges-data-empty-state-blueprint__body">
                <p>Estado vacío con ilustración geométrica en SVG, explicación clara y acción rápida de creación.</p>
            </div>
        </section>
        HTML;
    }
}
