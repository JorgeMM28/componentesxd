<?php
// Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck) — PHP 8.3 Renderer (components/carousels/variants/card-deck-throw/CardDeckThrowRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Carousels;

final class CardDeckThrowRenderer {
    public static function render(): string {
        return '<div class="cxd-carousels-card-deck-throw"><h3>Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck)</h3><p>Pila interactiva donde cada acción lanza la tarjeta activa con rotación física y promueve la siguiente del mazo.</p></div>';
    }
}
