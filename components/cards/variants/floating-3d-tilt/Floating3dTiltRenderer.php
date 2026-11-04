<?php
// Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva — PHP 8.3 Renderer (components/cards/variants/floating-3d-tilt/Floating3dTiltRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Cards;

final class Floating3dTiltRenderer {
    public static function render(): string {
        return '<div class="cxd-cards-floating-3d-tilt"><h3>Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva</h3><p>Mueve el cursor encima para inclinar la tarjeta en 3 ejes (rotateX / rotateY) con sombra profunda.</p></div>';
    }
}
