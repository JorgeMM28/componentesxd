<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Floating-Label Input (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/forms/variants/floating-precision-input/FloatingPrecisionInputRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Forms;

final class FloatingPrecisionInputRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '01. Architectural Floating-Label Input'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'FLOATING LABEL'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-forms-floating-precision-input" data-theme="{$theme}" data-variant="floating-precision-input">
            <header class="cxd-forms-floating-precision-input__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-forms-floating-precision-input__body">
                <p>Etiqueta que asciende con transición cúbica al enfocar o contener valor, con indicador de validación.</p>
            </div>
        </section>
        HTML;
    }
}
