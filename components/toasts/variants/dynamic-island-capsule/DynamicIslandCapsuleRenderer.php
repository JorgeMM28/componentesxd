<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Dynamic Island Morphing Capsule (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/toasts/variants/dynamic-island-capsule/DynamicIslandCapsuleRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Toasts;

final class DynamicIslandCapsuleRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '01. Dynamic Island Morphing Capsule'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'MORPHING CAPSULE'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-toasts-dynamic-island-capsule" data-theme="{$theme}" data-variant="dynamic-island-capsule">
            <header class="cxd-toasts-dynamic-island-capsule__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-toasts-dynamic-island-capsule__body">
                <p>Cápsula superior que se expande suavemente entre estado reposo, procesamiento con onda de actividad y confirmación.</p>
            </div>
        </section>
        HTML;
    }
}
