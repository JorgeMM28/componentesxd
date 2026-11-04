<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Async 3-State Morph Button (Idle -> Run -> Done) (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/buttons/variants/async-state-morph/AsyncStateMorphRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Buttons;

final class AsyncStateMorphRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '04. Async 3-State Morph Button (Idle -> Run -> Done)'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'STATE MACHINE'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-buttons-async-state-morph" data-theme="{$theme}" data-variant="async-state-morph">
            <header class="cxd-buttons-async-state-morph__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-buttons-async-state-morph__body">
                <p>Transiciona automáticamente entre etiqueta normal, spinner SVG de precisión y confirmación vectorial.</p>
            </div>
        </section>
        HTML;
    }
}
