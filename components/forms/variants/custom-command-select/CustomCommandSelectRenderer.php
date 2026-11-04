<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Searchable Multi-Option Dropdown Select (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/forms/variants/custom-command-select/CustomCommandSelectRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Forms;

final class CustomCommandSelectRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '03. Searchable Multi-Option Dropdown Select'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'CUSTOM SELECT'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-forms-custom-command-select" data-theme="{$theme}" data-variant="custom-command-select">
            <header class="cxd-forms-custom-command-select__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-forms-custom-command-select__body">
                <p>Lista desplegable organizada con categorías, prefijos técnicos y selección instantánea sin desorden visual.</p>
            </div>
        </section>
        HTML;
    }
}
