{{-- Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección) — Laravel Blade (components/carousels/variants/infinite-marquee/infinite-marquee.blade.php) --}}
@props(['title' => 'Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección)'])
<div {{ $attributes->merge(['class' => 'cxd-carousels-infinite-marquee']) }}>
    <h3>{{ $title }}</h3>
    <p>Cinta continua sin costuras para nodos, métricas o marcas con botones para invertir dirección, pausar o acelerar en vivo.</p>
    {{ $slot }}
</div>
