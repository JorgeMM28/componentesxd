<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Critical Action Verification Modal (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/modals/variants/destructive-confirm-dialog/DestructiveConfirmDialogRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Modals;

final class DestructiveConfirmDialogRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '03. Critical Action Verification Modal'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SAFETY DIALOG'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-modals-destructive-confirm-dialog" data-theme="{$theme}" data-variant="destructive-confirm-dialog">
            <header class="cxd-modals-destructive-confirm-dialog__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-modals-destructive-confirm-dialog__body">
                <p>Diálogo de seguridad que solicita escribir el nombre del recurso antes de habilitar el botón de borrado.</p>
            </div>
        </section>
        HTML;
    }
}
