<?php
// Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo) — PHP 8.3 Renderer (components/tables/variants/interactive-sort-select/InteractiveSortSelectRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Tables;

final class InteractiveSortSelectRenderer {
    public static function render(): string {
        return '<div class="cxd-tables-interactive-sort-select"><h3>Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo)</h3><p>Haz clic en las cabeceras para ordenar filas dinámicamente y marca casillas para activar la barra de lote.</p></div>';
    }
}
