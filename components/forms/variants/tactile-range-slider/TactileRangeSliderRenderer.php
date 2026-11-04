<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Precision Numeric Range & Step Control (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/forms/variants/tactile-range-slider/TactileRangeSliderRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Forms;

final class TactileRangeSliderRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '06. Precision Numeric Range & Step Control'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'RANGE / STEPPER'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-forms-tactile-range-slider" data-theme="{$theme}" data-variant="tactile-range-slider">
            <header class="cxd-forms-tactile-range-slider__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-forms-tactile-range-slider__body">
                <p>Deslizador calibrado con marcas de graduación, lectura numérica tabular en vivo y botones +/- finos.</p>
            </div>
        </section>
        HTML;
    }
}
