<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. Multi-File Upload Progress Toaster (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/toasts/variants/floating-upload-Dock/FloatingUploadDockRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Toasts;

final class FloatingUploadDockRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '07. Multi-File Upload Progress Toaster'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'UPLOAD MANAGER'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-toasts-floating-upload-Dock" data-theme="{$theme}" data-variant="floating-upload-Dock">
            <header class="cxd-toasts-floating-upload-Dock__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-toasts-floating-upload-Dock__body">
                <p>Panel flotante compacto con barra de transferencia en tiempo real, velocidad MB/s y control de cancelación.</p>
            </div>
        </section>
        HTML;
    }
}
