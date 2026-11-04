<?php
// Variante 04 — Tabla de Filas Flotantes Separadas — PHP 8.3 Renderer (components/tables/variants/floating-rows/FloatingRowsRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Tables;

final class FloatingRowsRenderer {
    public static function render(): string {
        return '<div class="cxd-tables-floating-rows"><h3>Variante 04 — Tabla de Filas Flotantes Separadas</h3><p>Cada fila es una tarjeta independiente con sombra propia, bordes redondeados y elevación al pasar el cursor.</p></div>';
    }
}
