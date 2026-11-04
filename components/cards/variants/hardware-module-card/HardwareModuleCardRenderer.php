<?php
/**
 * ============================================================================
 * COMPONENTESXD — 08. Teenage-Style Hardware Synth Module Card (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/cards/variants/hardware-module-card/HardwareModuleCardRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Cards;

final class HardwareModuleCardRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '08. Teenage-Style Hardware Synth Module Card'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'INDUSTRIAL UI'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-cards-hardware-module-card" data-theme="{$theme}" data-variant="hardware-module-card">
            <header class="cxd-cards-hardware-module-card__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-cards-hardware-module-card__body">
                <p>Estética de módulo físico con tornillos vectoriales en las esquinas, indicadores LED y lecturas mono.</p>
            </div>
        </section>
        HTML;
    }
}
