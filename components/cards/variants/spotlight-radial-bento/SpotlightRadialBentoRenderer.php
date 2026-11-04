<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Cursor-Tracking Radial Spotlight Card (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/cards/variants/spotlight-radial-bento/SpotlightRadialBentoRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Cards;

final class SpotlightRadialBentoRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '01. Cursor-Tracking Radial Spotlight Card'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'RADIAL LIGHT'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-cards-spotlight-radial-bento" data-theme="{$theme}" data-variant="spotlight-radial-bento">
            <header class="cxd-cards-spotlight-radial-bento__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-cards-spotlight-radial-bento__body">
                <p>Proyecta iluminación radial siguiendo las coordenadas X/Y del puntero sobre el chasis y el borde.</p>
            </div>
        </section>
        HTML;
    }
}
