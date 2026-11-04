<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Magnetic Cursor-Tracking Button (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/buttons/variants/magnetic-precision/MagneticPrecisionRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Buttons;

final class MagneticPrecisionRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '01. Magnetic Cursor-Tracking Button'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'MAGNETIC'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-buttons-magnetic-precision" data-theme="{$theme}" data-variant="magnetic-precision">
            <header class="cxd-buttons-magnetic-precision__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-buttons-magnetic-precision__body">
                <p>Calcula el centro geométrico y aplica traslación proporcional al cursor con retorno elástico.</p>
            </div>
        </section>
        HTML;
    }
}
