<?php
// Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance) — PHP 8.3 Renderer (components/forms/variants/interactive-otp-pin/InteractiveOtpPinRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Forms;

final class InteractiveOtpPinRenderer {
    public static function render(): string {
        return '<div class="cxd-forms-interactive-otp-pin"><h3>Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance)</h3><p>Escribe números para avanzar automáticamente de casilla o usa el botón de autocompletar código.</p></div>';
    }
}
