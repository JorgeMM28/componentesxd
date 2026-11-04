<?php
// Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft) — PHP 8.3 Renderer (components/navigation/variants/microsoft-cascade-nav/MicrosoftCascadeNavRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Navigation;

final class MicrosoftCascadeNavRenderer {
    public static function render(): string {
        return '<div class="cxd-navigation-microsoft-cascade-nav"><h3>Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft)</h3><p>Selecciona una categoría principal para desplegar sus sub-categorías y luego sus variantes finales.</p></div>';
    }
}
