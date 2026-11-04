<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. 3D Isometric Perspective Hover Card (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/cards/variants/isometric-layer-card/IsometricLayerCardRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Cards;

final class IsometricLayerCardRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '07. 3D Isometric Perspective Hover Card'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? '3D TILT'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-cards-isometric-layer-card" data-theme="{$theme}" data-variant="isometric-layer-card">
            <header class="cxd-cards-isometric-layer-card__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-cards-isometric-layer-card__body">
                <p>Calcula ángulos de rotación X/Y según posición del cursor con capas internas en paralaje.</p>
            </div>
        </section>
        HTML;
    }
}
