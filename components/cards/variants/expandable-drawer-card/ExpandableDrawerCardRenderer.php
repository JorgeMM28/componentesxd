<?php
// Variante 08 — Tarjeta con Despliegue de Detalles Técnicos — PHP 8.3 Renderer (components/cards/variants/expandable-drawer-card/ExpandableDrawerCardRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Cards;

final class ExpandableDrawerCardRenderer {
    public static function render(): string {
        return '<div class="cxd-cards-expandable-drawer-card"><h3>Variante 08 — Tarjeta con Despliegue de Detalles Técnicos</h3><p>Haz clic en el botón de expansión para revelar u ocultar el bloque completo de logs y nodos.</p></div>';
    }
}
