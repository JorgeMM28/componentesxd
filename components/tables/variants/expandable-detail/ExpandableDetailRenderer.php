<?php
// Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel) — PHP 8.3 Renderer (components/tables/variants/expandable-detail/ExpandableDetailRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Tables;

final class ExpandableDetailRenderer {
    public static function render(): string {
        return '<div class="cxd-tables-expandable-detail"><h3>Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel)</h3><p>Haz clic en cualquier fila para desplegar un panel técnico con historial, métricas y especificaciones.</p></div>';
    }
}
