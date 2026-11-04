<?php
// Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa) — PHP 8.3 Renderer (components/carousels/variants/autoplay-story-bars/AutoplayStoryBarsRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Carousels;

final class AutoplayStoryBarsRenderer {
    public static function render(): string {
        return '<div class="cxd-carousels-autoplay-story-bars"><h3>Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa)</h3><p>Cabecera con segmentos de progreso temporales que avanzan automáticamente y permiten saltar a cualquier historia.</p></div>';
    }
}
