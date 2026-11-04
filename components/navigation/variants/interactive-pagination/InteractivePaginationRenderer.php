<?php
// Variante 06 — Barra de Paginación Interactiva con Salto de Página — PHP 8.3 Renderer (components/navigation/variants/interactive-pagination/InteractivePaginationRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Navigation;

final class InteractivePaginationRenderer {
    public static function render(): string {
        return '<div class="cxd-navigation-interactive-pagination"><h3>Variante 06 — Barra de Paginación Interactiva con Salto de Página</h3><p>Haz clic en los números o botones Anterior/Siguiente para actualizar la página activa en vivo.</p></div>';
    }
}
