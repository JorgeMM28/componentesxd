<?php
// Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado) — PHP 8.3 Renderer (components/buttons/variants/hold-confirm-safety/HoldConfirmSafetyRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Buttons;

final class HoldConfirmSafetyRenderer {
    public static function render(): string {
        return '<div class="cxd-buttons-hold-confirm-safety"><h3>Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado)</h3><p>Mantén presionado el botón para llenar la barra de progreso roja hasta el 100% y ejecutar la acción.</p></div>';
    }
}
