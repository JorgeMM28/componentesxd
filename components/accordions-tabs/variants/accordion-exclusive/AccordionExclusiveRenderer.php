<?php
// Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura — PHP 8.3 Renderer (components/accordions-tabs/variants/accordion-exclusive/AccordionExclusiveRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\AccordionsTabs;

final class AccordionExclusiveRenderer {
    public static function render(): string {
        return '<div class="cxd-accordions-tabs-accordion-exclusive"><h3>Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura</h3><p>Al expandir una sección técnica se cierran automáticamente las demás manteniendo el foco de lectura.</p></div>';
    }
}
