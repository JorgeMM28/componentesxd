<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Technical Documentation Scrollspy Rail (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/navigation/variants/scrollspy-toc-rail/ScrollspyTocRailRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Navigation;

final class ScrollspyTocRailRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '05. Technical Documentation Scrollspy Rail'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'TOC RAIL'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-navigation-scrollspy-toc-rail" data-theme="{$theme}" data-variant="scrollspy-toc-rail">
            <header class="cxd-navigation-scrollspy-toc-rail__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-navigation-scrollspy-toc-rail__body">
                <p>Índice lateral para documentación técnica que resalta la sección visible actual y muestra porcentaje leído.</p>
            </div>
        </section>
        HTML;
    }
}
