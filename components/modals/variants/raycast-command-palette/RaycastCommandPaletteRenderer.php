<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Command Palette (Cmd+K) Action Center (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/modals/variants/raycast-command-palette/RaycastCommandPaletteRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Modals;

final class RaycastCommandPaletteRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '01. Command Palette (Cmd+K) Action Center'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'CMD+K PALETTE'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-modals-raycast-command-palette" data-theme="{$theme}" data-variant="raycast-command-palette">
            <header class="cxd-modals-raycast-command-palette__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-modals-raycast-command-palette__body">
                <p>Buscador universal de comandos con filtrado instantáneo, navegación por flechas y atajos de teclado.</p>
            </div>
        </section>
        HTML;
    }
}
