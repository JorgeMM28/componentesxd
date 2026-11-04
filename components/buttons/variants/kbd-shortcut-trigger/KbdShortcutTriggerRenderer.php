<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Tactical KBD Shortcut Command Button (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/buttons/variants/kbd-shortcut-trigger/KbdShortcutTriggerRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Buttons;

final class KbdShortcutTriggerRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '06. Tactical KBD Shortcut Command Button'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'HOTKEY READY'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-buttons-kbd-shortcut-trigger" data-theme="{$theme}" data-variant="kbd-shortcut-trigger">
            <header class="cxd-buttons-kbd-shortcut-trigger__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-buttons-kbd-shortcut-trigger__body">
                <p>Incluye insignia física de atajo de teclado (Cmd+Enter) y responde tanto a clic como a evento keydown.</p>
            </div>
        </section>
        HTML;
    }
}
