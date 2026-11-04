<?php
// Variante 01 — Toaster Moderno Flotante con Barra de Tiempo — PHP 8.3 Renderer (components/toasts/variants/modern-floating-toast/ModernFloatingToastRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Toasts;

final class ModernFloatingToastRenderer {
    public static function render(): string {
        return '<div class="cxd-toasts-modern-floating-toast"><h3>Variante 01 — Toaster Moderno Flotante con Barra de Tiempo</h3><p>Bordes redondeados suaves, icono en cápsula, botón de reinicio de barra de progreso y cierre animado.</p></div>';
    }
}
