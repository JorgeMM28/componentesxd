{{-- Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa) — Laravel Blade (components/carousels/variants/autoplay-story-bars/autoplay-story-bars.blade.php) --}}
@props(['title' => 'Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa)'])
<div {{ $attributes->merge(['class' => 'cxd-carousels-autoplay-story-bars']) }}>
    <h3>{{ $title }}</h3>
    <p>Cabecera con segmentos de progreso temporales que avanzan automáticamente y permiten saltar a cualquier historia.</p>
    {{ $slot }}
</div>
