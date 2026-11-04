<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Architectural Pricing & Quota Tier Card (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/cards/variants/pricing-architecture-tier/PricingArchitectureTierRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Cards;

final class PricingArchitectureTierRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '05. Architectural Pricing & Quota Tier Card'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'BILLING TIER'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-cards-pricing-architecture-tier" data-theme="{$theme}" data-variant="pricing-architecture-tier">
            <header class="cxd-cards-pricing-architecture-tier__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-cards-pricing-architecture-tier__body">
                <p>Desglose técnico de plan con medidor de cuota consumida, lista verificada con SVGs y CTA integrado.</p>
            </div>
        </section>
        HTML;
    }
}
