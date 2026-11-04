<?php
// Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo) — PHP 8.3 Renderer (components/tables/variants/inline-form-table/InlineFormTableRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Tables;

final class InlineFormTableRenderer {
    public static function render(): string {
        return '<div class="cxd-tables-inline-form-table"><h3>Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo)</h3><p>Celdas con inputs numéricos, selectores desplegables y switches que recalculan el subtotal de la tabla en vivo.</p></div>';
    }
}
