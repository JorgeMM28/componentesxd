<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Hierarchical Tree & Sub-Row Table (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/tables/variants/nested-tree-grid/NestedTreeGridRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Tables;

final class NestedTreeGridRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '02. Hierarchical Tree & Sub-Row Table'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'TREE / EXPANDABLE'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-tables-nested-tree-grid" data-theme="{$theme}" data-variant="nested-tree-grid">
            <header class="cxd-tables-nested-tree-grid__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-tables-nested-tree-grid__body">
                <p>Tabla jerárquica con filas padre/hijo desplegables para desglose de clusters, microservicios, carpetas o centros de costos.</p>
            </div>
        </section>
        HTML;
    }
}
