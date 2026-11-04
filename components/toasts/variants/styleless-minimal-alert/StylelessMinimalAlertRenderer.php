<?php
// Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea) — PHP 8.3 Renderer (components/toasts/variants/styleless-minimal-alert/StylelessMinimalAlertRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Toasts;

final class StylelessMinimalAlertRenderer {
    public static function render(): string {
        return '<div class="cxd-toasts-styleless-minimal-alert"><h3>Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea)</h3><p>Sin caja ni sombras: solo una línea vertical de 2px, texto directo y enlace de acción limpio.</p></div>';
    }
}
