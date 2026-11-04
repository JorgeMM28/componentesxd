<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Slide-Over Telemetry Inspector Drawer (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/modals/variants/slide-over-inspector-drawer/SlideOverInspectorDrawerRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Modals;

final class SlideOverInspectorDrawerRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '02. Slide-Over Telemetry Inspector Drawer'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SIDE DRAWER'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-modals-slide-over-inspector-drawer" data-theme="{$theme}" data-variant="slide-over-inspector-drawer">
            <header class="cxd-modals-slide-over-inspector-drawer__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-modals-slide-over-inspector-drawer__body">
                <p>Panel lateral deslizable para inspeccionar metadatos de una fila, logs o configuración sin perder contexto.</p>
            </div>
        </section>
        HTML;
    }
}
