{{-- Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro — Laravel Blade (components/special-hybrids/variants/carousel-spring-physics-deck/carousel-spring-physics-deck.blade.php) --}}
@props(['title' => 'Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-carousel-spring-physics-deck']) }}>
    <h3>{{ $title }}</h3>
    <p>Rota las tarjetas en el eje Z con física real de resorte mientras el contador financiero interpola el valor del nodo activo.</p>
    {{ $slot }}
</div>
