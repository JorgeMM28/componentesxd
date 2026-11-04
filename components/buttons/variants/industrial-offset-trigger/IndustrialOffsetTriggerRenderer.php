<?php
/**
 * ============================================================================
 * COMPONENTESXD — 08. Mechanical Hard-Offset Push Button (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/buttons/variants/industrial-offset-trigger/IndustrialOffsetTriggerRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Buttons;

final class IndustrialOffsetTriggerRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '08. Mechanical Hard-Offset Push Button'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'TACTILE PUSH'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-buttons-industrial-offset-trigger" data-theme="{$theme}" data-variant="industrial-offset-trigger">
            <header class="cxd-buttons-industrial-offset-trigger__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-buttons-industrial-offset-trigger__body">
                <p>Recorrido físico vertical al presionar con sombra sólida que colapsa en el estado :active.</p>
            </div>
        </section>
        HTML;
    }
}
