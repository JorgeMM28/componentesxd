{{-- Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación — Laravel Blade (components/carousels/variants/coverflow-3d/coverflow-3d.blade.php) --}}
@props(['title' => 'Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación'])
<div {{ $attributes->merge(['class' => 'cxd-carousels-coverflow-3d']) }}>
    <h3>{{ $title }}</h3>
    <p>Tarjetas en perspectiva tridimensional donde la diapositiva central avanza al frente y las laterales rotan en eje Y con Anime.js v4.</p>
    {{ $slot }}
</div>
