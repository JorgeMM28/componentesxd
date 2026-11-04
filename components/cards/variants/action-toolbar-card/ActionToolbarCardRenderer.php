<?php
// Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar) — PHP 8.3 Renderer (components/cards/variants/action-toolbar-card/ActionToolbarCardRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Cards;

final class ActionToolbarCardRenderer {
    public static function render(): string {
        return '<div class="cxd-cards-action-toolbar-card"><h3>Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar)</h3><p>Incluye botones inferiores interactivos con contadores que se actualizan en tiempo real.</p></div>';
    }
}
