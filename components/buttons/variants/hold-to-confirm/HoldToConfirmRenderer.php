<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Destructive Hold-to-Confirm Button (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/buttons/variants/hold-to-confirm/HoldToConfirmRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Buttons;

final class HoldToConfirmRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '03. Destructive Hold-to-Confirm Button'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SAFETY LOCK'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-buttons-hold-to-confirm" data-theme="{$theme}" data-variant="hold-to-confirm">
            <header class="cxd-buttons-hold-to-confirm__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-buttons-hold-to-confirm__body">
                <p>Previene clics accidentales en acciones críticas exigiendo mantener presionado 1.2s mientras se llena la barra.</p>
            </div>
        </section>
        HTML;
    }
}
