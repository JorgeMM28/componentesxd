<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Scoped Filter & Query Input Bar (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/forms/variants/scoped-query-bar/ScopedQueryBarRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Forms;

final class ScopedQueryBarRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '05. Scoped Filter & Query Input Bar'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'QUERY BUILDER'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-forms-scoped-query-bar" data-theme="{$theme}" data-variant="scoped-query-bar">
            <header class="cxd-forms-scoped-query-bar__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-forms-scoped-query-bar__body">
                <p>Barra de entrada con selector de ámbito (env:prod, region:us-east) integrado a la izquierda y botón limpiar.</p>
            </div>
        </section>
        HTML;
    }
}
