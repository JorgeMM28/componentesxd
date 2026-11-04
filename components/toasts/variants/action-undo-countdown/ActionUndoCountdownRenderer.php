<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Actionable Undo Toast + Progress Timer (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/toasts/variants/action-undo-countdown/ActionUndoCountdownRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Toasts;

final class ActionUndoCountdownRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '03. Actionable Undo Toast + Progress Timer'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'UNDO / TIMER'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-toasts-action-undo-countdown" data-theme="{$theme}" data-variant="action-undo-countdown">
            <header class="cxd-toasts-action-undo-countdown__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-toasts-action-undo-countdown__body">
                <p>Toaster con botón de acción ("Deshacer borrado") y barra inferior de cuenta regresiva sincronizada.</p>
            </div>
        </section>
        HTML;
    }
}
