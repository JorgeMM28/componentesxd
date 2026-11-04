{{-- Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva — Laravel Blade (components/cards/variants/floating-3d-tilt/floating-3d-tilt.blade.php) --}}
@props(['title' => 'Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva'])
<div {{ $attributes->merge(['class' => 'cxd-cards-floating-3d-tilt']) }}>
    <h3>{{ $title }}</h3>
    <p>Mueve el cursor encima para inclinar la tarjeta en 3 ejes (rotateX / rotateY) con sombra profunda.</p>
    {{ $slot }}
</div>
