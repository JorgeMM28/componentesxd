<?php
// Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila) — PHP 8.3 Renderer (components/tables/variants/crud-actions/CrudActionsRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Tables;

final class CrudActionsRenderer {
    public static function render(): string {
        return '<div class="cxd-tables-crud-actions"><h3>Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila)</h3><p>Botones funcionales en cada fila para cambiar estado, duplicar registro o eliminar con animación Anime.js.</p></div>';
    }
}
