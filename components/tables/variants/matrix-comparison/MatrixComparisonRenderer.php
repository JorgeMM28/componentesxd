<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Sticky Spec & Feature Comparison Matrix (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/tables/variants/matrix-comparison/MatrixComparisonRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Tables;

final class MatrixComparisonRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '04. Sticky Spec & Feature Comparison Matrix'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SPEC MATRIX'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-tables-matrix-comparison" data-theme="{$theme}" data-variant="matrix-comparison">
            <header class="cxd-tables-matrix-comparison__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-tables-matrix-comparison__body">
                <p>Tabla comparativa con primera columna fija, indicadores vectoriales SVG de soporte, límites técnicos y cabeceras congeladas.</p>
            </div>
        </section>
        HTML;
    }
}
