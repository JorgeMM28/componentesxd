{{-- Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones) — Laravel Blade (components/carousels/variants/split-editorial-showcase/split-editorial-showcase.blade.php) --}}
@props(['title' => 'Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones)'])
<div {{ $attributes->merge(['class' => 'cxd-carousels-split-editorial-showcase']) }}>
    <h3>{{ $title }}</h3>
    <p>Doble panel donde el lienzo visual izquierdo y la ficha técnica derecha se actualizan de forma coordinada con stagger.</p>
    {{ $slot }}
</div>
