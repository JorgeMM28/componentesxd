<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Architectural Key-Value Description Grid (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/badges-data/variants/key-value-spec-list/KeyValueSpecListRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\BadgesData;

final class KeyValueSpecListRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '04. Architectural Key-Value Description Grid'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SPEC LIST'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-badges-data-key-value-spec-list" data-theme="{$theme}" data-variant="key-value-spec-list">
            <header class="cxd-badges-data-key-value-spec-list__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-badges-data-key-value-spec-list__body">
                <p>Lista estructurada de propiedades técnicas con líneas guía punteadas y copiado rápido por valor.</p>
            </div>
        </section>
        HTML;
    }
}
