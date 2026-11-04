<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Anchored Context Menu & Quick Popover (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/modals/variants/anchored-context-popover/AnchoredContextPopoverRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Modals;

final class AnchoredContextPopoverRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '05. Anchored Context Menu & Quick Popover'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'CONTEXT MENU'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-modals-anchored-context-popover" data-theme="{$theme}" data-variant="anchored-context-popover">
            <header class="cxd-modals-anchored-context-popover__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-modals-anchored-context-popover__body">
                <p>Menú flotante compacto con separadores de 1px, iconos vectoriales alineados y sub-acciones.</p>
            </div>
        </section>
        HTML;
    }
}
