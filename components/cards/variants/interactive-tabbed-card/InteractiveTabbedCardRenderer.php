<?php
// Variante 04 — Tarjeta Interactiva con Pestañas Internas — PHP 8.3 Renderer (components/cards/variants/interactive-tabbed-card/InteractiveTabbedCardRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Cards;

final class InteractiveTabbedCardRenderer {
    public static function render(): string {
        return '<div class="cxd-cards-interactive-tabbed-card"><h3>Variante 04 — Tarjeta Interactiva con Pestañas Internas</h3><p>Alterna entre Resumen, Métricas y Configuración dentro de la misma tarjeta sin recargar.</p></div>';
    }
}
