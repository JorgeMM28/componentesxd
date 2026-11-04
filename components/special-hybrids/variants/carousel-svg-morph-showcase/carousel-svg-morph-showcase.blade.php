{{-- Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo) — Laravel Blade (components/special-hybrids/variants/carousel-svg-morph-showcase/carousel-svg-morph-showcase.blade.php) --}}
@props(['title' => 'Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo)'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-carousel-svg-morph-showcase']) }}>
    <h3>{{ $title }}</h3>
    <p>Cada diapositiva del carrusel transforma los vértices del polígono vectorial central e interpola las métricas del sistema.</p>
    {{ $slot }}
</div>
