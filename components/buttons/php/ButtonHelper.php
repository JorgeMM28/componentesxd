<?php
/**
 * ============================================================================
 * COMPONENTESXD — KINETIC BUTTON HELPER (PHP 8.2+)
 * Archivo: components/buttons/php/ButtonHelper.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Buttons;

final class ButtonHelper
{
    public static function render(
        string $label,
        string $variant = 'primary',
        bool $magnetic = true,
        array $attributes = []
    ): string {
        $escapedLabel = htmlspecialchars($label, ENT_QUOTES, 'UTF-8');
        $escapedVariant = htmlspecialchars($variant, ENT_QUOTES, 'UTF-8');
        $magAttr = $magnetic ? ' data-cxd-magnetic="true"' : '';

        $attrPairs = [];
        foreach ($attributes as $k => $v) {
            $attrPairs[] = htmlspecialchars((string) $k, ENT_QUOTES, 'UTF-8') . '="' . htmlspecialchars((string) $v, ENT_QUOTES, 'UTF-8') . '"';
        }
        $extraAttrs = $attrPairs ? ' ' . implode(' ', $attrPairs) : '';

        return <<<HTML
        <button type="button" class="cxd-btn cxd-btn--{$escapedVariant}"{$magAttr}{$extraAttrs}>
            <span class="cxd-btn__spinner"></span>
            <span data-btn-label>{$escapedLabel}</span>
        </button>
        HTML;
    }
}

