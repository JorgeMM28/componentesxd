{{-- Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck) — Laravel Blade (components/carousels/variants/card-deck-throw/card-deck-throw.blade.php) --}}
@props(['title' => 'Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck)'])
<div {{ $attributes->merge(['class' => 'cxd-carousels-card-deck-throw']) }}>
    <h3>{{ $title }}</h3>
    <p>Pila interactiva donde cada acción lanza la tarjeta activa con rotación física y promueve la siguiente del mazo.</p>
    {{ $slot }}
</div>
