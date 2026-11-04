<?php
/**
 * ============================================================================
 * COMPONENTESXD — 02. 6-Digit 2FA OTP Auto-Advance Matrix (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/forms/variants/otp-security-matrix/OtpSecurityMatrixRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Forms;

final class OtpSecurityMatrixRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '02. 6-Digit 2FA OTP Auto-Advance Matrix'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'AUTH / 2FA'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-forms-otp-security-matrix" data-theme="{$theme}" data-variant="otp-security-matrix">
            <header class="cxd-forms-otp-security-matrix__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-forms-otp-security-matrix__body">
                <p>Cuadrícula de 6 dígitos con salto automático al escribir, soporte de pegado completo y retroceso inteligente.</p>
            </div>
        </section>
        HTML;
    }
}
