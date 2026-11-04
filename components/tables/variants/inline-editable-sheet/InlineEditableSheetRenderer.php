<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Inline Editable Data Sheet (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/tables/variants/inline-editable-sheet/InlineEditableSheetRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Tables;

final class InlineEditableSheetRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '05. Inline Editable Data Sheet'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SPREADSHEET UI'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-tables-inline-editable-sheet" data-theme="{$theme}" data-variant="inline-editable-sheet">
            <header class="cxd-tables-inline-editable-sheet__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-tables-inline-editable-sheet__body">
                <p>Celdas editables directamente al hacer clic con resaltado de celda activa, validación instantánea y navegación por teclado.</p>
            </div>
        </section>
        HTML;
    }
}
