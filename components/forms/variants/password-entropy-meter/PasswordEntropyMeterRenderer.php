<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Password Input + Live Entropy Analyzer (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/forms/variants/password-entropy-meter/PasswordEntropyMeterRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Forms;

final class PasswordEntropyMeterRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '04. Password Input + Live Entropy Analyzer'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SECURITY METER'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-forms-password-entropy-meter" data-theme="{$theme}" data-variant="password-entropy-meter">
            <header class="cxd-forms-password-entropy-meter__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-forms-password-entropy-meter__body">
                <p>Evalúa longitud, símbolos y entropía en tiempo real mediante 4 segmentos de estado y checklist SVG.</p>
            </div>
        </section>
        HTML;
    }
}
