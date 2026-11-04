<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. Keyboard Shortcut Chord Display (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/badges-data/variants/keyboard-shortcut-matrix/KeyboardShortcutMatrixRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\BadgesData;

final class KeyboardShortcutMatrixRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '07. Keyboard Shortcut Chord Display'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'KBD CHORDS'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-badges-data-keyboard-shortcut-matrix" data-theme="{$theme}" data-variant="keyboard-shortcut-matrix">
            <header class="cxd-badges-data-keyboard-shortcut-matrix__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-badges-data-keyboard-shortcut-matrix__body">
                <p>Representación visual de combinaciones de teclas (Ctrl + Shift + P) con relieve táctil.</p>
            </div>
        </section>
        HTML;
    }
}
