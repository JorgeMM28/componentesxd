<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Tree Sidebar Navigation (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/navigation/variants/collapsible-tree-sidebar/CollapsibleTreeSidebarRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Navigation;

final class CollapsibleTreeSidebarRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '01. Architectural Tree Sidebar Navigation'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'APP SIDEBAR'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-navigation-collapsible-tree-sidebar" data-theme="{$theme}" data-variant="collapsible-tree-sidebar">
            <header class="cxd-navigation-collapsible-tree-sidebar__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-navigation-collapsible-tree-sidebar__body">
                <p>Navegación vertical con secciones colapsables, contadores numéricos tabulares e indicador activo.</p>
            </div>
        </section>
        HTML;
    }
}
