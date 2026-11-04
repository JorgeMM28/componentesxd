<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. CLI & Webhook Telemetry Toast (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/toasts/variants/terminal-cli-toast/TerminalCliToastRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Toasts;

final class TerminalCliToastRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '04. CLI & Webhook Telemetry Toast'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'DEV / WEBHOOK'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-toasts-terminal-cli-toast" data-theme="{$theme}" data-variant="terminal-cli-toast">
            <header class="cxd-toasts-terminal-cli-toast__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-toasts-terminal-cli-toast__body">
                <p>Notificación técnica con payload JSON resumido, código de estado HTTP y botón de copiado de trace ID.</p>
            </div>
        </section>
        HTML;
    }
}
