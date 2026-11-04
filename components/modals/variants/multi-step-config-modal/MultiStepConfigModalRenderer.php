<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Stepped Configuration Wizard Modal (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/modals/variants/multi-step-config-modal/MultiStepConfigModalRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Modals;

final class MultiStepConfigModalRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '04. Stepped Configuration Wizard Modal'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'WIZARD MODAL'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-modals-multi-step-config-modal" data-theme="{$theme}" data-variant="multi-step-config-modal">
            <header class="cxd-modals-multi-step-config-modal__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-modals-multi-step-config-modal__body">
                <p>Ventana modal dividida en pasos con indicador de progreso superior y pie de navegación persistente.</p>
            </div>
        </section>
        HTML;
    }
}
