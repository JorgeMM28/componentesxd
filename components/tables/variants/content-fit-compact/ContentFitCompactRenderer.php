<?php
// Variante 03 — Tabla Content-Fit (Ajustada al Contenido) — PHP 8.3 Renderer (components/tables/variants/content-fit-compact/ContentFitCompactRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Tables;

final class ContentFitCompactRenderer {
    public static function render(): string {
        return '<div class="cxd-tables-content-fit-compact"><h3>Variante 03 — Tabla Content-Fit (Ajustada al Contenido)</h3><p>Ancho automático exacto al texto (width: max-content), celdas ultra-compactas sin espacio desperdiciado.</p></div>';
    }
}
