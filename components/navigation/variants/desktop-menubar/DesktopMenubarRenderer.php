<?php
// Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git) — PHP 8.3 Renderer (components/navigation/variants/desktop-menubar/DesktopMenubarRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Navigation;

final class DesktopMenubarRenderer {
    public static function render(): string {
        return '<nav class="cxd-navigation-desktop-menubar"><h3>Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git)</h3><p>Barra horizontal estilo aplicación de escritorio con menús desplegables en cascada al hacer hover o clic, atajos de teclado e indicador de sync.</p></nav>';
    }
}
