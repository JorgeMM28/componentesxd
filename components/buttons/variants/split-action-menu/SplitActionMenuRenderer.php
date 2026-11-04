<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Split Primary + Context Dropdown Button (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/buttons/variants/split-action-menu/SplitActionMenuRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Buttons;

final class SplitActionMenuRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '05. Split Primary + Context Dropdown Button'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SPLIT ACTION'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-buttons-split-action-menu" data-theme="{$theme}" data-variant="split-action-menu">
            <header class="cxd-buttons-split-action-menu__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-buttons-split-action-menu__body">
                <p>Combina la ejecución principal inmediata con un selector desplegable de opciones secundarias (Deploy / Dry-run).</p>
            </div>
        </section>
        HTML;
    }
}
