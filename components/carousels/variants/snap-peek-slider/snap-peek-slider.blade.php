{{-- Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso — Laravel Blade (components/carousels/variants/snap-peek-slider/snap-peek-slider.blade.php) --}}
@props(['title' => 'Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso'])
<div {{ $attributes->merge(['class' => 'cxd-carousels-snap-peek-slider']) }}>
    <h3>{{ $title }}</h3>
    <p>Muestra múltiples tarjetas visibles simultáneamente con desplazamiento suave, indicador numérico 01/05 y barra de progreso sincronizada.</p>
    {{ $slot }}
</div>
