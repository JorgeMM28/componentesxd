<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Conic Border Beam Button (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/buttons/variants/conic-border-beam/ConicBorderBeamRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Buttons;

final class ConicBorderBeamRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '02. Conic Border Beam Button'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'CSS @PROPERTY'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-buttons-conic-border-beam" data-theme="{$theme}" data-variant="conic-border-beam">
            <header class="cxd-buttons-conic-border-beam__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-buttons-conic-border-beam__body">
                <p>Haz de luz perimetral continuo renderizado por GPU mediante @property sin elementos DOM extra.</p>
            </div>
        </section>
        HTML;
    }
}
