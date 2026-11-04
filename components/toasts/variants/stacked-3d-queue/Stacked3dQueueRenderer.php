<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. 3D Perspective Stacked Toast Queue (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/toasts/variants/stacked-3d-queue/Stacked3dQueueRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Toasts;

final class Stacked3dQueueRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '02. 3D Perspective Stacked Toast Queue'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'STACKED QUEUE'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-toasts-stacked-3d-queue" data-theme="{$theme}" data-variant="stacked-3d-queue">
            <header class="cxd-toasts-stacked-3d-queue__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-toasts-stacked-3d-queue__body">
                <p>Cola de notificaciones apiladas en profundidad 3D que se despliegan en abanico al pasar el cursor.</p>
            </div>
        </section>
        HTML;
    }
}
