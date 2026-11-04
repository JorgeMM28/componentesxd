<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Full Pagination + Page Size Selector Bar (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/navigation/variants/pagination-matrix-bar/PaginationMatrixBarRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Navigation;

final class PaginationMatrixBarRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '06. Full Pagination + Page Size Selector Bar'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'PAGINATION'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-navigation-pagination-matrix-bar" data-theme="{$theme}" data-variant="pagination-matrix-bar">
            <header class="cxd-navigation-pagination-matrix-bar__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-navigation-pagination-matrix-bar__body">
                <p>Control de paginación con salto directo a página, selector desplegable de filas por vista y rango actual.</p>
            </div>
        </section>
        HTML;
    }
}
