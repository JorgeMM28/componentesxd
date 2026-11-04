<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. Segmented Action Bar with Active Pill (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/buttons/variants/segmented-mode-group/SegmentedModeGroupRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Buttons;

final class SegmentedModeGroupRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '07. Segmented Action Bar with Active Pill'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'BUTTON GROUP'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-buttons-segmented-mode-group" data-theme="{$theme}" data-variant="segmented-mode-group">
            <header class="cxd-buttons-segmented-mode-group__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-buttons-segmented-mode-group__body">
                <p>Barra de herramientas unificada por bordes de 1px para alternar vistas (Tabla / Tarjetas / Grafo / JSON).</p>
            </div>
        </section>
        HTML;
    }
}
