<?php
// Variante 02 — Botones Styleless (Subrayado Cinético sin Caja) — PHP 8.3 Renderer (components/buttons/variants/styleless-text-links/StylelessTextLinksRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Buttons;

final class StylelessTextLinksRenderer {
    public static function render(): string {
        return '<div class="cxd-buttons-styleless-text-links"><h3>Variante 02 — Botones Styleless (Subrayado Cinético sin Caja)</h3><p>Cero bordes ni fondos: línea inferior que crece de izquierda a derecha y flecha SVG que avanza al pasar el cursor.</p></div>';
    }
}
