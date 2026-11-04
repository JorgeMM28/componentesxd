<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Expandable Postmortem & Diagnostics Card (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/cards/variants/expandable-incident-card/ExpandableIncidentCardRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Cards;

final class ExpandableIncidentCardRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '06. Expandable Postmortem & Diagnostics Card'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'ACCORDION CARD'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-cards-expandable-incident-card" data-theme="{$theme}" data-variant="expandable-incident-card">
            <header class="cxd-cards-expandable-incident-card__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-cards-expandable-incident-card__body">
                <p>Resumen compacto que despliega detalles técnicos de diagnóstico, nodos afectados y cronología.</p>
            </div>
        </section>
        HTML;
    }
}
