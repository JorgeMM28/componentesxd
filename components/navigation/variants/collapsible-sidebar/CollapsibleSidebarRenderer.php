<?php
// Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster — PHP 8.3 Renderer (components/navigation/variants/collapsible-sidebar/CollapsibleSidebarRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Navigation;

final class CollapsibleSidebarRenderer {
    public static function render(): string {
        return '<nav class="cxd-navigation-collapsible-sidebar"><h3>Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster</h3><p>Panel de navegación lateral con botón de colapso cinético (240px ↔ 68px), selector de entorno (Prod/Staging), árbol de módulos e indicador de salud.</p></nav>';
    }
}
