<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Raw JSON / Schema Diff Modal Inspector (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/modals/variants/json-payload-lightbox/JsonPayloadLightboxRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Modals;

final class JsonPayloadLightboxRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '06. Raw JSON / Schema Diff Modal Inspector'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'PAYLOAD VIEWER'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-modals-json-payload-lightbox" data-theme="{$theme}" data-variant="json-payload-lightbox">
            <header class="cxd-modals-json-payload-lightbox__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-modals-json-payload-lightbox__body">
                <p>Visor modal con numeración de líneas, plegado de nodos y copiado directo de estructuras JSON.</p>
            </div>
        </section>
        HTML;
    }
}
