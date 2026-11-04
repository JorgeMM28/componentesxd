<?php
// Variante 02 — Tabla Styleless (Sin Bordes / Editorial) — PHP 8.3 Renderer (components/tables/variants/styleless-minimal/StylelessMinimalRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Tables;

final class StylelessMinimalRenderer {
    public static function render(): string {
        return '<div class="cxd-tables-styleless-minimal"><h3>Variante 02 — Tabla Styleless (Sin Bordes / Editorial)</h3><p>Sin contenedor exterior ni líneas verticales. Puramente tipográfica con alineación generosa y subrayado sutil.</p></div>';
    }
}
