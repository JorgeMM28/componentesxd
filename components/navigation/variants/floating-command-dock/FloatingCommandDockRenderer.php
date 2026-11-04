<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Floating Bottom Command Dock (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/navigation/variants/floating-command-dock/FloatingCommandDockRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Navigation;

final class FloatingCommandDockRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '03. Floating Bottom Command Dock'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'FLOATING DOCK'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-navigation-floating-command-dock" data-theme="{$theme}" data-variant="floating-command-dock">
            <header class="cxd-navigation-floating-command-dock__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-navigation-floating-command-dock__body">
                <p>Barra flotante inferior con tooltips instantáneos, separadores verticales y accesos rápidos.</p>
            </div>
        </section>
        HTML;
    }
}
