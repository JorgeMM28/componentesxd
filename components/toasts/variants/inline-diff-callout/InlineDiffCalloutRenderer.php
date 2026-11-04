<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Architectural Callout & Warning Block (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/toasts/variants/inline-diff-callout/InlineDiffCalloutRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Toasts;

final class InlineDiffCalloutRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '06. Architectural Callout & Warning Block'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'CALLOUT BOX'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-toasts-inline-diff-callout" data-theme="{$theme}" data-variant="inline-diff-callout">
            <header class="cxd-toasts-inline-diff-callout__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-toasts-inline-diff-callout__body">
                <p>Bloque de alerta embebido con borde lateral de precisión, icono SVG técnico y acciones correctivas.</p>
            </div>
        </section>
        HTML;
    }
}
