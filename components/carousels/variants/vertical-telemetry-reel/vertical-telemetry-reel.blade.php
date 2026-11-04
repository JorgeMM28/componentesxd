{{-- Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y — Laravel Blade (components/carousels/variants/vertical-telemetry-reel/vertical-telemetry-reel.blade.php) --}}
@props(['title' => 'Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y'])
<div {{ $attributes->merge(['class' => 'cxd-carousels-vertical-telemetry-reel']) }}>
    <h3>{{ $title }}</h3>
    <p>Transición vertical elástica entre paneles de telemetría con selector lateral numerado y controles arriba/abajo.</p>
    {{ $slot }}
</div>
