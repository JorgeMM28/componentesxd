<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. Telemetry KPI + SVG Sparkline Card (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/cards/variants/telemetry-sparkline-kpi/TelemetrySparklineKpiRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Cards;

final class TelemetrySparklineKpiRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '02. Telemetry KPI + SVG Sparkline Card'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'LIVE METRIC'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-cards-telemetry-sparkline-kpi" data-theme="{$theme}" data-variant="telemetry-sparkline-kpi">
            <header class="cxd-cards-telemetry-sparkline-kpi__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-cards-telemetry-sparkline-kpi__body">
                <p>Tarjeta de métrica operativa con curva SVG embebida, variación porcentual y estado de umbral.</p>
            </div>
        </section>
        HTML;
    }
}
