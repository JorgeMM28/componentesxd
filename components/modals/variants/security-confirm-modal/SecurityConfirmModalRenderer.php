<?php
// Variante 05 — Modal de Confirmación con Validación de Texto — PHP 8.3 Renderer (components/modals/variants/security-confirm-modal/SecurityConfirmModalRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Modals;

final class SecurityConfirmModalRenderer {
    public static function render(): string {
        return '<div class="cxd-modals-security-confirm-modal"><h3>Variante 05 — Modal de Confirmación con Validación de Texto</h3><p>Escribe "ELIMINAR" en el campo de confirmación para desbloquear el botón destructivo.</p></div>';
    }
}
