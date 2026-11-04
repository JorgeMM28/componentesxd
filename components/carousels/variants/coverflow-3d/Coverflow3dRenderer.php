<?php
// Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación — PHP 8.3 Renderer (components/carousels/variants/coverflow-3d/Coverflow3dRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Carousels;

final class Coverflow3dRenderer {
    public static function render(): string {
        return '<div class="cxd-carousels-coverflow-3d"><h3>Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación</h3><p>Tarjetas en perspectiva tridimensional donde la diapositiva central avanza al frente y las laterales rotan en eje Y con Anime.js v4.</p></div>';
    }
}
