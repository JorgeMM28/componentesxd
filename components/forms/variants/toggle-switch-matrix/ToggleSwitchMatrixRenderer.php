<?php
/**
 * ============================================================================
 * COMPONENTESXD — 08. Industrial Toggle Switch & Radio Cards (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/forms/variants/toggle-switch-matrix/ToggleSwitchMatrixRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Forms;

final class ToggleSwitchMatrixRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '08. Industrial Toggle Switch & Radio Cards'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SWITCHES'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-forms-toggle-switch-matrix" data-theme="{$theme}" data-variant="toggle-switch-matrix">
            <header class="cxd-forms-toggle-switch-matrix__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-forms-toggle-switch-matrix__body">
                <p>Interruptores binarios de baja latencia y tarjetas de selección exclusiva con indicador activo.</p>
            </div>
        </section>
        HTML;
    }
}
